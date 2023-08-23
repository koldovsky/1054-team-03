//Smallest integer
//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallest = args[0];
        for (let i = 1; i < args.length; i++) {
            if (args[i] < smallest) {
                smallest = args[i];
            }
        }
        return smallest;
    }
}

//Geometry Basics: Circle Circumference in 2D
//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
    const radius = circle.radius;
    const circumference = 2 * Math.PI * radius;
    return parseFloat(circumference.toFixed(6));
}

//Training JS #12: loop statement --for..in and for..of
//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj) {
    const resultArray = [];
    for (const key in obj) {
        if (key.length === 5) {
            resultArray.push(key);
        }
        if (obj[key].length === 5) {
            resultArray.push(obj[key]);
        }
    }
    return resultArray;
}
