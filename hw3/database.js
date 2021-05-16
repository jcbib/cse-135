$(document).ready(function () {
  // Call mongodb to retrieve data and write data into zinggrid

  // Static
  createStaticTable();
  // Performance
  createPerformanceTable();
  // Activity
  createActivityTable();
});

function createStaticTable() {
  // Call fetch GET
  const staticUrl = '/api/static/';
  fetch(staticUrl, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
  })
  .then(res => res.json())
  .then(data => 
    $("#staticDataTable").html(
      `
      <zing-grid
      ... pager
      page-size="7"
      caption = "Static Browser Data"
      data = '
      ` +
      (JSON.stringify(data)).replaceAll("'", "\"") +
      `
      '> </zing-grid>
      `
    )
  );
};

function createPerformanceTable() {
  // Call fetch GET
  const performanceUrl = '/api/performance/';
  fetch(performanceUrl, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
  })
  .then(res => res.json())
  .then(data => writePerformanceTable(data));
};

function writePerformanceTable(jsonData) {
  let tableArray = [];
  jsonData.forEach(obj => {
    let performanceArray = obj['performanceData'];
    // Append sessionId to each performanceData entry and push into bigger array
    performanceArray.forEach(performance => {
      performance['sessionId'] = obj['sessionId'];
      tableArray.push(performance);
    });
  });
  $("#performanceDataTable").html(
    `
    <zing-grid
    ... pager
    page-size="7"
    caption = "Performance Browser Data"
    data = '
    ` +
    JSON.stringify(tableArray) +
    `
    '> </zing-grid>
    `
  );
};

function createActivityTable() {
  // Call fetch GET and write to table
  const activityUrl = '/api/activity/';
  fetch(activityUrl, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
  })
  .then(res => res.json())
  .then(data => writeActivityTable(data));
};

function writeActivityTable(jsonData) {
  let tableArray = [];
  jsonData.forEach(obj => {
    let activityArray = obj['activityData'];
    // Append sessionId to each activityData entry and push into bigger array
    activityArray.forEach(activity => {
      activity['sessionId'] = obj['sessionId'];
      tableArray.push(activity);
    });
  });
  $("#activityDataTable").html(
    `
    <zing-grid
    ... pager
    page-size="7"
    caption = "Activity Browser Data"
    data = '
    ` +
    JSON.stringify(tableArray) +
    `
    '> </zing-grid>
    `
  );
};