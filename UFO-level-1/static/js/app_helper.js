// from data.js
const tableData = data;

function buildTable(data) {
// get table references where table will be inserted
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// // Loop Through `data` and grab each object
// data.forEach(function(ufo) {
//   console.log(ufo);
// });

// // Use d3 to append one table row `tr` for each UFO  object
// data.forEach(function(ufo) {
//             console.log(ufo);
//             var row = tbody.append("tr");
// });


// // Use `Object.entries` to grab each value
// data.forEach(function(ufo) {
//    console.log(ufo);
//      var row = tbody.append("tr");
//   Object.entries(ufo).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Use d3 to append 1
// data.forEach(function(ufo) {
//   console.log(ufo);
//   var row = tbody.append("tr");

//   Object.entries(ufo).forEach(function([key, value]) {
//     console.log(key, value);

//     // Append a cell to the row for each value
//     // in the data object
//     var cell = row.append("td");
//   });
// });

//  Use d3 to update each cell's text with
// values
data.forEach(function(ufo) {
  console.log(ufo);
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});
};

// clear the table for new data
function deleteTbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

  
function handleClick() {
  button.on("click", () => {
    d3.event.preventDefault();
    var inputDate = inputField1.property("value").trim();  
    var filterDate = data.filter(data => data.datetime === inputDate);
    console.log(filterDate)
  

  

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  // take your filtered data and put it into the buildTable to rebuild the table with the filtered data
  buildTable(filteredData);
}

// Attach an event to listen for the form button that calls handleClick on a click of the filter button


// Build the table when the page loads
buildTable(tableData);
