// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// ============Change ELements Contents JS=============
function changeContents(){
    const contents = document.querySelector(".initial-content");
    contents.innerHTML = "The content has bee changed";
}


// ================Changing the attribute of an HTML element====================
function changeImage(){
    const imageChanger = document.querySelector("#thisImage");
    let imageUrl = imageChanger.src;
    const lastIndexOfSlash = imageUrl.lastIndexOf("/");
    const truncatedURL = imageUrl.substring(lastIndexOfSlash + 1);

    console.log("Current URL:", imageUrl);
    console.log("Truncated URL:", truncatedURL);
    if(truncatedURL == "journal.jpg"){
        imageChanger.src = "images/js.png";
    } else {
        imageChanger.src = "images/journal.jpg";
    }
 }

// ================Dumb Game JS=====================

let clickCounter = 0;
          

function createBlock(){

    const dumb = document.querySelector(".dumb");
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.appendChild(p);




        if(clickCounter < 4){
            clickCounter++;
        
            dumb.appendChild(div);
        
        } else {
            alert("Enough for now mate!");
            window.location.reload();
        };

        if (clickCounter == 1){
            div.style.background  = "red";
            p.innerHTML = "Uno";

        } else if (clickCounter == 2){
            div.style.background  = "blue";
            p.innerHTML = "Dos";

        } else if (clickCounter == 3){
            div.style.background  = "green";
            p.innerHTML = "Tres";


        } else {
            div.style.background  = "black";
            p.innerHTML = "Quatro";

        }
}