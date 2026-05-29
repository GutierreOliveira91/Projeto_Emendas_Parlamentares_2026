(function () {
    "use strict";

    GraficosEmendas.register({
        target: "#grafico5",
        createSpec(data) {
            return {
                $schema: "https://vega.github.io/schema/vega-lite/v5.json",
                data: { values: data },
                width: "container",
                height: 430,
                mark: { type: "bar", cornerRadiusEnd: 6, color: "#16805d" },
                transform: [
                    { aggregate: [{ op: "sum", field: "valor_empenhado", as: "total" }], groupby: ["Localidade do gasto (Regionalização)"] },
                    { window: [{ op: "rank", as: "rank" }], sort: [{ field: "total", order: "descending" }] },
                    { filter: "datum.rank <= 15" }
                ],
                encoding: {
                    y: { field: "Localidade do gasto (Regionalização)", type: "nominal", sort: "-x", title: "Localidade" },
                    x: { field: "total", type: "quantitative", title: "Total Empenhado (R$)", axis: { format: ".2s" } },
                    tooltip: [
                        { field: "Localidade do gasto (Regionalização)", type: "nominal" },
                        { field: "total", type: "quantitative", title: "Total Empenhado", format: ",.2f" }
                    ]
                },
                title: "5. Top 15 Localidades que mais Recebem Recursos"
            };
        }
    });
}());
