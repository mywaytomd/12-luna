 function validateCard(cardNumber) {
  const digitsStr = cardNumber.split('-').join('');
  
  let sum = 0;
  let shouldDouble = false;

  for (let i = digitsStr.length - 1; i >= 0; i--) {
    const digit = Number(digitsStr[i]);

    if (isNaN(digit)) return false; 

    let temp = digit;
    if (shouldDouble) {
      temp *= 2;
      if (temp > 9) temp -= 9;
    }

    sum += temp;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

console.log(validateCard('4561-2612-1234-5464')); 
