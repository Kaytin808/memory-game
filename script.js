var yellowCell = document.getElementById("1")
var redCell = document.getElementById('2')
var blueCell = document.getElementById('3')
var colorArr = [];
var computerArr = [];


function yellowClick() {
        yellowCell.style.background = '#ff0';
        setTimeout(function() {
            yellowCell.style.background = '#ffff0061'
        },300)
    colorArr.push(yellowCell.dataset.color)
    console.log(`Player chose ${colorArr}`)
    if (computerArr.length === colorArr.length) {
        checkIfWin()
    }
}
function redClick() {
    redCell.style.background = 'rgb(255, 0, 0)';
    setTimeout(function() {
        redCell.style.background = 'rgba(255, 0, 0, 0.37)'
    },300)
    colorArr.push(redCell.dataset.color)
    console.log(`Player chose ${colorArr}`)
    if (computerArr.length === colorArr.length) {
        checkIfWin()
    }
}
function blueClick() {
    blueCell.style.background = 'rgb(0, 238, 255)';
    setTimeout(function() {
        blueCell.style.background = 'rgba(0, 238, 255, 0.4)'
    },300)
    colorArr.push(blueCell.dataset.color)
    console.log(`Player chose ${colorArr}`)
    if (computerArr.length === colorArr.length) {
        checkIfWin()
    }
}


// Computer randomly choose colors //
function computerRandom() {
    var colors = [yellowCell.dataset.color,redCell.dataset.color,blueCell.dataset.color]
    var mix = colors[Math.floor(Math.random()*colors.length)];
    computerArr.push(mix)
    console.log(`Computer chose ${computerArr}`)
    }
computerRandom();

// Check if arrays are the same //
function checkIfWin() {
    if (Array.isArray(colorArr) &&
        Array.isArray(computerArr) &&
        colorArr.length === computerArr.length &&
        colorArr.every((val, index) => val === computerArr[index])) {
            alert('Its the same')
            computerRandom();
            colorArr = [];
        } else {
            alert('its not the same,try again')
            computerArr = [];
            colorArr= [];
            computerRandom();
        }
    }