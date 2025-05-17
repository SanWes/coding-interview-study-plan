/**
    Given: binary array (0's and 1's) and an integer goal
    Goal: number of subarrays that can sum to the goal
    
    Example 1: 
        Input: nums = [1,0,1,0,1], goal = 2
        Output: 4
 */

var numSubarraysWithSum = function(nums, goal) {
    let counter = 0; // tally up if subarray = goal
    let curSum = 0; // current windows sum to compare with the goal
    let windowStart = 0; // Starting pointer 

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        curSum += nums[windowEnd];
            // if current sum is now equal to our goal we increase the counter 
            while (curSum === goal){
                counter++;
            }
            // otherwise we continue our path and increse the window 
}}