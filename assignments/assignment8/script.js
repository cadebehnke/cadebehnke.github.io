document.addEventListener("DOMContentLoaded", function () {

    const images = {
        "Happy Birthday": "images/birthday.jpg",
        "Crazy Clown": "images/clown.jpg",
        "It's Raining": "images/rain.jpg",
        "Quiet Time": "images/read.jpg",
        "Working Hard": "images/shovel.jpg",
        "Work from Home": "images/work.jpg"
    };

    const container = document.getElementById("titles-container");

    if (!container) {
        console.error("titles-container not found!");
        return;
    }

    for (const title in images) {
        let titleElement = document.createElement("a");
        titleElement.textContent = title;
        titleElement.classList.add("title");
        titleElement.href = "#";
        
        titleElement.addEventListener("click", function (event) {
            event.preventDefault(); 
            openPopup(title);
        });

        container.appendChild(titleElement);
    }

    function openPopup(title) {
        console.log(`Opening popup for: ${title}`); 
        const popupImage = document.getElementById("popup-image");
        const popupTitle = document.getElementById("popup-title");
        const popup = document.getElementById("popup");

        if (!popup || !popupImage || !popupTitle) {
            console.error("Popup elements not found!");
            return;
        }

        popupTitle.textContent = title;
        popupImage.src = images[title];
        popupImage.alt = title;

        popup.classList.remove("hidden");
        popup.style.display = "block"; 
    }

    document.getElementById("close").addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
        document.getElementById("popup").style.display = "none"; 
    });
});
