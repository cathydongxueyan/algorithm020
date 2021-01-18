/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    var len = s.length;
    var dp = new Array(len + 1);;
	dp[0] = 1;
	if (s.charAt(s.length - 1) == '0'){
            dp[1] = 0;
        }else{ // 不是0则只能为1-9，只有一种解码方法
            dp[1] = 1;
        }
        // 算2至n解码方法总数
        for (var i = 2; i < len + 1; i ++){

            // 设置1位2位数字是否可解码的标志位
            var oneNum = 1;
            var twoNum = 1;
            var firstNum = parseInt(s.substring(len - i, len - i + 1));
            var firstTwoNumStr = s.substring(len - i, len - i + 2);
            var firstTwoNum = parseInt(firstTwoNumStr);
            // 一位数字不可解码的情况
            if (firstNum > 26 || firstNum < 1)
                oneNum = 0;
            // 两位数字不可解码的情况
            if (firstTwoNumStr.charAt(0) == '0')
                twoNum = 0;
            if (firstTwoNum > 26 || firstTwoNum < 1)
                twoNum = 0;

            // 计算dp[n]，即长度为n的字符串的解法总数
            dp[i] = oneNum * dp[i - 1] + twoNum * dp[i - 2];
        }

        // 返回dp[n],即长度为n的字符串的解码方法总数
        return dp[len];
};