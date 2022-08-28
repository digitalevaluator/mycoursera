/**
 * function currency convertion
 */
function currencyConverter (amount, rate) {
    return amount * rate;
}

let currency1 = 100.00;
let currency2 = 0.00;
let exchangeRate = 1.2;
currency2 = currencyConverter (currency1,exchangeRate);
console.log(`currency one ( ${currency1} ) => currency two ( ${currency2} )`);