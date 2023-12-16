/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/

const findMedianSortedArrays = (nums1, nums2) => {
    
    // Concat arrays
    let mergedArr = nums1.concat(nums2);
    
    // Sort numbers
    mergedArr.sort(function(a,b) {
        return a - b;
    });
    
    // Check if arr length is even
    let isArrayEven = mergedArr.length % 2 == 0 ? true : false;

    // Find Median
    let result;
    
    if (isArrayEven) {
        let on = true;
        while(on) {
            let arrLen = mergedArr.length;
            if (arrLen == 2) {
                on = false;
                result = (mergedArr[0] + mergedArr[1]) / 2
            } else {
                mergedArr.shift();
                mergedArr.pop();
            }
        }
    } else {
        let medianPosition = (mergedArr.length - 1) / 2;
        result = mergedArr[medianPosition];
    }

    return result;
};

//let nums1 = [1,3], nums2 = [2];
let nums1 = [1,2], nums2 = [3, 4];

let output = findMedianSortedArrays(nums1, nums2);

console.log("result", output);