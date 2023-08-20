// Split sentence
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToStringArray(string) {
    return string.split(/[ !@#$%^&*()_+=:"?><]/);
}

// DNA to RNA converter
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function dnaToRnaConverter(dna){
    if(dna.length === 0 || dna.indexOf("T") === -1)
        return dna;

    let dnaAsArray = dna.split("");
    for(let i = 0; i<dnaAsArray.length; i++){
        if(dnaAsArray[i] === "T")
            dnaAsArray[i] = "U";
    }
    return dnaAsArray.join("");
}

// Return min/max el. of list
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

function Min(list) {   
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 0; j < list.length - i - 1; j++) {
            if (list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    return list[0];
}

function Max(list) {    
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 0; j < list.length - i - 1; j++) {
            if (list[j] < list[j + 1]) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }   
    return list[0];
}

// Find min value/index
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function findMinValueOrIndex(arr, toReturn){
    let minVal = arr[0];
    let minInd = 0;
    
    for (let i = 0; i < arr.length-1; i++) {
       if(minVal > arr[i+1]){
            minVal = arr[i+1];
            minInd = i+1;   
       }
    }   
    return toReturn === "value" ? minVal : minInd;    
}

// Wolf & Sheep
// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(sheepArr) {
    let wolfPosition = sheepArr.indexOf("wolf") + 1;   
    return (( sheepArr.length) === wolfPosition ) ?
        "Pls go away and stop eating my sheep" :
        `Oi! Sheep number ${sheepArr.length - wolfPosition}! You are about to be eaten by a wolf!`;
}