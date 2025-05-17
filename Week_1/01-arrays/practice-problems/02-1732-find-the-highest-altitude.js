/*
================================
🧠 Problem: 1732. Find the Highest Altitude
🔗 https://leetcode.com/problems/find-the-highest-altitude/description/
📘 Category: Sliding Window - Easy
================================

Description:
There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

Example 1:

Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

===================================
===================================

Psudo Code

// Trip consists of n+1 points at different altitudes 
// Biker starts at point 0 with 0 alt 

// Given an Array of gain with length = n
// gain[i] = net gain in alt between points i and i + 1

// first initialize our highest alt at 0. 
// now we loop through gain, and continously add it to previous alt total
// compare the current alt with the highest and return the maxAltitude

Example 1:
Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
*/

var largestAltitude = function(gain) {
    let maxAlt = 0; // initialize array for bikers altitudes starting with lowest possible num
    let currentAlt = 0; // track our current alt as we go 


    for (let i = 0; i < gain.length; i++) {
        currentAlt += gain[i]; 

        maxAlt = Math.max(currentAlt, maxAlt); // select the highest alt of the two
    }

    return maxAlt;
};


/*
Big O Notation
Time Complexity: O(n) - We loop through the array once. The total time is linear

Space Complexity: O(1) - We only use a few variables to store the current altitude and max altitude.

- No additional data structures (like arrays or hash maps) are created that grow with input.

- Doesn’t matter how big the input array is — we’re just tracking two values.
*/