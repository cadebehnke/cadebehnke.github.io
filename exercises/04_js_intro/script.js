
//do stuff when button clicked (direct link when it only does one thing)
document.getElementById("btn-click-me").onclick = () => {
    console.log("WOW!")
    document.getElementById("result").innerHTML="Hi Cade";
}; 

/* When button is clicked
    - make "hello world" appear in console
    - make paragraph text say goodbye and turn to purple
*/
document.getElementById("btn-color").onclick = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Goodbye";
    messageP.classList.toggle("sad");
};

document.getElementById("btn-happy").onclick = () => {
    const moodP = document.getElementById("mood-result");
    moodP.classList.remove("hidden");
    moodP.classList.remove("sad");
    moodP.classList.add("happy");
    moodP.innerHTML = "Good Times";
};

document.getElementById("btn-sad").onclick = () => {
    const moodP = document.getElementById("mood-result");
    moodP.classList.remove("hidden");
    moodP.classList.remove("happy");
    moodP.classList.add("sad");
    moodP.innerHTML = "Bad Times";
};

document.getElementById("btn-clear").onclick = () => {
    const moodP = document.getElementById("mood-result");
    moodP.classList.add("hidden");
};

//keydown
document.getElementById("txt-emotion").onkeyup = (event) => {
    // const emotion = document.getElementById("txt-emotion").value;
    document.getElementById("emotional-message").innerHTML = 
    "You are feeling " + event.currentTarget.value;
    //const emotion = event.currentTarget.value;
    //console.log(emotion);
};

