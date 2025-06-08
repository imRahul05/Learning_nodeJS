/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    let n= nums.length
    let left =0
    let right = n-1
    let min = Infinity
    while(left<n){
        if(nums[left]>nums[right]){
          min= Math.min(min,nums[right])
          right--
        }
        else{
          min= Math.min(min,nums[left])
          left++ 
        }
    }
    return min
};