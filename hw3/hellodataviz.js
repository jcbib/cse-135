const MON = 0;
const TUE = 1;
const WED = 2;
const THU = 3;
const FRI = 4;
const SAT = 5;
const SUN = 6;

$(document).ready(function () {
    drawPieChart();
    drawBarChart();
    drawLineChart();
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

function drawLineChart() {
    const activityUrl = '/api/activity/';
    fetch(activityUrl, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => res.json())
        .then(data => fetchBarDataGraph(data));
};

function fetchBarDataGraph(jsonData) {
    let allActivityArray = [];
    jsonData.forEach(obj => {
        let activityArray = obj['activityData'];
        // Push each activityData into bigger array
        activityArray.forEach(activity => {
            allActivityArray.push(activity);
        });
    });

    let anhVisit = [0, 0, 0, 0, 0, 0, 0];
    let kellyVisit = [0, 0, 0, 0, 0, 0, 0];
    let jonVisit = [0, 0, 0, 0, 0, 0, 0];

    allActivityArray.forEach(activity => {
        // extract day of the week and set it to uppercase
        if (activity['timeUserEnter']) {
            let date = activity['timeUserEnter'].substring(0, 3).toUpperCase();
            let name = activity['currentPage'].split("/");
            if (name[3] == 'anh') {
                let idx = findDate(date);
                anhVisit[idx] += 1;
            }
            if (name[3] == 'kelly') {
                let idx = findDate(date);
                kellyVisit[idx] += 1;
            }
            if (name[3] == 'jon') {
                let idx = findDate(date);
                jonVisit[idx] += 1;
            }
        }
    });

    var lineConfig = {
        "type": "line",
        "legend": {

        },
        "title": {
            "text": "Number of Pings Per Day On Individual Portfolio"
        },
        'scale-x': {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
        "series": [{
            "values": anhVisit,
            "text": "Anh",
            "legend-text": "Anh",
            "line-color": "#2a7ca",
            "line-width": 5,
            "marker": {
                "background-color": "#2a7ca"
            }

        }, {
            "values": kellyVisit,
            "text": "Kelly",
            "legend-text": "Kelly",
            "line-color": "#fe4a49",
            "line-width": 5,
            "marker": {
                "background-color": "#fe4a49"
            }

        }, {
            "values": jonVisit,
            "text": "Jon-fed766",
            "legend-text": "Jon",
            "line-color": "#fed766",
            "line-width": 5,
            "marker": {
                "background-color": "#fed766"
            }
        }]
    };

    zingchart.render({
        id: 'lineChart',
        data: lineConfig,
        height: "100%",
        width: "100%"
    });

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
            "text": "Different Screen Dimensions Used on jak-cse135.site"
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

    let keyUpCounts = [0, 0, 0, 0, 0, 0, 0];
    let keyDownCounts = [0, 0, 0, 0, 0, 0, 0];

    allActivityArray.forEach(activity => {
        // extract day of the week and set it to uppercase
        if (activity['timeUserEnter']) {
            let date = activity['timeUserEnter'].substring(0, 3).toUpperCase();
            if (activity['keyUp']) {
                let idx = findDate(date);
                keyUpCounts[idx] += 1;
            }
            if (activity['keyDown']) {
                let idx = findDate(date);
                keyDownCounts[idx] += 1;
            }
        }
    });

    var barConfig = {
        type: "bar",
        "legend": {

        },
        "title": {
            "text": "Number of Key Strokes Per Day of the Week"
        },
        'scale-x': {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
        series: [{
                values: keyUpCounts,
                "text": "Key Up Strokes",
                "legend-text": "Key Up Strokes",
                "background-color": "#004c6d"
            },
            {
                values: keyDownCounts,
                "text": "Key Down Strokes",
                "legend-text": "Key Down Strokes",
                "background-color": "#5380a0"
            }
        ]
    };

    zingchart.render({
        id: 'barChart',
        data: barConfig,
        height: "100%",
        width: "100%"
    });
};

function findDate(date) {
    switch (date) {
        case 'MON':
            return MON;
        case 'TUE':
            return TUE;
        case 'WED':
            return WED;
        case 'THU':
            return THU;
        case 'FRI':
            return FRI;
        case 'SAT':
            return SAT;
        case 'SUN':
            return SUN;
    };
};