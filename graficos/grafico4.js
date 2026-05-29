(function () {
    "use strict";

    GraficosEmendas.register({
        target: "#grafico4",
        createSpec(data) {
            return {
                $schema: "https://vega.github.io/schema/vega-lite/v5.json",
                data: { values: data },
                width: "container",
                height: 360,
                mark: { type: "arc", innerRadius: 60, stroke: "#ffffff", strokeWidth: 2 },
                encoding: {
                    theta: { aggregate: "count", type: "quantitative" },
                    color: { field: "Tipo de Emenda", type: "nominal", title: "Tipo" },
                    tooltip: [
                        { field: "Tipo de Emenda", type: "nominal" },
                        { aggregate: "count", type: "quantitative", title: "Quantidade" }
                    ]
                },
                title: "4. Proporção por Tipo de Emenda"
            };
        }
    });
}());
