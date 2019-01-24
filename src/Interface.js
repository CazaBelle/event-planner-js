//Plan make event 
//Store event
//Sort event 
// display 

//Event Planner Interface
let button
let text
let date
let event 
let events
let eventBoard = new EventBoard()


//make event - can I make this into a function
  button = document.getElementById('eventButton')
  button.addEventListener('click', function() {
  text = document.getElementById('textVal').value
  date = document.getElementById('dateVal').value
  event = new Event(text, date);
  //store event in eventlist
  eventBoard.storeEvent(event);
  // eventNotice = `Event: ${event.getTitle()} at ${event.getDate()}`

  display();
})


function display(){
  let eventsDiv = document.getElementById('eventDiv')
  let events = eventBoard.eventsForDisplay();
  eventsDiv.innerHTML = ''
  eventsDiv.appendChild(events)
}




  