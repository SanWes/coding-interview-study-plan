/*
================================
🧠 Problem: 209. Minimum Size Subarray Sum
🔗 https://leetcode.com/problems/minimum-size-subarray-sum/
📘 Category: Sliding Window - Medium
================================
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

*/


    /**
        Problem Summary
    - Given: Array of nums and a target num 
    - return: Min length of subarray where the sum of that subarray
    is greater or equal to target.
    - if no such subarray return 0

    Input: target = 7, nums = [2,3,1,2,4,3]
    Output: 2
    
     */

var minSubArrayLen = function(target, nums) {
        let minSizeSub = Infinity;
        let curSubSum = 0;

        let windowStart = 0;

        for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
            curSubSum += nums[windowEnd]; // expand window to the right 
        /**
        Using a While loop in order to continue shrinking if possible.

        if: shrinks window once (might miss shorter valid subarrays)
        while: shrinks window as much as possible, finding the true minimum 
        */
            while(curSubSum >= target) {
    // Update the minimum size of the subarray : "Is this current window smaller than any valid window I’ve seen before?"
            if (minSizeSub > windowEnd - windowStart +1) {
                minSizeSub = Math.min (minSizeSub, (windowEnd - windowStart +1))
            }
    // Shrink the window from the left to see if we can get a smaller valid window
            curSubSum -= nums[windowStart];
            windowStart++;
            }
        }
        // If we never found a valid subarray, return 0
        return minSizeSub === Infinity ? 0 : minSizeSub;
    
};

/**
============================
Big O Notation:
================================
Time Complexity: O(n) — Each element is visited at most twice (once added, once removed).

Space Complexity: O(1) — Constant space; no extra data structures used.
 */