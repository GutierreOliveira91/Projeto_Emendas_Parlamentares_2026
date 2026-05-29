(function () {
    "use strict";

    GraficosEmendas.register({
        target: "#grafico2",
        createSpec(data) {
            return {
                $schema: "https://vega.github.io/schema/vega-lite/v5.json",
                data: { values: data },
                width: "container",
                height: 420,
                mark: { type: "bar", cornerRadiusEnd: 6, color: "#2f6fed" },
                transform: [
                    { aggregate: [{ op: "sum", field: "valor_empenhado", as: "total" }], groupby: ["Autor da emenda"] },
                    { window: [{ op: "rank", as: "rank" }], sort: [{ field: "total", order: "descending" }] },
                    { filter: "datum.rank <= 10" }
                ],
                encoding: {
                    x: { field: "Autor da emenda", type: "nominal", sort: "-y", title: "Autor", axis: { labelAngle: -35 } },
                    y: { field: "total", type: "quantitative", title: "Total Empenhado (R$)", axis: { format: ".2s" } },
                    tooltip: [
                        { field: "Autor da emenda", type: "nominal" },
                        { field: "total", type: "quantitative", title: "Total Empenhado", format: ",.2f" }
                    ]
                },
                title: "2. Top 10 Autores por Maior Valor Empenhado"
            };
        }
    });
}());
