import { getPaginationRange } from "../src"

describe("blah", () => {
  it("works", () => {
    expect(getPaginationRange({ total: 8, current: 7 })).toEqual([
      4, 5, 6, 7, 8,
    ])
  })
})
