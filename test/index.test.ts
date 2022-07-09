import getPagination from "../src"

describe("blah", () => {
  it("works", () => {
    expect(getPagination({ total: 8, current: 7 })).toEqual([4, 5, 6, 7, 8])
  })
})
