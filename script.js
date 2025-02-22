const lampView = document.getElementById("lampView");
const lightLampBtn = document.getElementById("lightLampBtn");
const backLampBtn = document.getElementById("backLampBtn");


document.addEventListener("DOMContentLoaded", function () {
    
    
    let isLampOn = false;

    lightLampBtn.addEventListener("click", function () {
        if (!isLampOn) {
            lampView.src = "assets/1_light.gif"; // Change to the lit lamp image
            isLampOn = true;
        }
    });

    backLampBtn.addEventListener("click", function () {
        if (isLampOn) {
            lampView.src = "assets/0_light.gif"; // Change to the unlit lamp image
            isLampOn = false;
        }
    });
});
