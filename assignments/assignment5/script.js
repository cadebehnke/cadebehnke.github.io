
const helloColumn = document.getElementById("hello-column");
const helloBox = document.getElementById("hello-box");

let helloCount = 0;

helloColumn.onclick = () => {
    helloCount++;
    helloBox.innerHTML += "hello<br>";
};

const colorPicker = document.getElementById("color-picker");
const star = document.getElementById("star");

colorPicker.oninput = () => {
    star.style.color = colorPicker.value;
};

const image = document.getElementById("toggle-image");
let toggle = true;

image.onclick = () => {
    toggle = !toggle;
    image.src = toggle
        ? "https://picsum.photos/200/200"
        : "https://picsum.photos/200/200?random=1";
};