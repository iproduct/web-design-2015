/* 
 * Bootstrap and jQuery demo
 */

//function init() {
//    document.getElementById("output").innerHTML = "Hello from JavaScript!";
//}

$(document).ready(function(){
    $(".output").html("Hello from JavaScript!");
    $("#hide_all").mouseenter(function(){
        $(".output").fadeToggle(2000);
    });
});