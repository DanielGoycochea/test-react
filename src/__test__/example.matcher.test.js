describe("matchers", () =>{
  it("toBe", ()=>{
    expect(2 + 2).toBe(4);
  })

  it("toEqual object", ()=>{
    const data = {one:1}
    data["two"] = 2
    expect(data).toEqual({one:1, two:2})
  })

  it("toEqual Array", ()=>{
    const arrayNumbers = [1, 2,0, 9]
    expect(arrayNumbers).toEqual([1, 2,0, 9])
  })

  test('numbers', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });

  test('string not match', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('strinf match', () => {
    expect('Christoph').toMatch(/stop/);
  });


})