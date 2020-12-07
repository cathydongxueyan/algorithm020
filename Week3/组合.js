
var combine = function(n, k) {
   var result = [];
   if(k <= 0 || n < k){
       return result;
   }
   dfs(1, []);
   return result;

   function dfs(start = 1, path = []){
      if (path.length === k){
          result.push([...path]);
          return;
      }
      if (start > n) 
         return
      var leftNums = n - start + 1;
      if (leftNums < k - path.length)
         return
      path.push(start);
      dfs(start + 1, path);

      path.pop();
      dfs(start + 1, path);
   } 
      
};