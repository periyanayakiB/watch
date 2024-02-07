function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;

    var timeString = hours + ":" + minutes;
    document.getElementById('currentTime').innerHTML = timeString;
    document.getElementById('currentTimeCenter').innerHTML = timeString;
}
function updateDay() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var today = new Date().getDay();
    var dayString = days[today];
    document.getElementById('currentDay').innerHTML = dayString;
}

setInterval(updateClock, 1000);
setInterval(updateDay, 1000 * 60 * 60 * 24);

updateClock();
updateDay();




var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var time = false;
function start() {
    time = true;
    stopWatch();
    document.getElementById('start').style.display = "none";
    document.getElementById('pause').style.display = "block";
}
function stop() {
    time = false;
    document.getElementById('start').style.display = "block";
    document.getElementById('pause').style.display = "none";
}
function reset() {
    time = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";
    document.getElementById('start').style.display = "block";
    document.getElementById('pause').style.display = "none";
}
function stopWatch() {
    document.getElementById("main").style.visibility = "hidden";
    document.getElementById("stopwatch").style.visibility = "visible";

    if (time == true) {
        count = count + 1;
        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            min = 0;
            hr = hr + 1;
            sec = 0;
        }
        var hrstr = hr;
        var minstr = min;
        var secstr = sec;
        var countstr = count;

        if (hr < 10) {
            hrstr = "0" + hrstr;
        }

        if (min < 10) {
            minstr = "0" + minstr;
        }
        if (sec < 10) {
            secstr = "0" + secstr;
        }
        if (count < 10) {
            countstr = "0" + countstr;
        }
        document.getElementById("count").innerHTML = countstr;
        document.getElementById("sec").innerHTML = secstr;
        document.getElementById("min").innerHTML = minstr;
        document.getElementById("hr").innerHTML = hrstr;
        setTimeout("stopwatch()", 10);

    }
}
function showMessages() {
    document.getElementById("main").style.visibility = "hidden";
    document.getElementById("message").style.visibility = "visible";
}

function messageDisplay() {
    document.getElementById("message").style.visibility ="hidden";
    document.getElementById("displaymessage").style.visibility= "visible";
}

function playMusic() {
    document.getElementById("main").style.visibility ="hidden";
    document.getElementById("music").style.visibility= "visible";
}




function handleHomeClick() {
    document.getElementById("main").style.visibility = "visible";
    document.getElementById("stopwatch").style.visibility = "hidden";
    document.getElementById("message").style.visibility = "hidden";
    document.getElementById("displaymessage").style.visibility = "hidden";
    document.getElementById("music").style.visibility = "hidden";

}
function hideAllContent() {
    var contentElements = document.querySelectorAll('.content');
    contentElements.forEach(function (element) {
        element.classList.add('hidden');
    });
}
