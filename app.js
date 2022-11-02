/***********HW #11 */

// let number = 555;

// function sumDigits(number) {
//     if (number < 0){
//     number = -number;}
//     let rem = 0, sum = 0;
//     do{
//         rem = number % 10;
//         sum = sum + rem;
//         number = Math.floor(number/10);
//     }while(number > 0);
//     return sum;
// }

// console.log(sumDigits(number));

/***********HW #12 */

function fromNumberToString(number, base){
    number = Math.abs(number);
    let result = "";
    while(number != 0){
        let rem = number % base;
        if(rem >9){
            rem = String.fromCharCode(87+rem);
        }
        result = rem + result;
        number = Math.trunc(number / base);
    }
    return result;
}


function fromStringToNumber(inputStr, base){
    let result = 0;
    for(let i = 0; i<inputStr.length; i++) {
        let code = inputStr.charCodeAt(i);
        if(code>=48 && code<=57){
            code -= 48;
        }
        else if(code >= 97 && code <= 122){
            code -= 87;
        }
        result = result*base + code;
    }
    return result;
}


console.log(fromNumberToString(900550, 36));
console.log(fromStringToNumber("java", 36));
