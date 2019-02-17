describe('event', () => {
  it('user can create a new event', () => {
    var event = new Event('title', '2019-09-15')
    expect(event._title).toBe('title')
    expect(event._eventDate).toBe('2019-09-15')
  })

  it('can return false if event has already happened', function(){
    var eventBoard = new EventBoard
    var event = new Event('Event in Past', '1983-09-15')
    expect(eventBoard.sortedEvents(event)).toBe(false)
  })

})
