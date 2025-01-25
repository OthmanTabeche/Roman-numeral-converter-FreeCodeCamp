const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    const value = Number(input.value);

    if (!value) {
        output.textContent = "Please enter a valid number";
        return;
    } else if (value < 0) {
        output.textContent = "Please enter a number greater than or equal to 1";
        return;
    } else if (value >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        return;
    } else {
        convertToRoman(value);
    }
});

function convertToRoman(num) {
    const idx = [
        {value: 1000, Symbol: "M"},
        {value: 900, Symbol: "CM"},
        {value: 500, Symbol: "D"},
        {value: 400, Symbol: "CD"},
        {value: 100, Symbol: "C"},
        {value: 90, Symbol: "XC"},
        {value: 50, Symbol: "L"},
        {value: 40, Symbol: "XL"},
        {value: 10, Symbol: "X"},
        {value: 9, Symbol: "IX"},
        {value: 5, Symbol: "V"},
        {value: 4, Symbol: "IV"},
        {value: 1, Symbol: "I"}
    ];

    let result = "";

    for (const number of idx) {

        while (num >= number.value) {
            result += number.Symbol;
            num -= number.value;
        }
    }

    output.textContent = result;
};