
// Complete the function in the editor. It has one parameter: an array of objects
// Each object in the array has two integer properties denoted by x and y 
// The function must return a count of all such objects O in array 
// that satisfy o.x == o.y

// Input Format

// The first line contains an integer denoting n.
// Each of the n subsequent lines contains two space-separated integers 
// describing the values of x and y

// Sample Input 0

// 5
// 1 1
// 2 3
// 3 3
// 3 4
// 4 5
// Sample Output 0

// 2


function getCount(objects) {
    let count = 0;
    objects.forEach(o => {
    if(o.x == o.y){
    count++;
    }
    })
    return count;
    }