export function getNumberPrecision(num: number) {
  if (!isFinite(num)) {
    return 0;
  }

  var e = 1, decimalPoints = 0;
  while ((Math.round(num * e) / e) !== num) {
    e *= 10;
    decimalPoints++;
  }

  return decimalPoints;
}