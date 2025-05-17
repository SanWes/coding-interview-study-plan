# Arrays

## Overview
An **array** is a data structure that holds a fixed-size sequence of elements of the same data type. Arrays are widely used in coding interviews due to their simplicity and efficiency in certain operations.

### Key Concepts

- **Indexing**: Arrays allow constant-time access to elements by index. First element is always index Zero (0). 
- **Memory Layout**: Arrays are stored in contiguous memory locations, allowing for efficient access.
- **Dynamic vs Static Arrays**: Static arrays have a fixed size, while dynamic arrays (like Python lists) can grow in size.

### Common Operations
1. **Accessing an element**: `O(1)` time complexity.
2. **Inserting an element**: `O(n)` in the worst case for dynamic resizing.
3. **Deleting an element**: `O(n)` to shift elements.
4. **Searching for an element**: `O(n)` in unsorted arrays, `O(log n)` in sorted arrays (binary search).

### Important Algorithms

- **Two-pointer technique**: Used in problems like moving zeros to the end or partitioning.
- **Sliding window**: Often used for subarray problems, e.g., finding the largest sum subarray of a fixed size.

### Common Array Problems
1. **Find the maximum subarray sum** (`Kadane's Algorithm`)
2. **Move zeros to the end**
3. **Find duplicates in an array**
4. **Merge two sorted arrays**

### Time Complexity
- **Access**: O(1)
- **Search**: O(n) (linear search) or O(log n) (binary search)
- **Insertion/Deletion**: O(n)

## Recommended Resources

1. [Array Cheat Sheet](/resources/arrays-cheatsheet.md)


## Practice Problems

1. **Leetcode**:
   - [Two Sum](https://leetcode.com/problems/two-sum/)
   - [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
   - [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

2. **Other Problems**:
   - **Move Zeros to End**: Write an algorithm to move all zeros in an array to the end while maintaining the relative order of non-zero elements.

## Next Steps
1. Review the common operations and algorithms associated with arrays.
2. Practice solving the problems listed above.
3. Check your understanding by solving additional problems on platforms like Leetcode or CodeSignal.



## Arrays Notes

### Advantages

- Store multiple elements of the same type with one single variable name 

- Accessing elements is fast as long as you have the index


### Disadvantages 

- Adding and removing elements from the middle of an array is slow due to the remaining elements needing to be shifted to keep indexing system.
   - One exception of this is if insert or remove at end of the array

- Certain languages when there is a fixed array size, its size cannot change after alteration. Meaning a new array needs to be made and remaining elements copied over. 

   - Making a new array and tranferring remaining elements over takes O(n) time. 

### Initializing Arrays in Several languages

- JavaScript
```js
// initialize array with []
let arr = [];

// array with elements 
let nums = [1,2,3,4];

// fixed size array - length 5, filled with undefined
let fixedSize = new Array(5);

// Array filled with default value (0)
let filledArr = new Array(5).fill(0);

```

- Python
```py 
# Empty list (dynamic array)
arr = []

# List with elements
numbers = [1, 2, 3, 4]

# Fixed-size list with default value
zeros = [0] * 5
```

- Java
```java
// Fixed-size array of integers (default values are 0)
int[] arr = new int[5];

// Array with values
int[] numbers = {1, 2, 3, 4};

```

### Common Terms

**Subarray**: 
   - A range of contiguous *(side-by-side) elements* within an array
   Example: given an array [2, *3, 6, 1,* 5, 4], [3, 6, 1] is a subarray while [3, 1, 5] is not a subarray.

**Subsequence**:
   - a sequence that you can get by removing some elements *without changing the order*
   Example: given an array [2, 3, 6, 1, 5, 4], [3, 1, 5] is a subsequence but [3, 5, 1] is not a subsequence.

### 🧠 Time Complexity of Array Operations

| **Operation**            | **Big-O**   | **Notes**                                                            |
|--------------------------|-------------|----------------------------------------------------------------------|
| **Access**               | `O(1)`      | Direct access using an index is constant time.                      |
| **Search**               | `O(n)`      | Need to scan the entire array in the worst case.                    |
| **Search (sorted array)**| `O(log n)`  | Binary search can be used if the array is sorted.                   |
| **Insert**               | `O(n)`      | Inserting in the middle requires shifting all subsequent elements.  |
| **Insert (at the end)**  | `O(1)`      | Special case — no shifting needed.                                  |
| **Remove**               | `O(n)`      | Requires shifting elements to fill the gap.                         |
| **Remove (at the end)**  | `O(1)`      | No shifting needed—just pop the last element.                       |


### Things to Watch Out for in Array Interview Questions

1. **Ask About Duplicates**
   ➤ Always check if the array might have duplicate values.
   ➤ Ask: "Can there be duplicates?"
   ➤ Duplicates can change how you solve the problem — sometimes they make it easier, other times more complicated.

2. **Watch Your Indexes**
   ➤ When looping through an array, make sure you don’t go past the end of it.
   ➤ Accessing an index that doesn’t exist will cause errors.

3. **Be Careful with Slicing and Merging Arrays**
   ➤ Cutting parts of an array (slicing) or combining arrays (concatenation) takes time — usually O(n).
   ➤ Instead of copying parts of the array, try using start and end pointers to mark the section you’re working with. This saves memory and time.

### Corner Cases to Watch For

1. **Empty Sequence**
   ➤ This means the array (or list) has no elements at all, like [].

   Why it matters:

   Your code should handle it without crashing.

   For example, trying to access the first element of an empty array would cause an error.

   Always check: "What if the input is empty?"

2. **Sequence with 1 or 2 elements**
   ➤ Small arrays like [5] or [3, 7].

   Why it matters:

   Many algorithms assume at least 3+ elements.

   Edge cases like this can cause logic to break or loops to behave incorrectly.

   For instance, finding a "middle" value or pair combinations behaves differently.

   ✅ Interview tip: Always ask the interviewer:
   "Can the input be very small — like 1 or 2 elements?"

3. **Sequence with repeated elements**
   ➤ Arrays like [4, 4, 4, 4].

   🔍 Why it matters:

   Repetition can affect algorithms that depend on unique values (e.g. set-based logic, counting distinct values).

   Can create false positives if you assume values are different.

   ✅ What to clarify:
   "Are repeated values allowed, and should they be treated as duplicates or separate?"

4. **Duplicated values in the sequence**
   ➤ Similar to above, but focused on some duplicates rather than all elements being the same — e.g., [1, 2, 3, 2, 4].

   🔍 Why it matters:

   You might need to remove or count duplicates.

   Solutions like hash maps or sets are often used here.

   Can also impact how you compare values (e.g., finding unique pairs).

   ✅ Common problem:
   "Return only the unique elements" — so knowing how to track duplicates is key.

### Techniques

- Refer to techniques document (arrays-techniques.md) for deep dive on each pattern 

- Arrays and Strings are both sequences, so most problem-solving techniques work for both.

#### 1. Sliding Window 

- Uses two pointers that move forward through the array without crossing over.

- Each element is visited at most twice, making the time complexity O(n).

   - Examples: 
      - [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)
      - [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/description/)
      - [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/description/)


#### 2. Two pointers

- General technique where two pointers can move independently and may cross each other.

- Can be used on one or two arrays simultaneously.

- Commonly used for problems like 
   - [sorting colors](https://leetcode.com/problems/sort-colors/description/)
   - [finding palindromic substrings](https://leetcode.com/problems/palindromic-substrings/description/)
   - [merging two sorted arrays](https://leetcode.com/problems/merge-sorted-array/description/)

- When working with two arrays, use one pointer per array to compare and advance appropriately.


#### 3. Traversing from the right 

- Sometimes you can traverse the array starting from the right instead of the conventional approach of from the left. 
- Examples: [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/description/), [Number of Visible People in a Queue](https://leetcode.com/problems/number-of-visible-people-in-a-queue/description/)


#### 4. Sorting the Array

When approaching array problems, consider whether **sorting** can simplify the solution or enable more optimized approaches.

---

##### 🔍 Questions to Ask:
- **Is the array already sorted or partially sorted?**  
  → You might be able to apply **Binary Search** or **Two Pointers** for better than O(n) performance.

- **Can you sort the array to make the problem easier?**  
  → Sorting first (O(n log n)) often reveals structure that simplifies logic.  
  ⚠️ Only sort if **preserving original order is not required**.

---

##### 🚫 When *Not* to Sort:
- If the problem depends on the **original relative order** of elements.  
  Examples:
  - “Next Greater Element”
  - Problems involving **indices**, **timestamps**, or **in-place requirements**

---

##### ⚙️ Common Use Cases:
- [Merging intervals](https://leetcode.com/problems/merge-intervals/description/)
- [Minimizing/removing overlaps](https://leetcode.com/problems/non-overlapping-intervals/description/)
- Insert Interval
- Two Sum (Sorted Input)
- 3Sum
- Meeting Rooms I & II

#### 5. Precomputation

In problems that involve **repeated operations** over subarrays — such as summing or multiplying elements — **precomputing** values can dramatically reduce time complexity.

---

###### 🔍 When to Consider Precomputation:
- Subarray sums, products, or counts are **queried multiple times**
- You’re trying to move from **O(n²)** brute-force to **O(n)** or **O(1)** queries

---

###### ⚙️ Common Patterns:
- **Prefix Sum / Prefix Product**
  - Precompute cumulative sums or products from the beginning of the array
  - Allows **O(1)** range queries: `sum(i, j) = prefix[j] - prefix[i-1]`

- **Suffix Sum / Product**
  - Useful when processing from the **end** or combining **left and right** passes

- **Hash Maps with Prefix Sums**
  - Used when looking for **number of subarrays** that match a target (e.g. `sum == k`)
  - Stores cumulative sums as keys and their counts as values

---

###### ✅ Example Problems:
- **Product of Array Except Self**  
  → Use prefix & suffix products to avoid using division

- **Minimum Size Subarray Sum**  
  → Optimized with prefix sums or sliding window

- **560. Subarray Sum Equals K**  
  → Use prefix sum + hash map for O(n) solution

- **238. Product of Array Except Self**  
  → Classic two-pass prefix/suffix product strategy

---

###### 🚫 When *Not* to Use It:
- If subarray operations are rare or can be done inline efficiently
- When the problem’s constraints make storing prefix arrays or maps infeasible due to space

---

###### 💡 Pro Tip:
If you're calculating the **same sum/product multiple times**, stop and think:
**Can I precompute and reuse it?**
This can often unlock the optimal solution.

#### 6. Index as a Hash Key

In space-constrained problems (often requiring **O(1) extra space**), the array itself can sometimes be repurposed as a **hash map or set** — especially when values are **within a known range** (e.g. 1 to N).

---

##### 🔍 When to Consider:
- The array contains **only positive integers from 1 to N**
- You're asked to achieve **constant space (excluding output)**

---

##### ⚙️ Common Technique:
- **Value-as-Index Mapping**:
  - Use each number `val` to **mark its corresponding index** `val - 1`
  - Typically by **negating** the number at that index
  - Helps track whether a number exists without extra space

---

##### ✅ Example Problems:
- **41. First Missing Positive**
  → Rearranges and marks indices to find the smallest missing positive

- **73. Set Matrix Zeroes**
  → Uses first row/column as a space-efficient flag system

- **Daily Temperatures**
  → Uses a monotonic stack, but similar constraints apply regarding space usage

---

##### ⚠️ Be Careful:
- Only works if you **control the value range**
- Mutating the array is allowed in the problem constraints

---

##### 💡 Pro Tip:
If the array values are within a **bounded range**, ask yourself:
**“Can I use the array’s own indices to encode extra info?”**
This trick can save both time and space.

#### 7.  Traversing the Array Multiple Times

Don't be afraid to **traverse the array more than once**. Just because an optimal solution must be **O(n)** doesn't mean it must happen in a single pass.

---

##### 🔍 When to Consider:
- The problem requires combining information from **different directions**
- You need to perform a **forward and backward pass**
- A **first pass collects data**, and a **second pass uses it**

---

##### ⚙️ Patterns:
- **Two-Pass Solutions**:
  - One pass to **build context or preprocess**, another to **apply logic**
- **Left-to-Right + Right-to-Left**:
  - Especially useful in problems involving **spans**, **peaks**, or **products**

---

##### ✅ Example Problems:
- **238. Product of Array Except Self**
  → One forward and one backward pass

- **42. Trapping Rain Water**
  → Two arrays for left and right max values

- **84. Largest Rectangle in Histogram**
  → One scan for previous smaller, one for next smaller

---

##### 💡 Pro Tip:
As long as you're not using nested loops, **multiple O(n) passes still count as linear time**.  
Sometimes clarity and correctness **require more than one traversal** — and that’s perfectly acceptable.
