// from data.js
var tableData = data;

// YOUR CODE HERE!

// Assign data to a descriptive varible 
var tableData = data;
// Select the button
var button= d3.select("#filter-btn");
// Select the form
var form= d3.select('#form');
// Event Handlers
button.on("click", runEnter);
form.on("submit",runEnter);
function runEnter() {
    // Prevent the page from refereshing 
    //d3.event.preventDefault();
    // Select the input element 
    var inputElement= d3.selectAll('#datetime');
    // value property of the new input element 
    var inputValue= inputElement.property("value");
    console.log(inputValue);

    var filterData= tableData.filter(alianSight=> alianSight.datetime === inputValue);
    console.log(filterData)

    // Apending the table
    var tbody= d3.select("tbody");
    tbody.html("");


    filterData.forEach((alian) =>{
        var row=tbody.append('tr');
        Object.values(alian).forEach((value)=>{
        var cell= row.append('td');
        cell.text(value)
    });

    });
    

}












