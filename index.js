const countName = function(){
    const userName = document.getElementById("name");
    const characters = document.getElementById("displayName");
    const charactersCounter = document.querySelector(".charactersCounter");


    
    charactersCounter.style.display = "none"
    characters.style.display = "flex";
    const userNameCount = (userName.value).length;
    characters.innerHTML = `Your name has ${userNameCount} characters`;

}