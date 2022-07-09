import { getPaginationRange } from "../src"

it("Tests", () => {
  expect(getPaginationRange({ total: 3, current: 1 })).toEqual([1, 2, 3])
  expect(getPaginationRange({ total: 8, current: 7 })).toEqual([4, 5, 6, 7, 8])
  expect(getPaginationRange({ total: 5, current: 3 })).toEqual([1, 2, 3, 4, 5])
})
