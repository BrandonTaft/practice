let arr = [[11,2,4], [4,5,6], [10,8,-12]];
let arr2 = [[11,2,4,1,2,3], [4,5,6,1,2,3], [10,8,-12,1,2,3], [3,2,1,1,12,24], [23,12,7,3,9,16], [13,22,2,1,99,-112]]

function diagonalDifference(arr) {
		let x = 0;
    let y = arr.length;
    let primary = [];
    let secondary = [];
    for(let i = 0; i < arr.length; i++){
    		primary.push(arr[i][x])
        x++
    }
    
    for(let j = 0; j < arr.length; j++){
    		secondary.push(arr[j][y - 1])
        y--
    }
    let p = primary.reduce((total, num) => total + num);
		let s = secondary.reduce((total, num) => total + num);
    return Math.abs(p - s)
}

//console.log(diagonalDifference(arr))
diagonalDifference(arr)








function diagonalDifference(arr) {
    let primary = arr[0][0] + arr[1][1] + arr[2][2]
    let secondary = arr[0][2] + arr[1][1] + arr[2][0]
    if(primary > secondary){
    return primary - secondary
    }
    else{
    return secondary - primary
    }

}

let arr = [[11,2,4], [4,5,6], [10,8,-12]]

function diagonalDifference(arr) {
    for(let i = 0; i < arr.length; i++){
    		console.log(arr[i])
    }

}

diagonalDifference(arr)

//r(let j = 0; j < arr[i].length; j++){
    
   //onsole.log(arr[i][j])
   //
   