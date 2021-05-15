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

const fetchCourses = async args => {
  const res = await fetch(`/coursemanagement/getschoolcourse`, {
    method: "POST",
    body: JSON.stringify({ schoolId: currentSchool2 }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const body = await res.json();
  console.log("coursesbody is:", body)
  return body;
};

// const fetchActivityJSON = async args => {
//   const activityUrl = '/api/activity/';
//   const res = await fetch(activityUrl, {
//     method: 'GET',
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });
//   const activityData = await res.json();
//   console.log("FETCH ACTIVITY DATA: " + activityData);
//   return activityData;
// };

// async function fetchActivityJSON() {
//   const activityUrl = '/api/activity/';
//   fetch(activityUrl, {
//     method: 'GET',
//     headers: {
//       "Content-Type": "application/json"
//     },
//   })
//   .then(res => res.json())
//   .then(data => {return data})
// }

function createActivityTable() {
  // Call fetch GET
  var activityData;
  const activityUrl = '/api/activity/';
  fetch(activityUrl, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
  })
  .then(res => res.json())
  .then(data => 
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
    )
  );

  console.log(activityData);
  // console.log(activityDat);

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