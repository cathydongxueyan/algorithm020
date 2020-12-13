学习笔记

本周对超哥讲的内容印象深刻的如下：
1. 递归真的很重要，深度优先搜索和广度优先都要依靠它来解决，说明其用处之广
2. 关于二分查找的实现，超哥分享了四步做题法的中文版：
   第一步，审题，特殊情况，输入输出范围，确定整数等条件
   第二步，所有解法都思考一遍，空间时间复杂度都求出来，找出最优解
   第三步，写代码
   第四步，测试样例
   
   暴力：还原O（logN）-> 升序->二分：O（logN）（写，总结）
   
   二分查找法的三个必要条件：
   1. 单调递增或递减
   2. 边界  lo  hi  mid
   3. index
   
   超哥给的Java二分查找算法实现代码，我自己专程js代码如下：
   var search = function(nums, target) {
   let lo = 0;
   let hi = nums.length - 1;
   let mid = 0;
   while(lo <= hi){
       mid = lo + (hi - lo)/2;
       if(nums[mid] == target){
           return mid;
       }
       if(nums[mid] >= nums[lo]){
           if(target >= nums[lo] && target < nums[mid]){
               hi = mid -1;
           }else{
               lo = mid + 1;
           }
       }else{
           if (target > nums[mid] && target <= nums[hi]){
               lo = mid + 1;
           }else{
               hi = mid - 1;
           }
       }
   }
   return -1;
};


   
   
   
   
   
   
   
   
