var t = document.getElementById("time");
var dd = document.getElementById("day");
var dt = document.getElementById("date");

function showclock() {
    let d = new Date();

    let hrs = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let day = d.getDay();
    let month = d.getMonth();
    let date = d.getDate();
    let year = d.getFullYear();
    let de = "";
    if (hrs >= 12) {
        de = "PM";
        hrs = hrs - 12;

    } else {
        de = "AM";
        hrs = hrs;
    }
    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    //for time show
    t.innerHTML = hrs + ":" + min + ":" + sec + " " + de;
    //for day show
    dd.innerHTML = day;
    // for date show
    dt.innerHTML = `${month} ${date} ${year}`;
}
setInterval(showclock, 1000);