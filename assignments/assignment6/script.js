document.addEventListener("DOMContentLoaded", function () {
    const transportInput = document.getElementById("transport-input");
    const imageElement = document.getElementById("image-changer");

    const transportImages = {
        "bike": "images/bike.png",
        "scooter": "images/scooter.png",
        "car": "images/car.png",
        "skateboard": "images/skateboard.png"
    };

    transportInput.addEventListener("input", function () {
        const userInput = transportInput.value.trim().toLowerCase();
        if (transportImages[userInput]) {
            imageElement.src = transportImages[userInput];
            imageElement.style.display = "block";
        } else {
            imageElement.src = "";
            imageElement.style.display = "none";
        }
    });

    window.changeHeartColor = function(color) {
        document.getElementById("heart").style.color = color;
    };

    window.showSection = function(section) {
        document.getElementById("traveling-section").style.display = (section === "traveling") ? "flex" : "none";
        document.getElementById("picture-chooser-section").style.display = (section === "picture-chooser") ? "flex" : "none";
    };

    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const arrow = document.getElementById("arrow");

    menuToggle.addEventListener("click", function () {
        if (menu.style.display === "block") {
            menu.style.display = "none";
            arrow.textContent = "▼";
        } else {
            menu.style.display = "block";
            arrow.textContent = "▲";
        }
    });
});
