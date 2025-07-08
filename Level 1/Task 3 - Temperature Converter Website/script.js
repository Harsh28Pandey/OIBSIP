function convertTemp() {
    const tempInput = document.getElementById("tempInput").value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultDisplay = document.getElementById("resultDisplay");

    if (tempInput === "" || isNaN(tempInput)) {
        resultDisplay.textContent = "Please enter a valid number!";
        resultDisplay.style.color = "red";
        return;
    }

    let convertedTemp;

    if (unit === "celsius") {
        convertedTemp = (parseFloat(tempInput) * 9 / 5) + 32;
        resultDisplay.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} °F`;
    } else {
        convertedTemp = (parseFloat(tempInput) - 32) * 5 / 9;
        resultDisplay.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} °C`;
    }

    resultDisplay.style.color = "#222";
}
