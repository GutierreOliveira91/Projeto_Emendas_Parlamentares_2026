(function () {
    "use strict";

    GraficosEmendas.register({
        target: "#grafico9",
        createSpec(data) {
            return {
                $schema: "https://vega.github.io/schema/vega-lite/v5.json",
                data: { values: data },
                width: "container",
                height: 430,
                mark: { type: "bar", cornerRadiusEnd: 6, color: "#7b4bb2" },
                transform: [
                    { aggregate: [{ op: "sum", field: "valor_empenhado", as: "total" }], groupby: ["Programa Orçamentário"] },
                    { window: [{ op: "rank", as: "rank" }], sort: [{ field: "total", order: "descending" }] },
                    { filter: "datum.rank <= 10" }
                ],
                encoding: {
                    y: { field: "Programa Orçamentário", type: "nominal", sort: "-x", title: "Programa Orçamentário" },
                    x: { field: "total", type: "quantitative", title: "Total Empenhado (R$)", axis: { format: ".2s" } },
                    tooltip: [
                        { field: "Programa Orçamentário", type: "nominal" },
                        { field: "total", type: "quantitative", title: "Total Empenhado", format: ",.2f" }
                    ]
                },
                title: "9. Top 10 Programas Orçamentários com Maior Investimento"
            };
        }
    });
}());
