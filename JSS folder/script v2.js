function make_change() {
    // Extracting string from the input
    var my_string = document.getElementById("user_string").value;
    var replace_word = document.getElementById("replace_word").value;
    var new_word = document.getElementById("new_word").value;

    // Trim whitespace
    var cleaned_string = my_string.trim();

    // Extract a substring (first 5 characters)
    var substring = cleaned_string.substr(0, 5);

    // Replace user-specified word if exists
    var replaced_string = cleaned_string.replace(replace_word, new_word);

    // Concatenation using concat() and "+"
    var final_string = replaced_string.concat(" ", "hello hello", " done!");
    var final_output = final_string + " Have a great day!";

    // Putting the value of output in the paragraph
    document.getElementById("output_para").innerText = "Substring: " + substring + " | Final String: " + final_output;
}
