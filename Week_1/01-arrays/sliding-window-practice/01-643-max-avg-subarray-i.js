/* 
================================
🧠 Problem: 643. Max Average Subarray I
🔗 https://leetcode.com/problems/maximum-average-subarray-i/
📘 Category: Sliding Window - Easy
================================
Description:
Given an integer array nums consisting of n elements and an integer k, return the maximum average value of any contiguous subarray of length k.

💡 Example:
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75

============================
============================

✅ Approach:
- Use a fixed-size sliding window of size k.
- Maintain the current window sum and update max as you slide.


        Pseudo Code 
1. Set maxAverage to the smallest possible number
2. Set windowSum to 0
3. Start a loop through each number in the array:
    a. Add the number to windowSum
    b. If we've added k numbers:
        - Calculate the average (windowSum / k)
        - Update maxAverage if this average is bigger
        - Remove the number at the start of the window from windowSum
4. Return maxAverage

*/

var findMaxAverage = function(nums, k) {
    let maxAvg = -Infinity; // Start with the lowest possible value
    let curSum = 0; // current window sum 
    let windowStart = 0; // left pointer of the window
    
    
    // Loop through the array with the right pointer
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        curSum += nums[windowEnd]; // add the current element to the window sum
        
        // When we reach the size of k, we can calculate the average
        if(windowEnd - windowStart === k-1) {
            // calculate the average of the current window
            let avg = curSum/k; 
            // Update maxAvg if the current average is greater
            maxAvg = Math.max(maxAvg, avg);
            
            // Slide the window to the right by removing the leftmost element
            curSum -= nums[windowStart];
            
            // move the left pointer to the right
            windowStart++; 
        }
    }
    // Return the maximum average found
    return maxAvg;
};


/*
============================
Big O Notation:
================================
Time Complexity: O(n)
- Traverse the array once with a single loop.

- Each element is added and subtracted once from the sum window.

- So the time complexity is linear, or O(n) where n is the length of nums.

Space Complexity: O(1)
- Only use a few variables (max, soFar, windowStart, etc.).

- No additional data structures are used (like arrays or hash maps).

- So it’s constant space, or O(1).
================================
*/