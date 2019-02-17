class EventBoard {
  constructor(){
    this._events = this.inStorage()
    // this._future = []
     //why can't this be declared at the constructor
  }

inStorage(){
  if(!localStorage.getItem('events')){
    return []
  } else {
    return this.storageEventBackToObject(JSON.parse(localStorage.getItem('events')))
  }
}

  storeEvent(event){
    this._events.push(event)
    //STEP 1 LOCAL STOREAGE - setItems in events, need to store as a string
    localStorage.setItem('events', JSON.stringify(this._events))
    
  }

  //PART 2 JSON STORAGE turn the string back into EVENT OBJECTS
  storageEventBackToObject(jsonObject){
    let eventObjects = []
 //Need to convert JSON OBJECT to a 
      jsonObject.forEach(function(event){
        let eventObject = new Event(event._title, event._eventDate)
   
        console.log(eventObject)
        eventObjects.push(eventObject)
      })
    return eventObjects
   
  }

  sortedEvents(){
    let future = []
    let storageArr = this.storageEventBackToObject(JSON.parse(localStorage.getItem('events')))
   
    //by the date objects
    storageArr.forEach(function(event){
      let now = new Date();
      let eventDate = new Date(event._eventDate)
      
        if (eventDate > now) {
          future.push(event)
        }
        else{
          return false;
        }
    })
    
    return future;
    
  }

  sortedFutureEvents(){
    //return all future events, sorted by Dates
    let result = this.sortedEvents()
    //sort knows how to iterate over the array and reshuffle
    result.sort((e1, e2) => {
      let date1 = e1.getDateObject()
      let date2 = e2.getDateObject()
      
      return date1 - date2

    })

      return result 
  
  }

  eventsForDisplay(){
    let newDiv = document.createElement('div');
    this.sortedFutureEvents().forEach(function(event) {
     let eventHtml = event.elementForDisplay();
      newDiv.appendChild(eventHtml);
    })
   
   return newDiv
  }

}
