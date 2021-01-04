/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res = [];
    if (n == 0){
        return res;
    }
    dfs("", n, n, res);
    return res;
};
/**
 * @param {string} str
 * @param {int} left
 * @param {int} right
 * @param {string[]} res
 */

function dfs(str, left, right, res) { 
        if (left == 0 && right == 0) {
            res.push(str);
            return;
        }
        // 剪枝
        if (left > right) {
            return;
        }
        if (left > 0) {
            dfs(str + "(", left - 1, right, res);
        }
        if (right > 0) {
            dfs(str + ")", left, right - 1, res);
        }
}