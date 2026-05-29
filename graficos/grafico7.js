(function () {
    "use strict";

    GraficosEmendas.register({
        target: "#grafico7",
        createSpec(data) {
            return {
                $schema: "https://vega.github.io/schema/vega-lite/v5.json",
                data: { values: data },
                width: "container",
                height: 420,
                mark: { type: "area", opacity: 0.7, line: true, point: true },
                transform: [
                    { fold: ["valor_empenhado", "valor_pago"], as: ["Tipo", "Valor"] }
                ],
                encoding: {
                    x: { field: "Função", type: "nominal", title: "Área", axis: { labelAngle: -35 } },
                    y: { aggregate: "sum", field: "Valor", type: "quantitative", title: "Soma dos Valores (R$)", axis: { format: ".2s" } },
                    color: { field: "Tipo", type: "nominal", scale: { range: ["#2f6fed", "#f0a12b"] } },
                    tooltip: [
                        { field: "Função", type: "nominal" },
                        { field: "Tipo", type: "nominal" },
                        { aggregate: "sum", field: "Valor", type: "quantitative", title: "Valor", format: ",.2f" }
                    ]
                },
                title: "7. Fluxo Orçamentário por Área de Governo"
            };
        }
    });
}());
