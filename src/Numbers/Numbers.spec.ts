import { sum, diff, prod } from "./Numbers";

describe("Numbers", () => {
  test("sum() should add two numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });

  test("diff() should subtract two numbers", () => {
    expect(diff(5, 3)).toEqual(2)
  })

  test("prod() should multiply two numbers", () => {
    expect(prod(5, 3)).toEqual(15)
  })
});
