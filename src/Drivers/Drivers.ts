// Create a function that returns a DriverStatus enum value
// based on a given age.
// too young is age less than 16
// too old are ages greater than 85
// eligible is any ages between 16 and 85

export enum DriverStatus {
  TOO_YOUNG = "too young",
  TOO_OLD = "too old",
  ELIGIBLE = "eligible",
}

export function checkAge(driver: number) {

  if (driver < 16) {
    return DriverStatus.TOO_YOUNG;
  } else if (driver > 85) {
    return DriverStatus.TOO_OLD;
  } else {
    return DriverStatus.ELIGIBLE;
  }

}

