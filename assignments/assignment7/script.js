document.getElementById("draw-stairs").onclick = function() {
    const container = document.getElementById("stairs");
    container.innerHTML = ""; 

    let leftRail = document.createElement("div");
    leftRail.classList.add("stair-rail", "left");
    container.appendChild(leftRail);

    let rightRail = document.createElement("div");
    rightRail.classList.add("stair-rail", "right");
    container.appendChild(rightRail);

    for (let i = 0; i < 10; i++) {
        let stairStep = document.createElement("div");
        stairStep.classList.add("stair-step");
        stairStep.style.bottom = `${i * 25}px`; 
        container.appendChild(stairStep);
    }

    let stickFigure = document.createElement("img");
    stickFigure.src = "images/left.png"; 
    stickFigure.id = "stick-figure";
    stickFigure.style.bottom = "0px";
    stickFigure.style.left = "25px";
    container.appendChild(stickFigure);

    document.getElementById("climb-stairs").style.display = "inline-block";
};

document.getElementById("climb-stairs").onclick = function() {
    let stickFigure = document.getElementById("stick-figure");
    let step = 0;
    let isLeft = true;

    let climbInterval = setInterval(() => {
        if (step >= 10) {
            clearInterval(climbInterval); 
            return;
        }

        stickFigure.style.bottom = `${step * 25}px`;
        stickFigure.style.left = isLeft ? "20px" : "40px";

        stickFigure.src = isLeft ? "images/right.png" : "images/left.png";
        isLeft = !isLeft;

        step++;
    }, 500);
};
