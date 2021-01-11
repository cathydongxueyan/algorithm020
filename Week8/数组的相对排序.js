/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let have = [];//arr1中有且arr2中也有的所有元素
    let haveNot=[];//arr1与arr2的差集
    let targetArr = [];
    arr1.forEach(element => {
        if(arr2.includes(element)){
            have.push(element);
        }else{
            haveNot.push(element);
        }
    });
    haveNot.sort((a,b)=>a-b);//将差集以小到大排序
    for(let i=0;i<arr2.length;i++){
        for(let j=0;j<have.length;j++){
            if(have[j]===arr2[i]){
                targetArr.push(have[j]);
            }
        }
    }
    return targetArr.concat(haveNot);
};