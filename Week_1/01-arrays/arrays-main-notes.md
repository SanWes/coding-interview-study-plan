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

1. [Array Cheat Sheet](resources/Array_CheatSheet.pdf)
2. [YouTube: Arrays Explained](link-to-video)

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

- 