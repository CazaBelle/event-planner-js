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

elementForDisplay(){
  let div = document.createElement('div');
  div.innerText = `Event: ${this._title} at ${this._eventDate}`
  // let eventElement = document.createTextNode(`)
  // div.appendChild(eventElement)
  console.log(div)
  return div  
}
};