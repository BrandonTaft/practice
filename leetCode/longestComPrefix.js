strs = ["flower", "flow", "flight"]
strs1 = ["flower", "flow", "flight"]

var longestCommonPrefix = function (strs) {
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        let first = strs[0][i]
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== first) return prefix
        }
        prefix = prefix + first
    }
    return prefix
}

console.log(longestCommonPrefix(strs))