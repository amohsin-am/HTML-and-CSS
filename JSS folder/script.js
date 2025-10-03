function processString() {
    // Get user input values
    let userInput = document.getElementById("userInput").value;
    let replaceWord = document.getElementById("replaceWord").value;
    let newWord = document.getElementById("newWord").value;

    // Ensure input is not empty
    if (userInput.trim() === "") {
        document.getElementById("output").textContent = "Please enter a valid string!";
        return;
    }

    // Extract a substring (first 5 characters)
    let subStr = userInput.substr(0, 5);

    // Replace user-specified word
    let replacedStr = userInput.replace(replaceWord, newWord);

    // Concatenation using both methods
    let concatStr = replacedStr.concat(" - This is modified!");
    let plusConcatStr = concatStr + " Have a nice day!";

    // Display the final result
    document.getElementById("output").textContent = "Substring: " + subStr + " | Final String: " + plusConcatStr;
}
