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
    console.log(jsonData);
    let screenDimDict = {};
    jsonData.forEach(obj => {
        if (screenDimDict[obj['screenDimensions']] == undefined) {
            screenDimDict[obj['screenDimensions']] = 1;
        } else {
            screenDimDict[obj['screenDimensions']] += 1;
        }
    });
    console.log(screenDimDict);

    var pieConfig = {
        "type": "pie",
        "title": {
            "text": "A Pie Chart"
        },
        "legend": {

        },
        "series": [{
                "values": [59],
                "text": "Test 1-001A3",
                "legend-text": "Test 1"
            },
            {
                "values": [55],
                "text": "Test 2-002B4",
                "legend-text": "Test 2"
            },
            {
                "values": [30],
                "text": "Test 3-004C3",
                "legend-text": "Test 3"
            },
            {
                "values": [28],
                "text": "Test 4-004D1",
                "legend-text": "Test 4"
            },
            {
                "values": [15],
                "text": "Test 5-034CE",
                "legend-text": "Test 5"
            }
        ]
    };

    zingchart.render({
        id: 'pieChart',
        data: pieConfig,
        height: 400,
        width: "100%"
    });
}