const A = [1, 3, 6, 4, 1, 2]

function solution(A) {
    // only positive values, sorted
    A = A.filter(x => x >= 1).sort((a, b) => a - b)

    let x = 1

    for(let i = 0; i < A.length; i++) {
        // if we find a smaller number no need to continue, cause the array is sorted
        if(x < A[i]) {
            console.log(x)
        }
        x = A[i] + 1
    }

    console.log(x)
}

solution(A)
//console.log(x)
// console.log(A[0] + 1) = 2
// console.log(A[0 + 1]) = 3