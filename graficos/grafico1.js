(function () {
    "use strict";

    GraficosEmendas.register({
        target: "#grafico1",
        createSpec(data) {
            return {
                $schema: "https://vega.github.io/schema/vega-lite/v5.json",
                data: { values: data },
                width: "container",
                height: 400,
                mark: { type: "bar", cornerRadiusEnd: 6 },
                encoding: {
                    y: { field: "Função", type: "nominal", sort: "-x", title: "Área (Função)" },
                    x: { aggregate: "count", type: "quantitative", title: "Quantidade de Emendas" },
                    color: { field: "Função", type: "nominal", legend: null },
                    tooltip: [
                        { field: "Função", type: "nominal" },
                        { aggregate: "count", type: "quantitative", title: "Quantidade" }
                    ]
                },
                title: "1. Quantidade de Emendas por Área de Governo"
            };
        }
    });
}());
