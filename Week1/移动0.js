// 想法来自超哥的index
var moveZeroes = function(nums) {
    var j = 0;
    for (var i = 0; i < nums.length; ++i){
        if(nums[i] != 0){
            nums[j] = nums[i];
            if(i != j){
                nums[i] = 0;
            }
            j++;
        }
    }
};