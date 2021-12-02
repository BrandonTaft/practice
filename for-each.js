const arr = ['a', 'b', 'c', 'd'];

arr.forEach((value, index, array) => {
    console.log(array[index])
   
});

output= a 
    b
    c
    d

    arr.forEach((value, index) => {
        console.log('index', index, 'has a value of', value);
    });

    output= index 0 has a value of a
    index 1 has a value of b
    index 2 has a value of c
    index 3 has a value of d


    arr.forEach((value) => {
        console.log('value:', value);
    });

    output= value: a
    value: b
    value: c
    value: d