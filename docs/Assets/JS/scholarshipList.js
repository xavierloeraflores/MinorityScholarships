var scholarshipData;
window.onload = function() {
    getScholarships();
};//Refreshes scholarship data onload


//Retrieves Scholarships from database
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




//Converts Scholarship data to table data
function getScholarshipTableData(data){
    for ( var i =0; i<data.scholarships.length; i++){
        var name = data.scholarships[i].name;
        var url = data.scholarships[i].url;
        var dueDate = data.scholarships[i].dueDate;
        var reward = data.scholarships[i].reward;
        
        scholarshipData += "<tr><td><a href=\"" + url + "\">" + name + "</a></td><td> " + dueDate + "</td><td>" + reward + "</td></tr>";
        console.log(scholarshipData);
    }
    scholarshipTableToHTML();
}




//Places data onto a table within HTML
function scholarshipTableToHTML(){
    document.getElementById("scholarshipData").innerHTML=scholarshipData;
}
