(function () {
    "use strict";

    GraficosEmendas.register({
        target: "#grafico3",
        createSpec(data) {
            return {
                $schema: "https://vega.github.io/schema/vega-lite/v5.json",
                data: { values: data },
                width: "container",
                height: 390,
                mark: { type: "bar", cornerRadiusEnd: 5, opacity: 0.78 },
                transform: [
                    { fold: ["valor_empenhado", "valor_pago"], as: ["Status", "Valor"] }
                ],
                encoding: {
                    x: { field: "Tipo de Emenda", type: "nominal", title: "Tipo", axis: { labelAngle: -20 } },
                    y: { aggregate: "sum", field: "Valor", type: "quantitative", stack: null, title: "Valor Total (R$)", axis: { format: ".2s" } },
                    color: {
                        field: "Status",
                        type: "nominal",
                        scale: { range: ["#2f6fed", "#f0a12b"] },
                        title: "Status"
                    },
                    tooltip: [
                        { field: "Tipo de Emenda", type: "nominal" },
                        { field: "Status", type: "nominal" },
                        { aggregate: "sum", field: "Valor", type: "quantitative", title: "Valor", format: ",.2f" }
                    ]
                },
                title: "3. Comparativo: Valor Empenhado vs. Valor Pago por Tipo"
            };
        }
    });
}());
