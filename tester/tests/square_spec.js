  function sum(a,b){
    return a + b;
  }


  describe('sum', ()=>{
    it('adds two numbers', ()=>{
      expect(sum(2,2)).toBe(4);
    })
  })

  // ====== end of dummy code


describe('error', ()=>{
  it('throws an error if num isnt an integer', ()=>{
    expect(try_catch(Square, 'a')).to_throw('argument is not a number');
  })

  it('throws an error if num is not positive', function(){
    expect(try_catch(Square, -2)).to_throw('size should be a positive number');
  })
})

describe('area', function(){
  it('calculate the area', ()=> {
    var square = new Square(5);
    expect(square.area()).toBe(25)
  })
})

describe('square', ()=>{
  it('sets a size property to size given', ()=>{
    let square = new Square(50);
    expect(square.size).toBe(5);
  })
})

