// Split sentence
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToStringArray(string) {
    return string.split(/[ !@#$%^&*()_+=:"?><]/);
}

// DNA to RNA converter
https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

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