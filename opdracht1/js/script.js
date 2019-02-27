/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


//function dragover_handler(ev) {
//ev.preventDefault();
// Set the dropEffect to move
//ev.dataTransfer.dropEffect = "move";
//}


//function drop_handler(ev) {
//ev.preventDefault();
// Get the id of the target and add the moved element to the target's DOM
//var data = ev.dataTransfer.getData("text/plain");
// ev.target.appendChild(document.getElementById(data));
//}

//dragover_handler();
//drop_handler();


//function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    //ev.dataTransfer.setData("text/plain", ev.target.id);
  //  ev.dropEffect = "move";
//}

//function dragover_handler(ev) {
//    ev.preventDefault();
    // Set the dropEffect to move
//    ev.dataTransfer.dropEffect = "move";
//}

//function drop_handler(ev) {
//    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    //var data = ev.dataTransfer.getData("text/plain");
  //  ev.target.appendChild(document.getElementById(data));
//}

//dragstart_handler();
//dragover_handler();
//drop_handler();


function allowDrop(allowdropevent) {
    allowdropevent.preventDefault();
}

function drag(dragevent) {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
}

function drop(dropevent) {
    dropevent.preventDefault();
    var data = dropevent.dataTransfer.getData("text");
    dropevent.target.appendChild(document.getElementById(data));
}

allowDrop();
drag();
drop();
