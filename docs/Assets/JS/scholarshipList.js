var scholarshipData;

window.onload = function() {
    getScholarships();
};//Refreshes scholarship data onload


//Retrieves Scholarships from database
function getScholarships(){
    fetch('../docs/Assets/JSON/scholarships.JSON')
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




//Converts Scholarship data to table data
function getScholarshipTableData(data){
    for ( int i =0; i<data.scholarships.length, i++){
        
    }
}




//Places data onto a table within HTML
function scholarshipTableToHTML(){
    document.getElementById("scholarshipData").innerHTML=scholarshipData;
}