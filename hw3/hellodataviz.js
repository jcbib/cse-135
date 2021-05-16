const MON = 0;
const TUE = 1;
const WED = 2;
const THU = 3;
const FRI = 4;
const SAT = 5;
const SUN = 6;

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
        "plot": {
            'value-box': {
                'placement': "out",
                'font-color': "black",
                'font-size': 16,
                'font-weight': "normal"
            }
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
};

function drawBarChart() {
    const activityUrl = '/api/activity/';
    fetch(activityUrl, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    }).then(res => res.json())
    .then(data => fetchActivityDataGraph(data));
};

function fetchActivityDataGraph(jsonData) {
    let allActivityArray = [];
    jsonData.forEach(obj => {
        let activityArray = obj['activityData'];
        // Push each activityData into bigger array
        activityArray.forEach(activity => {
            allActivityArray.push(activity);
        });
    });


    var barConfig = {
        type: "bar",
        "legend": {

        },
        series: [{
                values: [20, 40, 25, 50, 15, 45, 33, 34],
                "text": "Test 1-001A3",
                "legend-text": "Test 1"
            },
            {
                values: [5, 30, 21, 18, 59, 50, 28, 33],
                "text": "Test 2-002B4",
                "legend-text": "Test 2"
            },
            {
                values: [30, 5, 18, 21, 33, 41, 29, 15],
                "text": "Test 3-004C3",
                "legend-text": "Test 3"
            }
        ]
    };

    zingchart.render({
        id: 'barChart',
        data: barConfig,
        height: "100%",
        width: "100%"
    });
}
