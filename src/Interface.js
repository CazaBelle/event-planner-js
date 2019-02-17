
window.onload = function() {
//Event Planner Interface

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
    let text = document.getElementById('textVal').value
    let date = document.getElementById('dateVal').value
    let event = new Event(text, date);
    //store event in eventlist
    eventBoard.storeEvent(event);
    display();
})

  function display(){
    let events = eventBoard.eventsForDisplay();
    eventsDiv.innerHTML = ''
    eventsDiv.appendChild(events)
  }

//show full event text when link clicked 
makeUrlChangeShowEventForCurrentPage();

function makeUrlChangeShowEventForCurrentPage() {
  window.addEventListener("hashchange", showEventForCurrentPage);
};

function showEventForCurrentPage() {
  showEvent(getEventFromUrl(window.location));
  console.log(window.location)
};

function getEventFromUrl(location) {
  console.log(location.hash.split("#")[1]);
  return location.hash.split("#")[1];
};

function showEvent(event) {
  document
    .getElementById("fullEventDiv")
    .innerHTML = event.replace(/%20/g, " ")
};

}




  