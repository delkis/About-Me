alert("Welcome to my JavaScript page!");
// this is for an image
/* 
function makeImageBig(x) {
    x.style.height = "500px"
    x.style.width = "500px"
}

function makeImageOriginalSize(x) {
    x.style.height = "200px"
    x.style.width = "200px"
}
*/

function showHideSection(section) {
    var showHideSections = document.getElementsByClassName(section);
    for (var i = 0; i<showHideSections.length; i++) {
        if (showHideSections[i].style.display == "none") {
            showHideSections[i].style.display = "block";
            document.getElementsByClassName("bragsButton").innerHTML = "HIDE";
        } else {
            showHideSections[i].style.display = "none";
            document.getElementsByClassName("bragsButton").innerHTML = "SHOW";
        }

    }
}
