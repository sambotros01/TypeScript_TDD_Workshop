import { checkAge } from './Drivers';

describe('checks what a drivers eliigibility is', () => {
  test('enum the drviers age', () => {
    let driver1 = 10;
    let driver2 = 20;
    let driver3 = 1000;

    expect(checkAge(driver1)).toBe("too young");
    expect(checkAge(driver2)).toBe("eligible");
    expect(checkAge(driver3)).toBe("too old");
  })
})