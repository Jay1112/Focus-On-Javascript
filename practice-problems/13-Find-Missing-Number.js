function findMissingNumber(nums) {
    for(let i = 0 ; i < nums.length; i++){
        let number = nums[i];

        if(number < 0) number = number * -1;

        if(number <= nums.length && nums[number] > 0){
            nums[number] = nums[number] * -1;
        }
    }

    let start = 0 ;
    while(start < nums.length && nums[start] <= 0){
        start++;
    }

    return start;
}