//set-up

const describe = (desc, fn) => {
  console.log(desc);
  fn();
}

const it = (desc, fn) => {
  console.log(desc);
  fn();
}

//helpers 
function try_catch(method, val){
  try {
    new method(val)
  }
  catch(e){
    val = e;
    console.log(val.lineNumber);
  }
  finally{
    return val;
  }
}

//matchers 
const expect = (value) => { return new Matchers(value) }


