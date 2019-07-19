let myImage = document.querySelector("img");
myImage.onclick = change;

function change() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cat.jpg") {
        myImage.setAttribute("src", "images/cat1.jpg");
    } else {
        myImage.setAttribute("src", "images/cat.jpg");
    }
}

function setHeading(name) {
    let myHeading = document.querySelector("h1");
    myHeading.textContent = name + " is AWESOME";
}

function setUserName() {
    let myName = prompt("please enter your name");
    localStorage.setItem("name", myName);
    setHeading(myName);
    change();
}

let storedName = localStorage.getItem("name");
if (!storedName) {
    setUserName();
} else {
    setHeading(storedName);
}
let myButton = document.querySelector("button");
myButton.onclick = setUserName;