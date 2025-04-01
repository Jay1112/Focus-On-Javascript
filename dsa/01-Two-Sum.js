// Two Sum

// TC : O(N)
// SC : O(N)

var twoSum = function(nums, target) {
    const hash = new Map();
    for(let i = 0 ; i < nums.length; i++){
        const number = nums[i];
        const index = hash.get(target - nums[i])
        if(index === undefined){
            hash.set(number, i);
        }else{
            return [index, i];
        }
    }
};