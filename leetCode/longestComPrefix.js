const strs = ["flower", "flow", "flight"]

const longestCommonPrefix = (strs) => {
    let prefix = "";
    if (strs === null || strs.length === 0) return prefix
    for (i = 0; i < strs[0].length; i++) {
        let first = strs[0][i]
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== first) {
                return prefix
            }
        }
        prefix = prefix + first

    }
    return prefix
}
console.log(longestCommonPrefix(strs))
//longestCommonPrefix(strs)