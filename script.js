let button = document.querySelector("button");
let input = document.querySelectorAll("input");
let clear = document.querySelector("#clr");
button.addEventListener("click", () => {
    for (let i = 0; i < input.length; i++) {
        if (input[i].value === "") {
            event.preventDefault();
            alert("Fill input box");
            break;
        }
    }
})
clear.addEventListener("click", () => {
    for (let i = 0; i < input.length; i++) {
        input[i].value = "";
    }
})