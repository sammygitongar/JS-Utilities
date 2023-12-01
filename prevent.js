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