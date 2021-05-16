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
  const staticUrl = '/api/static/';;
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
  .then(data => 
    $("#performanceDataTable").html(
      `
      <zing-grid
      ... pager
      page-size="7"
      caption = "Performance Browser Data"
      data = '
      ` +
      JSON.stringify(data) +
      `
      '> </zing-grid>
      `
    )
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
  .then(data => writeActivityTable(data))
    // $("#activityDataTable").html(
  //   console.log(
  //     `
  //     <zing-grid
  //     ... pager
  //     page-size="7"
  //     caption = "Activity Browser Data"
  //     data = '
  //     ` +
  //     JSON.stringify(data) +
  //     `
  //     '> </zing-grid>
  //     `
  //   )
  // );
};

function writeActivityTable(jsonData) {
  console.log(JSON.stringify(jsonData));
};