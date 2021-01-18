/**
*方法一，利用JavaScript提供的API
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.trim().split(/\s+/).reverse().join(' ');
};

/**
*方法二，自己写函数
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   // 判断当前的单词是否为空字符串
     if(s.length === 0) return "";

     let [index,len] = [0,s.length];
     let word = "";
     let result = "";

     while(index < len){
         // 跳过空格
         while(index < len && s.charAt(index) == ' '){
             index ++;
         }

         // 反转单词
         while(index < len && s.charAt(index) !== ' '){
             word = `${word}${s.charAt(index)}`;
             index ++;
         }
         // 拼接
         result = word + ' ' + result;
         word = "";
     }
     return result.trim(); 
};