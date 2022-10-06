let h = document.getElementById("hour")
let m = document.getElementById("minute")
let s = document.getElementById("second")


function UpdateDate() {
    const currentDate = new Date();
    let _h = currentDate.getHours().toString().padStart(2, "0");
    let _m = currentDate.getMinutes().toString().padStart(2, "0");
    let _s = currentDate.getSeconds().toString().padStart(2, "0");

    h.innerHTML = _h;
    m.innerHTML = _m;
    s.innerHTML = _s;
}

setInterval(UpdateDate, 2);