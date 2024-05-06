import { Movie, inventory, addMovie, checkMovie, Customer, rentalCost, checkOutMovie } from "./MovieStore";

describe("Movie Store", () => {
  test("movie list should initialize as an empty array", () => {
    expect (inventory.length).toBe(0);
  })
  test("addMovie() should add a movie to a list of movies", () => {
    let test = new Movie ('Finding Nemo')
    let test2 = new Movie ('Mulan')
    addMovie(test)
    addMovie(test2)
    expect (inventory.length).toBe(2)
  })
  test("checkMovie should track if a movie is rented out or in stock", () => {
    let test = new Movie ('Finding Nemo', true)
    let test2 = new Movie ('Mulan', false)
    expect(checkMovie(test) == true && checkMovie(test2) == false)
  })
  test('rentalCost() should return the total price for movies rented', () => {
    let test = new Movie ('Finding Nemo', true, 5)
    let test2 = new Movie ('Mulan', false, 5)
    let customer1 = new Customer ('Joe', [test, test2])
    expect (rentalCost(customer1)).toBe(20)
  })
  test("checkOutMovie() should allow customer to check out a movie if it is in stock", () => {
    let test = new Movie ('Finding Nemo', true, 5)
    let test2 = new Movie ('Mulan', false, 5)
    let customer1 = new Customer ('Joe', [])

    expect (checkOutMovie(customer1, test)).toEqual(true)
    expect (checkOutMovie(customer1, test2)).toEqual(false)
  })

});