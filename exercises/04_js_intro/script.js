
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

