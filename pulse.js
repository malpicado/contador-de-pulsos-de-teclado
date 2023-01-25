let pulse = 0;
const hitElement = document.querySelector("#pulsos");
document.body.onkeyup = function (x) {
    if((x.keyCode == 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) {
        addPulse();
    }
};

const addPulse = function () {
    pulse++;
    renderPulse();
};

const renderPulse = function () {
    hitElement.innerHTML = pulse;
};

document.getElementById("reset").addEventListener("click", function (){
pulse = 0;
renderPulse();
});