学习笔记
今天跟超哥学习印象最深刻的是要有信心，不必纠结每个算法都能理解并且自己完全实现。
1.练习步骤：
1. 5-10分钟
2. 有思路了之后，再自己写代码；如果还是不会写，就可以马上看题解。
3. 把已经有的题解拿出来背诵，要达到熟练的效果
4. 之后才是自己写，相当于是闭卷，在IDE或Leetcode上写都可以


2.算法：移动0学习笔记
首先理解要求：把非0往前移动，0都移动到后面
其次，可能的解：1.loop， count zeros
              2. 直接在数组中进行index操作

public void moveZeros(int[] nums){
    int j = 0;
    for (int i = 0; i < nums.length; i++){
        if (nums[i] != 0){
           nums[j] = nums[i];
           if (i != j){
              nums[i] = 0;
           }
           j++;
        }
    }
}

思路总结：巧妙地借助数组已有的index来实现，而不用额外增加资源





