# Roman Numeral Converter

## Description
A Roman Numeral Converter is a web application that converts Arabic numerals (e.g., 1, 2, 3) into Roman numerals (e.g., I, II, III). Roman numerals are based on seven symbols and can be written using various combinations to represent numbers. This project replicates the functionality of [this example](https://roman-numeral-converter.freecodecamp.rocks).

## Features
- Input field for entering Arabic numerals.
- Button to trigger the conversion to Roman numerals.
- Displays the converted Roman numeral result.
- Alerts users if no value is entered in the input field.
- Handles edge cases such as invalid numbers, numbers below 1, or numbers greater than 3999.

## User Stories
1. The app has an input element with an `id` of `number`.
2. The app has a button element with an `id` of `convert-btn`.
3. The result of the conversion is displayed in a `div`, `span`, or `p` element with an `id` of `output`.
4. Clicking on the `#convert-btn` without entering a value in `#number` displays the message "Please enter a valid number" in `#output`.
5. If the `#number` input contains a value less than 1 (e.g., -1), clicking `#convert-btn` displays the message "Please enter a number greater than or equal to 1".
6. If the `#number` input contains a value of 4000 or greater, clicking `#convert-btn` displays the message "Please enter a number less than or equal to 3999".
7. For specific examples:
   - When `#number` contains `9`, clicking `#convert-btn` displays "IX".
   - When `#number` contains `16`, clicking `#convert-btn` displays "XVI".
   - When `#number` contains `649`, clicking `#convert-btn` displays "DCXLIX".
   - When `#number` contains `1023`, clicking `#convert-btn` displays "MXXIII".
   - When `#number` contains `3999`, clicking `#convert-btn` displays "MMMCMXCIX".

## Example Inputs and Results
| Input   | Result              |
|---------|---------------------|
| 9       | IX                  |
| 16      | XVI                 |
| 649     | DCXLIX              |
| 1023    | MXXIII              |
| 3999    | MMMCMXCIX           |
| -1      | Please enter a number greater than or equal to 1 |
| 4000    | Please enter a number less than or equal to 3999 |

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/OthmanTabeche/Roman-numeral-converter-FreeCodeCamp.git
   ```
2. Open `index.html` in your browser.
3. Enter a number in the input field and click the "Convert" button to see the Roman numeral result.

## Technologies Used
- HTML
- CSS
- JavaScript

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

## Author
Developed with ❤️ by Othman.
