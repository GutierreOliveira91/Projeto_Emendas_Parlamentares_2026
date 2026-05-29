(function () {
    "use strict";

    const DATA_URL = "https://raw.githubusercontent.com/GutierreOliveira91/Projeto_Pandas/main/emendas.csv";
    const registry = [];

    window.GraficosEmendas = {
        register(config) {
            registry.push(config);
        }
    };

    function myFunction(x) {
        x.classList.toggle("change");
    }

    window.myFunction = myFunction;

    function parseMoeda(value) {
        if (!value) {
            return 0;
        }

        return Number(String(value).replace(/\s+/g, "").replace(/\./g, "").replace(",", ".")) || 0;
    }

    function parseCsv(text) {
        const rows = [];
        let row = [];
        let value = "";
        let insideQuotes = false;
        const firstLine = text.split(/\r?\n/, 1)[0] || "";
        const delimiter = firstLine.includes(";") ? ";" : ",";

        for (let i = 0; i < text.length; i += 1) {
            const char = text[i];
            const next = text[i + 1];

            if (char === '"' && insideQuotes && next === '"') {
                value += '"';
                i += 1;
            } else if (char === '"') {
                insideQuotes = !insideQuotes;
            } else if (char === delimiter && !insideQuotes) {
                row.push(value);
                value = "";
            } else if ((char === "\n" || char === "\r") && !insideQuotes) {
                if (char === "\r" && next === "\n") {
                    i += 1;
                }
                row.push(value);
                rows.push(row);
                row = [];
                value = "";
            } else {
                value += char;
            }
        }

        if (value || row.length) {
            row.push(value);
            rows.push(row);
        }

        const headers = (rows.shift() || []).map((header) => header.replace(/^\uFEFF/, ""));
        return rows
            .filter((item) => item.length === headers.length)
            .map((item) => headers.reduce((record, header, index) => {
                record[header] = item[index];
                return record;
            }, {}));
    }

    async function carregarDados() {
        const response = await fetch(DATA_URL);
        if (!response.ok) {
            throw new Error("Não foi possível carregar a base de dados.");
        }

        const csv = await response.text();
        return parseCsv(csv).map((record) => ({
            ...record,
            valor_empenhado: parseMoeda(record["Valor empenhado"]),
            valor_pago: parseMoeda(record["Valor pago"]),
            valor_liquidado: parseMoeda(record["Valor liquidado"])
        }));
    }

    function setStatus(target, message, type) {
        const element = document.querySelector(target);
        if (!element) {
            return;
        }

        element.innerHTML = `<div class="chart-status chart-status-${type || "info"}">${message}</div>`;
    }

    async function inicializarGraficos() {
        registry.forEach((graph) => setStatus(graph.target, "Carregando gráfico...", "info"));

        try {
            const data = await carregarDados();

            await Promise.all(registry.map((graph) => {
                const spec = graph.createSpec(data);
                return vegaEmbed(graph.target, spec, {
                    actions: false,
                    renderer: "svg",
                    theme: "quartz"
                });
            }));
        } catch (error) {
            registry.forEach((graph) => {
                setStatus(graph.target, "Não foi possível renderizar este gráfico. Verifique a conexão com a base de dados.", "error");
            });
            console.error(error);
        }
    }

    document.addEventListener("DOMContentLoaded", inicializarGraficos);
}());
