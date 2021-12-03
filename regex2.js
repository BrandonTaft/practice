//Complete the function in the editor below by returning a RegExp object, re, 
//that matches every integer in some string s.

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    const re = new RegExp(/[0-9]+/gm);
    
    /*
     * Do not remove the return statement
     */
    return re;
}