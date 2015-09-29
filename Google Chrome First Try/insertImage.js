//This runs when the document is clicked
document.addEventListener("click", function() {
  console.log(document.body.innerHTML);
},false);

//Permission that runs when the bowser action is clicked
document.addEventListener('keypress', function() {
    console.log("Key Pressed");
  },false);
