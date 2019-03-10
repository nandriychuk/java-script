// from data.js
var tableData = data;

// grab references to the output
var tableBody = d3.select("tbody")

// Select filter field
var filterField = d3.select(".filter");

// Select the submit button
var filterButton = d3.select("#filter-btn");

// initialize data table before filtering
tableData.forEach((ufoData) => {
    var row = tableBody.append("tr");
    Object.entries(ufoData).forEach(([key,value]) => {
        var tableData = tableBody.append("td");
        tableData.text(value);
    });
});

//Create Event Listener
filterButton.on("click", function(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // // Select all input element 
    var date_inputElement = d3.select("#datetime");
    var city_inputElement = d3.select("#city");
    var state_inputElement = d3.select("#state");
    var country_inputElement = d3.select("#country");
    var shape_inputElement = d3.select("#shape");

    // Get the value property of all input element and convert them to lower case
    // for cases where user uses capital letters
    var dateElement = date_inputElement.property("value");
    var cityElement = city_inputElement.property("value").toLowerCase();
    var stateElement = state_inputElement.property("value").toLowerCase();
    var countryElement = country_inputElement.property("value").toLowerCase();
    var shapeElement = shape_inputElement.property("value").toLowerCase();

    //Create if statements to filter data
    var filteredData = data;
    if(dateElement !== ""){
        filteredData = filteredData.filter(row => row.datetime === dateElement)
    }
    if(cityElement !== ""){
        filteredData = filteredData.filter(row => row.city === cityElement)
    }
    if(stateElement !== ""){
        filteredData = filteredData.filter(row => row.state === stateElement)
    }
    if(countryElement !== ""){
        filteredData = filteredData.filter(row => row.country === countryElement)
    }
    if(shapeElement !== ""){
        filteredData = filteredData.filter(row => row.shape === shapeElement)
    }

    // clear the existing output
    tableBody.html("");

    //Pass filtered data to data table and display it
    filteredData.forEach((ufoData) => {
        var row = tableBody.append("tr");
        Object.entries(ufoData).forEach(([key,value]) => {
            var tableData = tableBody.append("td");
            tableData.text(value);
        });
    });
});


