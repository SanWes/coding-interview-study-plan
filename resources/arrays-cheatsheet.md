resources/
├── arrays_cheatsheet.md
├── strings_cheatsheet.md
├── hash_tables_cheatsheet.md
├── big_o_notation.md
├── recursion_patterns.md
├── dynamic_programming.md
├── sorting_algorithms.md
└── problem_solving_patterns.md

#  Arrays Cheatsheet

##  Overview

Arrays are a fundamental data structure used to store a collection of elements, typically of the same type. They offer fast access to elements using indices and are widely used in coding interviews for practicing problem-solving techniques.

---

##  Time & Space Complexity

| Operation         | Time Complexity | Notes                          |
|------------------|------------------|--------------------------------|
| Access by index  | O(1)             | Constant time                  |
| Search (unsorted)| O(n)             | Linear time                    |
| Insert at end    | O(1) (amortized) | May require resizing           |
| Insert at start  | O(n)             | Requires shifting elements     |
| Delete at end    | O(1)             |                                |
| Delete at start  | O(n)             | Requires shifting elements     |

---

##  Common Techniques

###  Two Pointers

Used when traversing from both ends or comparing values.

```js
let left = 0, right = arr.length - 1;
while (left < right) {
  // do something
  left++;
  right--;
}

```

### Sliding Window

Ideal for problems involving subarrays or a fixed-size window.

```js
let sum = 0, maxSum = 0;
for (let i = 0; i < k; i++) sum += arr[i];
for (let i = k; i < arr.length; i++) {
  sum += arr[i] - arr[i - k];
  maxSum = Math.max(maxSum, sum);
}
```

### Prefix Sum

Helps with range sum queries efficiently.

```js
let prefix = [0];
for (let i = 0; i < arr.length; i++) {
  prefix[i + 1] = prefix[i] + arr[i];
}
// Range sum from index i to j
let rangeSum = prefix[j + 1] - prefix[i];
```

## Common Problem Patterns 

- Maximum Subarray (Kadane’s Algorithm)

- Two Sum / Target Sum

- Move Zeros / Remove Elements (In-place)

- Merge Sorted Arrays

- Product of Array Except Self

- Prefix Sum for Range Queries

## Sample Practice Problems

- Two Sum (LeetCode #1)

- Best Time to Buy and Sell Stock (LC #121)

- Maximum Subarray (LC #53)

- Product of Array Except Self (LC #238)

- Merge Sorted Array (LC #88)

## Resources

- Tech Interview Handbook - Arrays (https://www.techinterviewhandbook.org/algorithms/array/)

- LeetCode Array Patterns (https://leetcode.com/explore/learn/card/fun-with-arrays/)

- Big-O Complexity Chart (https://www.bigocheatsheet.com/)