module.exports = function reverse(n) {
    let res = n.toString().split("").reverse();
    if (res[res.length - 1] === "-") {
        res.pop();
        res = res.join("");
    } else res = res.join("");
    return res;
};
