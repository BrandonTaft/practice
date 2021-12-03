//Task
//Complete the function in the editor below by returning a RegExp object, re, 
//that matches any string s that begins and ends with the same vowel. 
//Recall that the English vowels are a, e, i, o, and u.

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    return new RegExp(/^([aeiou]).*\1$/);
    
    
    /*
     * Do not remove the return statement
     */
    return re;
}


//Complete the function in the editor below by returning a RegExp object, re, 
//that matches any string s satisfying both of the following conditions:

//String s starts with the prefix Mr., Mrs., Ms., Dr., or Er.
//The remainder of string s (i.e., the rest of the string after the prefix) 
//consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    const re = new RegExp(/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/);
    /*
     * Do not remove the return statement
     */
    return re;
}

