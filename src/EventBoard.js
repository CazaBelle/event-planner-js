class EventBoard {
  constructor(){
    this._events = [];
    // this._future = []
     //why can't this be declared at the constructor
  }

  storeEvent(event){
    this._events.push(event)
  }

  sortedEvents(){
    let future = []
    
    // let now
    // let eventdDate
    //by the date objects
    this._events.forEach(function(event){
      let now = new Date();
      let eventDate = new Date(event.getDate())
  
        if (eventDate > now) {
          future.push(event)
        }
    })
    
    
    return future;
    
  }

  sortedFutureEvents(){
    //retunr all future events, sorted by Dates
    let result = this.sortedEvents()
    result.sort((e1, e2) => {
      let date1 = e1.getDateObject()
      let date2 = e2.getDateObject()
      
      return date1 - date2

    })

      return result 
  
  }

  //Cleared the array?
  eventsForDisplay(){
    let newDiv = document.createElement('div');
    // let event = this._events
    this.sortedFutureEvents().forEach(function(event) {
     let eventHtml = event.elementForDisplay();
      newDiv.appendChild(eventHtml);
    })
   
   return newDiv
  }

}
