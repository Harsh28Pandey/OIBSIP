const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let input = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "C") {
            input = "";
        } else if (value === "DEL") {
            input = input.slice(0, -1);
        } else if (value === "=") {
            try {
                input = eval(input).toString();
            } catch {
                input = "Error";
            }
        } else {
            if (input === "Error") input = "";
            input += value;
        }

        display.value = input;
    });
});
