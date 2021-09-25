describe('setup_teardown', () => {
  beforeAll(() => {
    console.log("beforeAll")
  })

  beforeEach(()=>{
    console.log("beforeEach")
  })

  afterAll(()=> {
    console.log("after all")
  })

  afterEach(()=>{
    console.log("afterEach")
  })

  it('example 1', () => {
    expect(true).toBe(true)
  })

  it('example 2', () => {
    expect(true).toBe(true)
  })
})