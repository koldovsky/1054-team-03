// Split sentence
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToStringArray(string) {
    return string.split(/[ !@#$%^&*()_+=:"?><]/);
}