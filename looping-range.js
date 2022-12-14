function range(start, end, step) {
  let stepper = [];
  if (start === undefined || end === undefined || step === undefined) {
    return stepper;
  } else if (start > end) {
    return stepper;
  } else if (step <= 0) {
    return stepper;
  } else {
    for (let x = start; x <= end; x = x + step) {
      stepper.push(x);
    }
  }
  return stepper;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
