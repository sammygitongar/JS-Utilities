// ===========Preventing Default Javascript Submit Behaviour of a Button========

document.querySelector("#logButton").addEventListener('submit', function(event){
    event.preventDefault();
  });

  function logFunction(){
      console.log("log clicked");
    }



// ============Changing the contents of an HTML element =================

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