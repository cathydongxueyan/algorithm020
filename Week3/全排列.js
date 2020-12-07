//参考了别人的题解
var permute = function(nums) {
    var res = [];
    rec([], new Set());
    return res;

    function rec(path, set){
        if(path.length === nums.length){
            res.push(path.concat());
            return;
        }
        for (var i = 0; i < nums.length; i++){
            if (!set.has(i)){
                path.push(nums[i]);
                set.add(i);

                rec(path, set);

                path.pop();
                set.delete(i);
            }
        }
    };
   
};