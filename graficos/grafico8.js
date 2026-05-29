(function () {
    "use strict";

    GraficosEmendas.register({
        target: "#grafico8",
        createSpec(data) {
            return {
                $schema: "https://vega.github.io/schema/vega-lite/v5.json",
                data: { values: data },
                width: "container",
                height: 390,
                mark: { type: "bar", cornerRadiusEnd: 6, color: "#f0a12b" },
                transform: [
                    { aggregate: [{ op: "count", as: "qtd" }], groupby: ["Subfunção"] },
                    { window: [{ op: "rank", as: "rank" }], sort: [{ field: "qtd", order: "descending" }] },
                    { filter: "datum.rank <= 10" }
                ],
                encoding: {
                    x: { field: "qtd", type: "quantitative", title: "Qtd de Emendas" },
                    y: { field: "Subfunção", type: "nominal", sort: "-x", title: "Subfunção" },
                    tooltip: [
                        { field: "Subfunção", type: "nominal" },
                        { field: "qtd", type: "quantitative", title: "Quantidade" }
                    ]
                },
                title: "8. Top 10 Subfunções mais Atendidas"
            };
        }
    });
}());
