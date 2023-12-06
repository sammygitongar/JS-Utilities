const countName = function(){
    const userName = document.getElementById("name");
    const characters = document.getElementById("displayName");
    const charactersCounter = document.querySelector(".charactersCounter");


    
    charactersCounter.style.display = "none"
    characters.style.display = "flex";
    const userNameCount = (userName.value).length;
    characters.innerHTML = `Your name has ${userNameCount} characters`;

}


// Example 1: Asynchronous Function with Callback
function fetchData(callback) {
    // Simulate an asynchronous operation (e.g., fetching data from a server)
    setTimeout(function() {
        const data = "This is the fetched data";
        callback(data); // Call the callback function with the result
    }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
}

// Callback function
function processData(data) {
    console.log("Processing data:", data);
}

// Call the asynchronous function with the callback
fetchData(processData);
console.log("This line is executed before the asynchronous operation completes.");
