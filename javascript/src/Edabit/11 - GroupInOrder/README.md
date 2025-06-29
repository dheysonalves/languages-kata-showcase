# Group in Order

Create a function that groups an array of numbers based on a size parameter. The size represents the maximum length of each sub-array.

```javascript
[1, 2, 3, 4, 5, 6], 3
[[1, 3, 5], [2, 4, 6]]
// Divide array into groups of size 3.

[1, 2, 3, 4, 5, 6], 2
[[1, 4], [2, 5], [3, 6]]
// Divide array into groups of size 2.

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4
[[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9]]
// "Leftover" arrays are okay.
```

Examples

```javascript
group([1, 2, 3, 4], 2) ➞ [[1, 3], [2, 4]]

group([1, 2, 3, 4, 5, 6, 7], 4) ➞ [[1, 3, 5, 7], [2, 4, 6]]

group([1, 2, 3, 4, 5], 1) ➞ [[1], [2], [3], [4], [5]]

group([1, 2, 3, 4, 5, 6], 4) ➞ [[1, 3, 5], [2, 4, 6]]
```

## Notes

The size parameter represents the maximum size for each sub-array (see ex.4). You should try to fill each sub-array evenly. In other words, ex.4 should be [[1, 3, 5], [2, 4, 6]], not [[1, 3, 5, 6], [2, 4]].
Keep the relative order of the numbers in each sub-array the same as the order in the original array.

## More details

As per my understanding, it goes like this. First divide the array according to size. For eaxample, [1, 2, 3, 4, 5, 6], 3 so we need 3-3 elements in each array . 6/3 = 2. so divide it like [1, 2, |3, 4,| 5, 6] and pick one element from each division. [1, 3, 5][2, 4, 6]

Same is true for [1, 2, 3, 4, 5, 6], 2. It will become [1, 2, 3, | 4, 5, 6] and pick one one element from each [1, 4] [2, 5] [3, 6]

The question here is what should be done when the elements are not dividing equally? For example, [1, 2, 3, 4, 5, 6, 7], 4. Here 7/4 = 1.75 so take 2 . Now it will turn into [1, 2,| 3, 4,| 5, 6,| 7] so the final division will be [1,3,5,7] [2,4,6].

Another example [1, 2, 3, 4, 5, 6], 4. Here 6/4=1.5 so take 2 and array will be divided [1, 2,| 3, 4,| 5, 6] like this, and final division will be [1,3,5] [2,4,6].
