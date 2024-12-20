export function amountFollowers (array) {
  return array.reduce((acc, num) => acc + num.number, 0)
}