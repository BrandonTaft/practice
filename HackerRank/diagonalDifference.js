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