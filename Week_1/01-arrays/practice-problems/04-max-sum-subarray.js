/*
================================  
🧠 Problem: Custom - Maximum Sum of a Subarray of Size K  
🔗 Not on LeetCode (Sample input: [2, 1, 5, 1, 3, 2], k = 3)  
📘 Category: Sliding Window - Very Easy  
================================  

### 📝 Description:  
Given an array of positive integers and a number `k`,  
find the maximum sum of any contiguous subarray of size `k`.

### 🔢 Input:  
- `nums`: an array of positive integers  
- `k`: the size of the window/subarray

### 🎯 Output:  
- Return the **maximum sum** of any subarray of size `k`.

---

### 💡 Example:

**Input:**  
```js
nums = [2, 1, 5, 1, 3, 2]  
k = 3
```

**Output:**  
```js
9  
```

**Explanation:**  
The subarrays of size 3 are:  
- [2, 1, 5] → sum = 8  
- [1, 5, 1] → sum = 7  
- [5, 1, 3] → sum = 9 ← ✅ max  
- [1, 3, 2] → sum = 6

So, the result is **9**.

---

### 💭 Notes:  
This problem is ideal for practicing the **fixed-size sliding window** technique.  
Start by calculating the sum of the first `k` elements, then slide the window one element at a time, updating the sum by removing the element that’s sliding out and adding the one sliding in.

*/

var maxSumSubarray = function(nums, k) {
    let maxSum = 0; // Initialize max sum to 0
    let windowSum = 0; // Initialize current window sum to 0
    let windowStart = 0; // Left pointer of the window

    // Loop through the array with the right pointer
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd]; // Add the current element to the window sum

        // When we reach the size of k, we can calculate the maximum sum
        if (windowEnd - windowStart === k - 1) {
            maxSum = Math.max(maxSum, windowSum); // Update max sum if needed

            // Slide the window to the right by removing the leftmost element
            windowSum -= nums[windowStart];
            windowStart++; // Move the left pointer to the right
        }
    }
    return maxSum; // Return the maximum sum found
}


console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // should return 9

/**
============================
Big O Notation
============================
Time & Space Complexity:
Time Complexity: O(n)
You loop through the array once — each element enters and exits the window exactly once.

Space Complexity: O(1)
You’re using a constant amount of extra memory.
No additional data structures (like arrays or hash maps) are created that grow with input.

 */
