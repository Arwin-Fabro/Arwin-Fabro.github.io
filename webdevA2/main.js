
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});



//target all elements to save to constants
const page1btn = document.querySelector("#About-Btn");
const page2btn = document.querySelector("#OceanZone-Page");
const page3btn = document.querySelector("#MarineAnimals-Page");
const page4btn = document.querySelector("#CoralReef-Page");
const page5btn = document.querySelector("#Game-Page");
var allpages = document.querySelectorAll(".page");


//select all subtopic pages
function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}
function show(pgno) { //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    onepage.style.display = "block"; //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});
page4btn.addEventListener("click", function () {
    show(4);
});
page5btn.addEventListener("click", function () {
    show(5);
});
hideall();

// QUIZ JS
const btnSubmit = document.querySelector("#btnSubmit");
const scorebox = document.querySelector("#scorebox");

btnSubmit.addEventListener("click", checkAnswers);

function checkAnswers() {
    const questions = document.querySelectorAll("fieldset");
    let score = 0;

    for (const question of questions) {
        const correctAnswer = question.dataset.answer;
        const selected = question.querySelector("input:checked");

        if (!selected) {
            scorebox.innerHTML = "Please answer all questions!";
            return;
        }

        if (selected.value === correctAnswer) {
            score++;
        }
    }

    scorebox.innerHTML = `Score: ${score} / ${questions.length}`;
}

//Audio Sounds for Marine Animals
const dolphinButton = document.querySelector("#Dolphin-sound");
const whaleButton = document.querySelector("#Whale-sound");
const dolphinSound = new Audio("./audio/dolphin-whistle.mp3");
const whaleSound = new Audio("./audio/whale-sound.mp3");

dolphinButton.addEventListener("click", playDolphinSound);
whaleButton.addEventListener("click", playWhaleSound);

function playDolphinSound() {
    dolphinSound.play();
}

function playWhaleSound() {
    whaleSound.play();
}

//Aquraium Game
const submitBtn = document.querySelector("#submit");
const aquarium = document.querySelector(".aquarium");

submitBtn.addEventListener("click", () => {
    const name = document.querySelector("#pet-name").value;
    const species = document.querySelector("#pet-species").value;

    if (!species || !name) return;

    // Create the container that holds both sprite and name
    const petDiv = document.createElement("div");
    petDiv.classList.add("pet");

    // Set the background sprite
    const spritePositions = {
        "Dory": "0px 0px",
        "Nemo": "-64px 0px",
        "Crab": "-128px 0px",
        "Puffer": "-192px 0px",
        "Salmon": "-256px 0px"
    };
    petDiv.style.backgroundPosition = spritePositions[species] || "0px 0px";

    // Random position inside the aquarium
    petDiv.style.position = "absolute";
    petDiv.style.top = Math.random() * 500 + "px";
    petDiv.style.left = Math.random() * 800 + "px";

    // Tooltip
    petDiv.title = `${name} the ${species}`;

    // Add the name tag
    const nameLabel = document.createElement("p");
    nameLabel.classList.add("pet-name");
    nameLabel.textContent = name;

    petDiv.appendChild(nameLabel);
    aquarium.appendChild(petDiv);
});