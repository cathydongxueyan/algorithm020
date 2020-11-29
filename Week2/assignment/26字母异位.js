/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s,t){
    if(s.length!= t.length){
        return false;
    }
    var str1 = s.split('');
    var str2 = t.split('');
    if(str1.sort().toString() == str2.sort().toString()){
        return true;
    }else{
        return false;
    }
}

//测试用例
var s = 'abc'
var t = 'bac'

//返回true