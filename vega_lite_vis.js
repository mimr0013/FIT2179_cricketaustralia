
/*
    CHART 1 — Lollipop Chart
    vg_1 stores the path to the lollipop chart JSON file.
    The path is relative to index.html:
*/
var vg_1 = "charts/lollipop.vg.json";


vegaEmbed("#lollipop", vg_1).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);


/*
    CHART 2 — Line Chart
    vg_2 stores the path to the line chart JSON file.
*/
var vg_2 = "charts/linechart.vg.json";


vegaEmbed("#linechart", vg_2).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);


/*
    CHART 3 — Proportional Symbol Map
    vg_3 stores the path to the symbol map JSON file.
*/
var vg_3 = "charts/symbolmap.vg.json";


vegaEmbed("#symbolmap", vg_3).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);