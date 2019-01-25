
window.onload = function() {
//Event Planner Interface

let text
let date
let event 

let button = document.getElementById('eventButton')
let eventsDiv = document.getElementById('eventDiv')

let eventBoard = new EventBoard()

if (!localStorage.getItem('events')){
  eventsDiv.innerHTML = "No upcoming events"
} else {
  display()
}



//make event - can I make this into a function
  button.addEventListener('click', function() {
    text = document.getElementById('textVal').value
    date = document.getElementById('dateVal').value
    event = new Event(text, date);
    //store event in eventlist
    eventBoard.storeEvent(event);
    display();
})

  function display(){
    let events = eventBoard.eventsForDisplay();
    eventsDiv.innerHTML = ''
    eventsDiv.appendChild(events)
  }

}



  