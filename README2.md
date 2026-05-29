# Análise de Emendas Parlamentares 2026

Site acadêmico desenvolvido em **HTML, CSS e JavaScript** com **Bootstrap**, criado a partir da adaptação de um template moderno gratuito. O projeto transforma os gráficos de um notebook do Observable em uma aplicação web organizada, responsiva e apresentável para avaliação acadêmica.

## Sobre o projeto

A aplicação apresenta uma análise exploratória e visual das **Emendas Parlamentares do ano de 2026**. Os dados foram previamente tratados com Python/Pandas e disponibilizados em formato CSV no GitHub.

O site organiza os gráficos em seções independentes, cada uma dentro de um card estilizado, mantendo uma identidade visual acadêmica baseada no template original.

## Membros da equipe

- André Farias de Lacerda Fialho
- Gutierre de Oliveira Melo
- Nathan Carlos da Silva Freire

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap
- Font Awesome
- Vega
- Vega-Lite
- Vega-Embed

## Fonte dos dados

A base de dados utilizada no projeto está hospedada no GitHub:

https://raw.githubusercontent.com/GutierreOliveira91/Projeto_Pandas/main/emendas.csv

Notebook Observable usado como referência:

https://observablehq.com/d/bc75e277cef509db

## Gráficos implementados

1. Distribuição de Emendas por Área de Governo
2. Top 10 Autores por Valor Empenhado
3. Comparativo entre Valor Empenhado e Valor Pago por Tipo
4. Proporção por Tipo de Emenda
5. Top 15 Localidades que mais Recebem Recursos
6. Relação entre Valor Empenhado e Valor Liquidado
7. Fluxo Orçamentário por Área de Governo
8. Top 10 Subfunções mais Atendidas
9. Top 10 Programas Orçamentários por Valor Empenhado

## Estrutura de pastas

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── graficos/
│   ├── grafico1.js
│   ├── grafico2.js
│   ├── grafico3.js
│   ├── grafico4.js
│   ├── grafico5.js
│   ├── grafico6.js
│   ├── grafico7.js
│   ├── grafico8.js
│   └── grafico9.js
├── images/
├── fonts/
└── README2.md
```

## Como executar o projeto

O projeto pode ser acessado seguindo o link abaixo:
https://gutierreoliveira91.github.io/Projeto_Emendas_Parlamentares_2026/

## Organização do código

- `index.html`: página principal do site, contendo navbar, seções, cards de gráficos e rodapé.
- `css/style.css`: estilos personalizados, paleta acadêmica, responsividade e adaptação visual do template.
- `js/script.js`: carregamento da base CSV, tratamento dos valores monetários e inicialização geral dos gráficos.
- `graficos/`: pasta com um arquivo JavaScript separado para cada gráfico.

## Objetivo acadêmico

O objetivo do projeto é demonstrar a capacidade de transformar uma análise feita em notebook em uma aplicação web navegável, modular e responsiva, facilitando a leitura dos dados e a apresentação dos resultados.

## Créditos

O layout foi adaptado a partir do template gratuito **Solution**, desenvolvido por GetTemplates.co e FreeHTML5.co.

As visualizações foram baseadas no notebook Observable:

https://observablehq.com/d/bc75e277cef509db
