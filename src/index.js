module.exports = function getZerosCount(number) {
  let conterZero = 0;
  let divider = 5;
  while (number > divider) {
    conterZero += Math.floor(number / divider);
    divider *= 5;
  }
  return conterZero;
}