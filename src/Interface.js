var button
var text
var date
var event 
//make event
  var button = document.getElementById('eventButton')
  console.log(button)
  button.addEventListener('click', function() {
    
    var text = document.getElementById('textVal').value
    console.log(text)
    var date = document.getElementById('dateVal').value
    console.log(date)
    var event = new Event(text, date);
    console.log(event) 
   
  });


//store in Planner

 






// function init() {
//   var button = document.getElementById('button')
//   button.addEventListener('click', function() {
//       console.log("the button has been clicked");

//       // create a node called text
//       var text = document.createElement('p');
//       text.innerText = "this is my text"

//       // grab the first div from the document
//       var div = document.getElementById('one');

//       // add text to that div
//       div.appendChild(text);
//   })
//
