/*
Just draw a border round the document.body.
*/
document.body.style.border = "5px solid red";
$("a").fadeOut(10000);
$( "p" ).on( "click", function() {
  alert( $( this ).text() );
  console.log("alerted");
});
$( document ).ready(function() {
	console.log("Document ready.");
	chrome.runtime.sendMessage(Date.now());
	console.log("Sent message.");
});
