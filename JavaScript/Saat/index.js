
function Question(){
    const isim = prompt("Adınız nedir?");
    document.getElementById("userName").innerHTML = isim;
}

function Clock(){
    var date = new Date();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    clock = hour + ":" + minute + ":" + second;
    document.getElementById("clock").innerText = clock;
    setTimeout(Clock, 1000);
}

Question();
Clock();