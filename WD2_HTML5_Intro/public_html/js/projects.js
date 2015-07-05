/* 
 * Sample robotic projects presentation
 * Author: Trayan Iliev, IPT - 2015
 * License: General Public License v2
 */

function init() {
    var projects = [
        {
            name: "LeJaRo - The Lego Java Robot",
            description: "Small robot built with Lego&reg; Mindstorms&reg;. \n\
The robot is proggrammed using Java based framework called LeJOS. It is capable \n\
of grasping small cilidrical objects and sensing touch and color.",
            picture: "resources/images/IMG_0330.jpg"
        },
        {
            name: "IPTPI - IPT Raspberry Pi Robot",
            description: "Robot with more proceesing power using Raspberry Pi&trade; 2 \n\
(4 cores @ 900MHz, 1GB RAM)\n\
The robot is proggrammed using Java based framework called Pi4J. It is capable \n\
of sensing obstacles using infrared sensores, has a compass, gyroscope, a 3D \n\
accelerometer, and has pricise controll over its movements using optical encoders \n\
on moving motors.",
            picture: "resources/images/IMG_0740.jpg"
        }
    ];

    var projectsElem = document.getElementById("projects");
    var html = "<table><tr><th>No.</th><th>Project Name</th>"
            + "<th>Description</th><th>Picture</th></tr>";
    for (var i = 0; i < projects.length; i++) {
        html += "<tr>";
        html += "<td>" + (i + 1) + "</td>";
        html += "<td>" + projects[i].name + "</td>";
        html += "<td>" + projects[i].description + "</td>";
        html += "<td><img src='" + projects[i].picture + "'></td>";
        html += "</tr>";
    }
    html += "</table>";
    projectsElem.innerHTML += html;
}
