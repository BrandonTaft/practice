const o = ['first', 'second', false];

// 'p' is the index
for (let p in o) {
    console.log(p + ' ' + o[p]);
}

output
0 first
1 second
2 false