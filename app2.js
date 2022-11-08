/**************FUNCTION_1 */

let strings1=["abc","lmn","cd"]

let strUl = ulSurround(strings1);
function ulSurround(strings1){
    let newStrings = strings1.map(function(element, index){
        return "<li>" + element + "<li>";
    })
    newStrings.splice(0, 0, "<ul>");
    newStrings.splice(newStrings.length, 0, "<ul");
    return newStrings;
}

console.log(strings1);
console.log(strUl);

/**************FUNCTION_2 */

let strings2=["abc","lmn","cd","abc","abc"]

function count(strings2, str){
    return strings2.reduce(function(res, element){
        return element === str ? res+1 : res}, 0); 
}

console.log("abc = ", count(strings2, "abc"));
console.log("ab = ", count(strings2, "ab"));

/**************FUNCTION_3 */

let arS = [1,2,3,4,5,6,7]; 
let arD = [10,20,30,40,50,60,70];
console.log("arS ", arS);
console.log("arD ", arD);

function arrayCopy(src,srcPos,dst,dstPos,length){
    src.slice(srcPos, srcPos + length)
    .reverse().forEach(element => {
        dst.splice(dstPos, 0, element);
    });
}

arrayCopy(arS, 3, arD, 4, 3);
console.log("arS ", arS);
console.log("arD ", arD);

/**************FUNCTION_4 */

let numbers1=[1,2,3,4,5,6,7]; 
let numbers2=[1,2,3,4,5,6,7]; 

function move(array,index,offset) {
    // let a = array.splice(index, 1);
    // array.splice(index + offset, 0, a);

    array.splice(index + offset, 0, array.splice(index, 1)[0]);
}

console.log("arr numbers ", numbers1);
move(numbers1, 3, -1);
move(numbers2, 2, 4);
console.log("move arr numbers ", numbers1);
console.log("move arr numbers ", numbers2);
