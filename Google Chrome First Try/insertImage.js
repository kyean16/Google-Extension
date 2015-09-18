//This runs when the document is clicked
document.addEventListener("click", function() {
  console.log(tabId);
},false);

//Permission that runs when the bowser action is clicked
document.addEventListener('keypress', function() {
    console.log("Key Pressed");
  },false);

document.addEventListener("load" , function(){
    console.log("Something Loaded");
},false);


//Content Script
var greeting = "Testing Click, ";
var button = document.getElementById("mybutton");
var buttonTag = document.getElementsByTagName("button")
button.person_name = "ITAP";
button.addEventListener("click", function() {
  alert(document.body.innerHTML);
}, false);

var tabId = parseInt(window.location.search.substring(1));

window.addEventListener("load", function() {
  chrome.debugger.sendCommand({tabId:tabId}, "Network.enable");
  chrome.debugger.onEvent.addListener(onEvent);
});

window.addEventListener("unload", function() {
  chrome.debugger.detach({tabId:tabId});
});

function onEvent(debuggeeId, message, params) {
  if (tabId != debuggeeId.tabId)
    return;

  if (message == "Network.requestWillBeSent") {
    console.log("Logged");
  }
}