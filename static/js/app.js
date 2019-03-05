// from data.js
var tableData = data;

// grab references to the output
var tableBody = d3.select("tbody")

// Select the submit button
var filterButton = d3.select("#filter-btn");

tableData.forEach((ufoData) => {
    var row = tableBody.append("tr");
    Object.entries(ufoData).forEach(([key,value]) => {
        var tableData = tableBody.append("td");
        tableData.text(value);
    });
});

filterButton.on("click", function(){
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element 
    var inputElement = d3.select(".form-control");

    // Get the value property of the input element
    var inputValue = inputElement.property("value")

    // clear the existing output
    tableBody.html("");

    // Define filter
    var filteredData = tableData.filter(date => date.datetime === inputValue);

    filteredData.forEach((ufoData) => {
        var row = tableBody.append("tr");
        Object.entries(ufoData).forEach(([key,value]) => {
            var tableData = tableBody.append("td");
            tableData.text(value);
        });
    });
})

// d3.selectAll(".table-head")
//       .on("mouseover", function(){
//           d3.select(this)
//             .style("background-color", "orange");

//           // Get current event info
//           console.log(d3.event);
          
//           // Get x & y co-ordinates
//           console.log(d3.mouse(this));
//       })
//       .on("mouseout", function(){
//           d3.select(this)
//             .style("background-color", "#1b3146")
//       });


// YOUR CODE HERE!




// tableData.forEach((ufoData) => {
//     var row = tableBody.append("tr");
//     Object.entries(ufoData).forEach(([key,value]) => {
//         var tableData = tableBody.append("td");
//         tableData.text(value);
//     });
// });

// var filteredData = 






// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//     console.log(weatherReport);
//     var row = tbody.append("tr");
//     Object.entries(weatherReport).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       // in the weather report object
//       var cell = tbody.append("td");
//       cell.text(value);
//     });
//   });