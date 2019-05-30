// from data.js
var tableData = data;

// YOUR CODE HERE!

// from data.js

var tableData = data;

// the function used to display the UFO sightings

function tableDisplay(ufoSightings) {
    var tbody = d3.select("tbody");
    ufoSightings.forEach((ufoRecord) => {
      var row = tbody.append("tr");
      Object.entries(ufoRecord).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
      });
    });
  };
  
  // clear the table for new data

  function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };
  
  // The initial display of all the UFO sightings

  console.log(tableData);
  tableDisplay(tableData);
  
  // Add the 'Filter Table' button

  var button = d3.select("#filter-btn");
  
  // Add a filter  to filter the database and display it

  button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTbody();
    var dateInput = d3.select("#datetime").property("value");
    
    if (dateInput.trim() === "" ) {

      // display the entire database if the date field is empty and has no date

      var filteredData = tableData;
    } else {
        
      // otherwise, display the filtered dataset  

      var filteredData = tableData.filter(ufoSighting => 
        ufoSighting.datetime === dateInput.trim());
    };
  
    // display the message if no records are found

    if (filteredData.length == 0) {
      d3.select("tbody")
        .append("tr")
        .append("td")
          .attr("colspan", 7)
          .html("<h4>No Records Found</h4>");
    };
  
    console.log(filteredData);
    tableDisplay(filteredData);
  });