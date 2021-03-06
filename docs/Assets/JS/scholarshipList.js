var scholarshipData ="";
window.onload = function() {
    //getScholarships();
};//Refreshes scholarship data onload






//Retrieves Scholarships from database using Test JSON file
/*
function getScholarships(){
    fetch('Assets/JSON/scholarships.JSON')
    .then(function(response) {
        return response.json();
    }).then(function (obj) {
        console.log(obj);
        scholarshipData = "";
        getScholarshipTableData(obj);
    }).catch(function (error) {
        console.log("Json file was not retrieved");
        console.error("Error:Missing JSON");
    });
}

*/


//Converts Scholarship data to table data
function getScholarshipTableData(data){
    scholarshipData ="";
    console.log(data.length);
    for ( var i =0; i<data.length; i++){
        var name = data[i].name;
        var url = data[i].url;
        var dueDate = data[i].dueDate;
        var reward = data[i].reward;
            
        var stringy = Date.parse(dueDate);
              
              var tempx = new Date(stringy);
              var tempy = new Date();
                if (tempx.getTime() > tempy.getTime()) {
        scholarshipData += "<tr><td><a target=\"blank\" href=\"" + url + "\">" + name + "</a></td><td> " + dueDate + "</td><td>" + reward + "</td></tr>";
                }
    }
    console.log(scholarshipData);
    scholarshipTableToHTML();
}




//Places data onto a table within HTML
function scholarshipTableToHTML(){
    document.getElementById("scholarshipData").innerHTML=scholarshipData;
    getSortType(1);
}
