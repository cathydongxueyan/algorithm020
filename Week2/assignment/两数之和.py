class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:   
        hashmap={}
        for ind,num in enumerate(nums):
            hashmap[num] = ind
        for i,num in enumerate(nums):
            j = hashmap.get(target - num)
            if j is not None and i!=j:
                return [i,j]

'''测试用例'''
nums = [2,7,11,15]
target = 17

Solution.twoSum(nums,target)