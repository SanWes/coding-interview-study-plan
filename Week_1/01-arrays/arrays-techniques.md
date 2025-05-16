# Arrays: Techniques & Practice

This file contains hands-on practice and explanations for key array problem-solving techniques like Sliding Window and Two Pointers.

---

## Sliding Window

- Folder Structure

    - 01-arrays/
    └── sliding-window-practice/
        ├── 01-643-max-avg-subarray-i.js
        ├── 02-209-min-size-subarray-sum.js
        ├── 03-930-binary-subarrays-with-sum.js
        ├── 04-3-longest-substring-without-repeat.js
        ├── 05-560-subarray-sum-equals-k.js
        └── 06-239-sliding-window-maximum.js

### Concept

Use two pointers that expand/shrink a window across the array, tracking state (like sum, count, or unique elements). Ideal for subarray or substring problems.

- **The Key Idea (Sliding Window)**
Instead of calculating the sum and average from scratch every time you move the window (which is slow), we use a sliding window to:

  1. Add the number that’s entering the window. 

  2. Subtract the number that’s leaving the window.

  3. Keep track of the max average we’ve seen.

### Common Pattern

```js
let left = 0;
for (let right = 0; right < arr.length; right++) {
  // Expand window logic here

  while (condition) {
    // Shrink window from the left
    left++;
  }
}

```



### Easy Sliding Window Practice Problems:

1. [**Maximum Average Subarray I**](https://leetcode.com/problems/maximum-average-subarray-i/description/)
   - **Goal:** Find the maximum average of a subarray of length `k`.  
   - **Why Sliding Window?** Maintain a sum window of size `k` and slide it across the array.

2. [**Sliding Window Maximum**](https://leetcode.com/problems/sliding-window-maximum/) (Simplified Version)  
   - ⚠️ Officially a Medium, but try brute force or fixed-size window logic for practice.

3. [**Subarray Sum Equals K**](https://leetcode.com/problems/subarray-sum-equals-k/)  
   - 💡 Typically solved with prefix sum + hashmap, but helps you understand when **Sliding Window doesn't apply** (e.g., with negative numbers).

4. [**Minimum Size Subarray Sum**](https://leetcode.com/problems/minimum-size-subarray-sum/description/)  
   - **Goal:** Find the smallest subarray whose sum is ≥ target.  
   - **Why Sliding Window?** Shrink window from the left as soon as the condition is met.

5. [**Longest Substring Without Repeating Characters**](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)  
   - Works on strings. Slide window while tracking unique characters in a Set or Map.

6. [**Binary Subarrays With Sum**](https://leetcode.com/problems/binary-subarrays-with-sum/description/)  
   - Practice with binary arrays and fixed/variable window sizes.


#### 💡 Tip:

Start with problems where:

- You're given a **fixed window size `k`** → easier to implement a static sliding window.
- All numbers are **positive** → shrinking the window becomes more predictable and intuitive.

## Two Pointers
