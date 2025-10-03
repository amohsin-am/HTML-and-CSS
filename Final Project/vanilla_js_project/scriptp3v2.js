
document.addEventListener("DOMContentLoaded", function () {
    // Color Checker
    document.getElementById("applyColor").addEventListener("click", function () {
        const color = document.getElementById("colorInput").value;
        document.body.style.backgroundColor = color;
    });

    // Light Bulb Simulator
    const bulb = document.getElementById("bulb");
    document.getElementById("turnOn").addEventListener("click", function () {
        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    });
    document.getElementById("turnOff").addEventListener("click", function () {
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    });

    // Joke Generator
    document.getElementById("loadJoke").addEventListener("click", function () {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(response => response.json())
            .then(data => {
                document.getElementById("jokeSetup").textContent = data.setup;
                document.getElementById("jokePunchline").textContent = data.punchline;
            })
            .catch(error => {
                console.error("Error fetching joke:", error);
                document.getElementById("jokeSetup").textContent = "Failed to load joke.";
                document.getElementById("jokePunchline").textContent = "";
            });
    });
});
