// from data.js
const tableData = data;

function buildTable(data) {
	// get table references where table will be inserted
	var tbody = d3.select("tbody");
	tbody.html("");

	// Console.log the weather data from data.js
	console.log(data);

	// Use d3 to append one table row `tr` for each UFO  object,  Use `Object.entries` to grab each value,  Use d3 to update each cell's text with
	// values
	data.forEach(function (ufo) {
		console.log(ufo);
		var row = tbody.append("tr");
		Object.entries(ufo).forEach(function ([key, value]) {
			console.log(key, value);

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

var button = d3.select("#filter-btn")
button.on("click", handleClick)

function handleClick() {

	d3.event.preventDefault();
	var inputelement = d3.select("#datetime")
	var inputvalue = inputelement.property("value")
	console.log(inputvalue)
	var filteredData = tableData.filter(x => x.datetime === inputvalue);
	console.log(filteredData)
	buildTable(filteredData);
}

// Attach an event to listen for the form button that calls handleClick on a click of the filter button


// Build the table when the page loads
buildTable(tableData)



var inputDate = inputField1.property("value").trim();
var inputCity = inputField2.property("value").toLowerCase().trim();


// Filter by field matching input value
var filterDate = data.filter(data => data.datetime === inputDate);
console.log(filterDate)
var filterCity = data.filter(data => data.city === inputCity);
console.log(filterCity)
var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity);
console.log(filterData)

// Add filtered sighting to table
tbody.html("");

let response = {
	filterData, filterCity, filterDate
}

if (response.filterData.length !== 0) {
	populate(filterData);
}
else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0))) {
	populate(filterCity) || populate(filterDate);

}
else {
	tbody.append("tr").append("td").text("No results found!");
}

resetbtn.on("click", () => {
	tbody.html("");
	populate(data)
	console.log("Table reset")
})



