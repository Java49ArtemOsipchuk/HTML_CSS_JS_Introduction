let numbers = [1, 2, 3, 4, 5]

function minMax(array){
    let result = [];
    
     result[0] = array.reduce((res, element) => (res < element ? res : element));
     result[1] = array.reduce((res, element) => (res > element ? res : element));
     return result;
   
}
console.log('min & max : ' + minMax(numbers));

let arr = ["abc", "old_abc", "lmn", "123", "old_lmn"];
let pref = "old_";

function deleteWithPrefix(arr, pref) {
    return arr.filter(element => !element.startWith(pref));
}
console.log('input:' + arr, 'output: ' + deleteWithPrefix(pref));


let num=[1,6,3,8,5,2,7,4] 

function getSortedEvenOdd(num) {
    return num.sort((a, b) => {
        return a % 2 == 0 && a < b ? -1 : b % 2 == 0 ? 1 : b - a;
    })
}

console.log('input ' + num, 'output ' + getSortedEvenOdd(num));