/***************************************************************************************
 *    Title: JS Review Exercise->Chapter 5->js file
 *    Author: Robert Hill
 *    Date: 05/02/2019
 *    Code version: 1.0
 *    Availability: https://github.com/rhill34/js-review-exercises/tree/master/js
 *
 ***************************************************************************************/
function loadJSON(callback) {

    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './five.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    let check = document.getElementById("check");

    loadJSON(function(response) {
        // Parse JSON string into object
        let actual_JSON = JSON.parse(response);

        check.innerHTML = findPerson(actual_JSON);
    });
}

function findPerson(foo) {
    let text = "";
    let people = foo;
    let my = document.getElementById("getName").value;
    for (let x in foo) {
        let name = people[x].name;

        if (my.toUpperCase() === name.toUpperCase()) {
            text += "<h2>" + people[x].name + "<h2/>";
            text += "<ul>";
            text += "<li>" + people[x].sex + "</li>";
            text += "<li>" + people[x].born + "</li>";
            text += "<li>" + people[x].died + "</li>";
            text += "<li>" + people[x].mother + "</li>";
            text += "<li>" + people[x].father + "</li>";
            text += "</ul>";
        }

    }
    if (text === "") {
        text = "No One Knows you!";
    }
    return text;
}