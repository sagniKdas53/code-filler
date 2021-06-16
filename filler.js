var robot = require("robotjs");

var delayInMilliseconds = 5000; //5 second
setTimeout(function() {
    var mouse = robot.getMousePos();
    console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);

}, delayInMilliseconds);
robot.mouseClick();
const cpm = 70;
require('fs').readFileSync('input.txt', 'utf-8').split(/\r?\n/).forEach(function(line) {
    for (x in line) {
        if (line[x] === '}' || line[x] === ';') {
            if (line[x] === '}') {
                robot.keyTap(line[x], "shift");
            } else {
                robot.keyTap(line[x]);
            }
            robot.keyTap("enter")
        } else if (line[x] === '>' || line[x] === ':' || line[x] === '#' ||
            line[x] === '{' || line[x] === '%' || line[x] === '"' || line[x] === '?' || line[x] === '@') {
            robot.keyTap(line[x], "shift");
            if (line[x] == '>')
                robot.keyTap("enter")
        } else {
            robot.keyTap(line[x]);
        }
    };
})