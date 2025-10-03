function make_change(operation) {
    var num_1 = document.getElementById("one_num").value;
    var num_2 = document.getElementById("two_num").value;

    // Convert input values to numbers
    var number1 = parseFloat(num_1);
    var number2 = parseFloat(num_2);
    var result;

    // Check if both numbers are valid
    if (isNaN(number1) || isNaN(number2)) {
        result = "Please enter valid numbers!";
    } else if (operation == "+") {
        result = number1 + number2;
        console.log("Performing Addition:", result);
    } else if (operation == "-") {
        result = number1 - number2;
        console.log("Performing Subtraction:", result);
    } else if (operation == "*") {
        result = number1 * number2;
        console.log("Performing Multiplication:", result);
    } else if (operation == "/") {
        if (number2 !== 0) {
            result = number1 / number2;
            console.log("Performing Division:", result);
        } else {
            result = "Cannot divide by zero!";
            console.log("Error: Division by zero");
        }
    } else {
        result = "Invalid operation";
        console.log("Invalid operation selected");
    }

    // Display the result
    document.getElementById("result").innerText = "Result: " + result;
}
