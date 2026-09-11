function totalNumbers(digits) {
    let result = new Set();
for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < digits.length; j++) {
            for (let k = 0; k < digits.length; k++) {
 if (i === j || j === k || i === k) {
                    continue;
                }if (digits[i] === 0) {
                    continue;
                }if (digits[k] % 2 !== 0) {
                    continue;
                }let number =
                    digits[i] * 100 +
                    digits[j] * 10 +
                    digits[k];

                result.add(number);
            }
        }
    }return result.size;
}