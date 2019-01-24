describe('event', () => {
  it('user can create a new event', () => {
    var event = new Event('title', '1983-09-15')
    expect(event._title).toBe('title')
    expect(event._eventDate).toBe('1983-09-15')
  })


})

// describe('error', ()=>{
//   it('throws an error if num isnt an integer', ()=>{
//     expect(try_catch(Square, 'a')).to_throw('argument is not a number');
//   })