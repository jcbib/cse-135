const DataSchema = require('../Schema/DataSchemas')

const activityUrl = '/api/activity/';
var activityData;

fetch(activityUrl, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
  })
  .then(res => res.json())
  .then(data => console.log(data))

//.then(data =>
//  activityData = new DataSchema.ActivityModel(data)
//)



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
  var caption = "Static Browser Data";
  // Call fetch GET
  var data = [{
      "name": "Philip J. Fry",
      "origin": "Earth"
    },
    {
      "name": "Turanga Leela",
      "origin": "Earth"
    },
    {
      "name": "Bender Bending Rodriguez",
      "origin": "Earth"
    },
    {
      "name": "Amy Wong",
      "origin": "Mars"
    },
    {
      "name": "Doctor John Zoidberg",
      "origin": "Decapod 10"
    },
    {
      "name": "Lord Nibbler",
      "origin": "Earth"
    }
  ];


  $("#staticDataTable").html(
    `
    <zing-grid
    caption = "Static Browser Data"
    data = '
    ` +
    JSON.stringify(data) +
    `
    '> </zing-grid>
    `
  );
};

function createPerformanceTable() {
  // Call fetch GET
  var data = [{
    "test": "performance"
  }];
  $("#performanceDataTable").html(
    `
    <zing-grid
    caption = "Performance Browser Data"
    data = '
    ` +
    JSON.stringify(data) +
    `
    '> </zing-grid>
    `
  );
};

function createActivityTable() {
  // Call fetch GET
  var data = [{
    "test": "activity"
  }];
  $("#activityDataTable").html(
    `
    <zing-grid
    caption = "Activity Browser Data"
    data = '
    ` +
    JSON.stringify(data) +
    `
    '> </zing-grid>
    `
  );
};