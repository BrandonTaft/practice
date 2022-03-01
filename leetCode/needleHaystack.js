
//1st one done with no help and faster than 93.03

var strStr = function(haystack, needle) {
    if(needle == ""){
    		return 0
    } if(haystack.includes(needle)){
    		return haystack.indexOf(needle)
    }
    return -1
};