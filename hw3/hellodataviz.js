$(document).ready(function () {
    drawPieChart();
});

function drawPieChart() {
    const staticUrl = '/api/static/';
    fetch(staticUrl, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    }).then(res => res.json())
    .then(data => fetchStaticDataGraph(data));
};

function fetchStaticDataGraph(jsonData) {
    let screenDimDict = {};
    // Count up the instances of a specific screen dimension
    jsonData.forEach(obj => {
        if (screenDimDict[obj['screenDimensions']] == undefined) {
            screenDimDict[obj['screenDimensions']] = 1;
        } else {
            screenDimDict[obj['screenDimensions']] += 1;
        }
    });
    console.log(screenDimDict);

    let series = [];
    for (let screenDim in screenDimDict) {
        let pieSlice = {
            "values": [screenDimDict[screenDim]],
            "text": screenDim,
            "legend-text": screenDim
        };
        series.push(pieSlice);
    }

    let pieConfig = {
        "type": "pie",
        "title": {
            "text"
            : "Different Screen Dimensions Used on jak-cse135.site"
        },
        'value-box': {
            placement: "out",
            'font-color': "black",
            'font-size': 16,
            'font-weight': "normal"
        },
        "legend": {

        },
        "series": series
    };

    zingchart.render({
        id: 'pieChart',
        data: pieConfig,
        height: 400,
        width: "100%"
    });
}