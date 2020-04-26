var tempx;
var tempy;
var stringx;
var stringy;
var column;
//Actual
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("scholarshipData");
  switching = true;
  while (switching) {
      switching = false;
      rows = table.rows;
      console.log(rows.length);
      for (i = 0; i < (rows.length-1 ); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[column];
            y = rows[i + 1].getElementsByTagName("td")[column];
            if (column ==0 ){//Sorts Names
                if (x.innerText.toLowerCase() > y.innerText.toLowerCase()){
                shouldSwitch = true;
                break;
                }}
          if (column ==1){//Sorts Dates
              var msec = Date.parse(x.innerText.toLowerCase());
              
              stringx = Date.parse(x.innerText.toLowerCase());
              stringy = Date.parse(y.innerText.toLowerCase());
              
              console.log(stringx);
              tempx = new Date(stringx);
              tempy = new Date(stringy);
                if (tempx.getTime() > tempy.getTime()) {
                    console.log("Sorted");
                shouldSwitch = true;
                break;
          }
                }
            if (column==2){//Sorts Money
                if (parseInt(x.innerHTML.toLowerCase()) < parseInt(y.innerHTML.toLowerCase())) {
                shouldSwitch = true;
                break;
          }
                }
      }//Checks Every Row
      if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
      }//Actually performs the Switch
  }//Sorting Algorithm
  console.log(column);
}//Sorts
function getSortType(type){
	column = type;
    sortTable();
    console.log("sorting");
}