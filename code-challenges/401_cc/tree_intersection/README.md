# Challenge Summary
Code Challenge 32

## Challenge Description
Write a function that takes two binary tree parameters. Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Approach & Efficiency
Traverse T1 and add all values to the set. Return the set. Traverse 2 T2. If value exists in previous set, add value to new set. Return new set. A set is a an object of values (no keys). We will use the set to hold unique values (removing duplicates). As a reminder, the object values are not sorted. Time complexity is O(n) where n represents the sum of the total number of nodes in the first tree with the total number of nodes in the second. Space complexity is O(m) where represents the number of nodes found in the first tree passed into the equation OR O(lgn) instances where the second tree is greatly larger than the first. (Verify with Vinicio.)

## Solution
[!](assets/Code_Challenge_32_a.JPG)
[!](assets/Code_Challenge_32_b.JPG)