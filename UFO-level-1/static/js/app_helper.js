//starter file from TA - Erin Wills
// provided comments for basic version of HW
// included function names and filteredData variable

// from data.js
const tableData = data;

// get table references where table will be inserted
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Step 1: Loop Through `data` and grab each object
data.forEach(function(ufo) {
  console.log(ufo);
});

// // Step 2:  Use d3 to append one table row `tr` for each UFO  object
// data.forEach(function(ufo) {
//             console.log(ufo);
//             var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to grab each value
// data.forEach(function(ufo) {
//   console.log(ufo);
//   var row = tbody.append("tr");

//   Object.entries(ufo).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(ufo) {
//   console.log(ufo);
//   var row = tbody.append("tr");

//   Object.entries(ufo).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
// data.forEach(function(ufo) {
//   console.log(ufo);
//   var row = tbody.append("tr");
//   Object.entries(ufo).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });


function buildTable(data) {
  // When the page loads, it needs to display the table
  // But if the table reloads then you may need to ensure the 
  // previous output is cleared/overwritten from scratch 

  // Think of the class activities for generating tables

}

function handleClick() {

  // Grab the datetime value from the filter
  

  // grab all the table data and set to filteredData
  
  // Check to see if a date was entered and filter the
  // data using that date.


  

  

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  // take your filtered data and put it into the buildTable to rebuild the table with the filtered data
  buildTable(filteredData);
}

// Attach an event to listen for the form button that calls handleClick on a click of the filter button


// Build the table when the page loads
buildTable(tableData);
