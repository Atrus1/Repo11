//
var monitorsListArray = ["Apple", "Peach", "Berry"];
//
function myMonitorsFunction(monitors){
    var monitorsList = [];
    for (var i = 0; i<3; i++) {
        monitorsList.push(monitors[i], i+1);
    }
    return {monitorsList};
}
console.log(myMonitorsFunction(monitorsListArray));
//
module.exports = myMonitorsFunction;