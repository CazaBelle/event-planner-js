class Event {
  constructor(title, eventDate){
    this._title = title;
    this._eventDate = eventDate;
  }

getTitle(){
  return this._title
}

getDate(){
  return this._eventDate 
}

getDateObject(){
  return new Date(this._eventDate)
}

getAbbrTitle(){
  return this._title.substring(0,20)
}

elementForDisplay(){
  //why didn't this work with append child
  let div = document.createElement('div');
  div.innerText = `Event: ${this.getAbbrTitle()} at ${this._eventDate}`
  // let eventElement = document.createTextNode(`)
  // div.appendChild(eventElement)
  
  return div  
  }
};