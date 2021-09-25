const asyncCallBack = (callback) => {
  setTimeout(() => {
    callback(false)
  }, 1000)
}

const asyncPromise = () => new Promise((resolve) => resolve(true))

describe("async", () => {
  it("async callback", (done) => {
    asyncCallBack((result) => {
      expect(result).not.toBe(true)
      done()
    })
  })

  it("async promise", () => {
    return asyncPromise().then((resolve)=> expect(resolve).toBe(true))
  })

  it("async promise async", async () => {
    const  result = await asyncPromise()
    expect(result).toBe(true)
  })
})