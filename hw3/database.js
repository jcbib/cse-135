$(document).ready(function() {
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
    // console.log(data);
    // $("#staticDataTable").html(
    //     `
    //     <zing-grid
    //     caption = "Static Browser Data"
    //     data = "[
    //     ` + data + `
    //     ]> </zing-grid>
    //     `
    // );
    // $("#staticDataTable").html("<zing-grid caption = \"Static Browser Data\" data = \"" + "\"> </zing-grid>");
    // $("#staticDataTable").html("<zing-grid" + " var caption = \'" + caption + "\' var data = \'[{" + data + " }]\'> </zing-grid>");
};

function createPerformanceTable() {
    var caption = "Performance Browser Data";
    // Call fetch GET
    var data = {
        "test" : "performance"
    };
};

function createActivityTable() {
    var caption = "Activity Browser Data";
    // Call fetch GET
    var data = {
        "test" : "activity"
    };
};