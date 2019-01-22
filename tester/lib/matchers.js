
class Matchers {
 
  constructor(value){
    this.val = value;
  }
  
  // asserting non strict equals
  toBe(assertation){
    if(assertation == this.val){
      this.print_success(assertation)
      return true;
    } else{
      this.print_fail(assertation);
      return false;
    }
  }

  to_throw(assertation){
    console.log('error!');
    
    (assertation != this.val.message) ? this.print_error(this.val, assertation) :this.print_success(assertation);
  }

  print_error(e, assertation){
    this.print_fail(assertation)
    console.log(`%c Test failed! on line  ${e.lineNumber} in the ${e.fileName} \n ${e.stack}`, 'color: #FF1C1A');
  }

  print_success(assertation){
    let msg =  ` passed: expected : ${assertation} got : ${ this.val }`;
    console.log(`%c ${msg}`,'color: #0EE80C');
    this.htmlDivs(msg);
  }

  //how to print an error with a stack trace at failure   
  print_fail(assertation){
    let msg = `failed: expected : ${assertation} got : ${ this.val }`
    console.log(`%c ${msg}`, 'color: #FF1C1A');
    this.htmlDivs(msg,);
   
  }

  htmlDivs(msg){
    var currentDiv = document.getElementById('tests');
    var newP = document.createElement('p')
    var text = document.createTextNode(msg)
    newP.appendChild(text)
    currentDiv.appendChild(newP)
  }

}
