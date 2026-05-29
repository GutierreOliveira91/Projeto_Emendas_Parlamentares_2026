(function () {
    "use strict";

    GraficosEmendas.register({
        target: "#grafico6",
        createSpec(data) {
            return {
                $schema: "https://vega.github.io/schema/vega-lite/v5.json",
                data: { values: data },
                width: "container",
                height: 400,
                mark: { type: "point", filled: true, size: 72, opacity: 0.68 },
                encoding: {
                    x: { field: "valor_empenhado", type: "quantitative", title: "Valor Empenhado", axis: { format: ".2s" } },
                    y: { field: "valor_liquidado", type: "quantitative", title: "Valor Liquidado", axis: { format: ".2s" } },
                    color: { field: "Tipo de Emenda", type: "nominal", title: "Tipo" },
                    tooltip: [
                        { field: "Autor da emenda", type: "nominal" },
                        { field: "valor_empenhado", type: "quantitative", title: "Valor Empenhado", format: ",.2f" },
                        { field: "valor_liquidado", type: "quantitative", title: "Valor Liquidado", format: ",.2f" }
                    ]
                },
                title: "6. Relação entre Valor Empenhado e Valor Liquidado"
            };
        }
    });
}());
