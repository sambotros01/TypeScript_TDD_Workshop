// A movie store is asking you to make an application
// the application can add movies to an inventory array,
// track if a movie is rented out or in stock,
// and calculate a customer's total cost for the # of rentals * # of days.
// A customer can only rent a movie if it is in stock.

export let inventory: Array<Movie> = [];

export class Movie {
  title: string;
  isInStock: boolean;
  daysCheckedOut: number;

  constructor(title: string, isInStock: boolean = true, daysCheckedOut: number = 0){
    this.title = title;
    this.isInStock = isInStock;
    this.daysCheckedOut = daysCheckedOut;
  };
}

export class Customer {
  name: string;
  rentals: Movie[];

  constructor(name: string, rentals: Movie[]){
    this.name = name;
    this.rentals = rentals;
  }
}

export function addMovie(movieTitle: Movie){
  inventory.push(movieTitle)
}

export function checkMovie(movie: Movie){
  return movie.isInStock
}

export function rentalCost(customer: Customer){
  let cost = 2;
  let totalCost = 0;

  customer.rentals.map(movie => {
    totalCost += cost * movie.daysCheckedOut
  })

  return totalCost
}

export function checkOutMovie(customer: Customer, movie: Movie){
  if (!movie.isInStock){
    return false
  } else{
    movie.isInStock = false;
    customer.rentals.push(movie)
    return true
  }
}