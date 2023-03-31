var firstRangeValue = document.getElementById("Firstrangeval");
var lastRangeValue = document.getElementById("Lastrangeval");

var first;
var last = [0, 0, 0];
function FirstRangeChange() {
    first = firstRangeValue.innerText.toString();
    if (first.length > 6) {
        firstRangeValue.innerText = first.substring(0, first.length - 6) + ',' + first.substring(first.length - 6, first.length - 3) + ',' + first.substring(first.length - 3, first.length);
    }
    else if (first.length > 3) {
        firstRangeValue.innerText = first.substring(0, first.length - 3) + ',' + first.substring(first.length - 3, first.length)
    }
    else {
        firstRangeValue.innerText = first.substring(0, first.length)
    }
}

function LastRangeChange() {

    last = lastRangeValue.innerText.toString();
    if (last.length > 6) {
        lastRangeValue.innerText = last.substring(0, last.length - 6) + ',' + last.substring(last.length - 6, last.length - 3) + ',' + last.substring(last.length - 3, last.length);
    }
    else if (last.length > 3) {
        lastRangeValue.innerText = last.substring(0, last.length - 3) + ',' + last.substring(last.length - 3, last.length)
    }
    else {
        lastRangeValue.innerText = last.substring(0, last.length)
    }
}