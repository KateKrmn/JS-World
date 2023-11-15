window.addEventListener("DOMContentLoaded", main);

function main() {
    showChoice(activeChoiceIndex);
}
function showChoice(choiceIndex) {
    const title = document.getElementById("title");
    const button1 = document.getElementById("btn1");
    const button2 = document.getElementById("btn2");
    const button3 = document.getElementById("btn3");
    const instruction = document.getElementById("instruction");
    const background = document.getElementById("background");
const choice = choices[activeChoiceIndex];

    title.textContent = choice.title;
    button1.textContent = choice.button1.title;
    button2.textContent = choice.button2.title;
    button3.textContent = choice.button3.title;
    instruction.textContent = choice.instruction;
    background.setAttribute("src", choice.background);

    button1.onclick = function () {
        goToNextChoice(choice.button1.nextChoice);
    }
    button2.onclick = function () {
        goToNextChoice(choice.button2.nextChoice);
    }
    button3.onclick = function () {
        goToNextChoice(choice.button3.nextChoice);
    }
    if (choice.title === choices[0].title) {
        button2.classList.add("removed");
        button3.classList.add("removed");
    }
    else {
        button2.classList.remove("removed");
        button3.classList.remove("removed");
    }
}
function goToNextChoice(choiceIndex) {
    activeChoiceIndex = choiceIndex;
    showChoice();
}