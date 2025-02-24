

const lampView = document.getElementById("lamp_view");
const startDivPanel = document.getElementById("start_div_panel");
const guestPicView = document.getElementById("guest_pic_view");
const guestTitleText = document.getElementById("guest_title_text");
const guestNameText = document.getElementById("guest_name_text");

const startEventBtn = document.getElementById("start_event_btn");
const headerSoundBtn = document.getElementById("header_sound_btn");
const startSoundBtn = document.getElementById("start_sound_btn");
const lightLampBtn = document.getElementById("light_lamp_btn");
const backLampBtn = document.getElementById("back_lamp_btn");
const skipGuestBtn = document.getElementById("skip_guest_btn");


document.addEventListener("DOMContentLoaded", function () {
    startEventBtn.addEventListener("click", function () {
        startDivPanel.style.display = "none";
    });

    headerSoundBtn.addEventListener("click", function () {
        lampView.src = "assets/5_light.gif";
    });

    startSoundBtn.addEventListener("click", function () {
        lampView.src = "assets/5_light.gif";
    });

    lightLampBtn.addEventListener("click", async function () { // ✅ Mark function as async
        // try {
        //     const jsonHandler = new JsonHandler(); // Create an instance
        //     const lightCount = await jsonHandler.getCountOfCurrentLights(); // ✅ Use await inside async function

        //     guestNameText.textContent = "Count is " + lightCount; // ✅ Update text
        // } catch (error) {
        //     console.error("Error fetching light count:", error);
        //     guestNameText.textContent = "Failed to load count"; // ✅ Handle errors gracefully
        // }
    });

    backLampBtn.addEventListener("click", function () {
        lampView.src = "assets/1_light.gif"; // Change to the lit lamp image
    });

    skipGuestBtn.addEventListener("click", function () {
        guestPicView.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_qGuaVPd0FISslOUGCc4DO2JekW3EJ4Fdw&s";
        guestTitleText.textContent = "Prof,";
        guestNameText.textContent = "Silva";
    });
});
