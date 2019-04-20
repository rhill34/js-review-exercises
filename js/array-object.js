/***************************************************************************************
 *    Title: JS Review Exercise -> Chapter 4
 *    Author: Robert Hill, III
 *    Date: 04.20.2019
 *    Code version: 1.0
 *    Availability: http://rhill.greenriverdev.com/328/js-review-exercises/js/array-object.js
 *
 ***************************************************************************************/

function js4(input) {
    let strings = [];
    let numbers = [];
    let booleans = [];
    let neither = [];
    let results = {};
    input.forEach(element => {
        if (typeof element === 'boolean') {
            booleans[booleans.length] = element;
        } else if (typeof element === 'number') {
            numbers[numbers.length] = (element);
        } else if (typeof element === 'string') {
            strings[strings.length] = element;
        } else {
            neither[neither.length] = element;
        }
    });

    results.strings = strings;
    results.numbers = numbers;
    results.booleans = booleans;

    document.getElementById("letOut").
        innerHTML = JSON.stringify(results, null, 4);

}