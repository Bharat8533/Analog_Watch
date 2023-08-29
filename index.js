let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

let hourBox = document.querySelector(".hourBox")
let minBox = document.querySelector(".minBox")
let secBox = document.querySelector(".secBox")

function watch(){
    let date = new Date();

    // getting hour , min , sec from the date function

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hourBox.innerHTML = `${hh}:`;
    minBox.innerHTML = `${mm}:`;
    secBox.innerHTML = `${ss}`;

    // Rotate the hour , min , and sec line

    let hRotate = 30*hh + mm/2;
    let mRotate = 6*mm;
    let sRotate = 6*ss;

    hour.style.transform = `rotate(${hRotate}deg)`;
    min.style.transform = `rotate(${mRotate}deg)`;
    sec.style.transform = `rotate(${sRotate}deg)`;
}

setInterval(watch,1000);