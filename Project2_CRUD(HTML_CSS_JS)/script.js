//CRUD - Create, Read, Update, Delete

//Global Variables
var row = null ;

function Submit(){
    var dataEntered = retrieveData();
    var readData = readingDataFromLocalStrorage(dataEntered);
    if(row == null){
        insert(readData);
        msg.innerHTML = "Data Inserted!";
    }
    else{
        update();
        msg.innerHTML = "Data Updated!";
    }
}
//CREATE
function retrieveData(){
    var name1 = document.getElementById("name").value;
    var job = document.getElementById("job").value;
    var exp = document.getElementById("exp").value;

    var arr = [name1, job, exp];  
    return arr;
}

//READ
//Data in Local Storage
function readingDataFromLocalStrorage(dataEntered){
    //Storing data to local storage
    var n = localStorage.setItem("Name", dataEntered[0]);
    var j = localStorage.setItem("Job", dataEntered[1]);
    var e = localStorage.setItem("Experience", dataEntered[2]);

    //Getting data from local storage to table
    var n1 = localStorage.getItem("Name", n);
    var j1 = localStorage.getItem("Job", j);
    var e1 = localStorage.getItem("Experience", e);

    var arr = [n1,j1,e1];
    return arr;
}

//INSERT
function insert(readData){
    var row = table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = `<button onclick = edit(this)>Edit</button>
                                   <button onclick = remove(this)>Delete</button>`;//BackTick used    
}

//Edit
function edit(cellVal){
    row = cellVal.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("job").value = row.cells[1].innerHTML;
    document.getElementById("exp").value = row.cells[2].innerHTML;
}
//Upadate
function update(){
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("job").value;
    row.cells[2].innerHTML = document.getElementById("exp").value;
    row = null;
}

//Delete
function remove(cellVal){
    var ans = confirm("Are you sure you want to delete this record?");
    
    if(ans == true)
    {
        row = cellVal.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
    }
    //this will delete whole table
    //document.getElementById("table").remove();
}
