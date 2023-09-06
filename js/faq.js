function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours().toString().padStart(2, '0');
    var min = dateTime.getMinutes().toString().padStart(2, '0');
    var sec = dateTime.getSeconds().toString().padStart(2, '0');
    var session = document.getElementById('session');

    if (hrs >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    if (hrs > 12) {
        hrs = (hrs - 12).toString().padStart(2, '0');
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);