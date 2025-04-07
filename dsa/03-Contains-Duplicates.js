// Contains Duplicates

// TC : O(N)
// SC : O(N)

var containsDuplicate = function(nums) {
    let m = new Map();
    for(const number of nums){
        if(m.get(number)){
            return true;
        }else{
            m.set(number,1);
        }
    }    
    return false;
};