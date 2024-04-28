export function luhnAlgorithm(cardNumber) {
  // Проверка наличия значений в карте
  if (!cardNumber) {
    return false;
  }

  const digits = cardNumber.toString().split("").map(Number);
  let checksum = 0;
  for (let i = digits.length - 2; i >= 0; i -= 2) {
    let doubleDigit = digits[i] * 2;
    checksum += doubleDigit > 9 ? doubleDigit - 9 : doubleDigit;
  }

  for (let i = digits.length - 1; i >= 0; i -= 2) {
    checksum += digits[i];
  }

  return checksum % 10 === 0;
}
