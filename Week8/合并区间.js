 /*
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) 
       return intervals;
    //先sort
    intervals.sort((arr1,arr2)=>{
        if(arr1[0] !== arr2[0]){
            return arr1[0] - arr2[0];
        }else{
            return arr1[1] - arr2[1];
        }   
    });
   for (var i = 0; i < intervals.length -1; i++){
      const a2 = intervals[i][1];       
      const b1 = intervals[i+1][0];
      const b2 = intervals[i+1][1];  
        if(a2 >= b1){
            intervals[i][1] = a2 > b2 ? a2 : b2;
            intervals.splice(i+1,1); //删除后面多余的元素，删除数量为1
            i-- ; //因为删除数据元素之后，数组的长度发生了变化，需减1
        }
   }
   return intervals;
};
