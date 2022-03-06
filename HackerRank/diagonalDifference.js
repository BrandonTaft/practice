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
   