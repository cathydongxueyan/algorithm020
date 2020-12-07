学习笔记

本周超哥讲的递归算法的解题思路很受启发：
1. 最初用暴力，就是在纸上或脑中一步步推导
2. 寻找基本问题，人工代入检查正确与否
3. 找重复，尤其是最近重复性（这一步是关键）

超哥对学习过程的经验：
1. 在没有思路时，建议看从题解入手，但是官方不推荐看，而是要看精选，或者，带图解的，这样更有助于理解
2. 实在没有自己思路的时候，不要死磕
3. 要知道算法这门学问是有门槛的，高于“高中数学”，也高于“高等数学A”，所以对于一些算法的思路不是很理解是很正常的，要有信心，坚定地重复几遍

pow(x,n)的解题思路：
1. 暴力
result = 1
for i:0->n{
    result *= i
}
时间复杂度 o(n)

2. 分治:如何分解问题
2.1 terminator
2.2 process
2.3 drill down
2.4 reverse

pow(x,n):
   subproblem: pow(x, n/2)
   merge:
   if n%2 ==1{
   result = subresult * subresult * x
   }
   else{
      result = subresult * subresult
   }
log(n)

实现代码：
double fastPow(double x, long long n){
   if (n == 0){
   return 1.0:
   }
   double half = fastPow(x, n/2);
   if (n % 2 == 0){
      return half * half;
   }else{
      return half * half * x;
   }
}

double  myPow(double x, int n){
   long long N = n;
   if (N < 0){
      x = 1 / x;
      N = -N;
   }
   return fastPow(x,N);
}

















