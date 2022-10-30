let number = 555;

function sumDigits(number) {
    if (number < 0){
    number = -number;}
    let rem = 0, sum = 0;
    do{
        rem = number % 10;
        sum = sum + rem;
        number = Math.floor(number/10);
    }while(number > 0);
    return sum;
}

console.log(sumDigits(number));