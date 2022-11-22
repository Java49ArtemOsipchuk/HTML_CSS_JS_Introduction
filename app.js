
function getOccurrences(str) {
    let strArr = Array.from(str);
    const occurrences = {};
    strArr.forEach(element => {
        if (occurrences[element]) {
            occurrences[element]++;
        } else {
            occurrences[element] = 1;
        }
    });
    
    return occurrences;
}

function isAnagram(str1, str2) {
    if(str1.length != str2.length) {
        return false;
    }

    let str1Occur = getOccurrences(str1.toLowerCase());
    let str2Arr = Array.from(str2.toLowerCase());
    for(let i = 0; i < str2Arr.length; i++) {
        if(str1Occur[str2Arr[i]] == undefined) {
        return false;
    }
        if(--str1Occur[str2Arr[i]] < 0){
            return false;
        }
}

    return true;
}
const word = "Yellow";

console.log(isAnagram(word, 'weloly'));
console.log(isAnagram(word, 'leloyw'));
console.log(isAnagram(word, 'wolley'));
console.log(isAnagram(word, 'weloyl'));

console.log(isAnagram(word, 'weloll'));
console.log(isAnagram(word, 'leloy')) ;
console.log(isAnagram(word, 'wollet')); 
console.log(isAnagram(word, 'weloyo'));
