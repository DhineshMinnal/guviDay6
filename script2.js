// // // Write a code to print the numbers in the array

// var numsArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";

// for (var i = 0; i < numsArr1.length; i++) {
//     new_string += numsArr1[i]
// }
// console.log(new_string);


// // // Write a code to print the numbers in the array

// var numsArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";

// for (var i = 0; i < numsArr2.length; i++) {
//     if (i === numsArr2.length - 1) {
//         new_string += numsArr2[i]
//     } else {
//         new_string += numsArr2[i] + ','
//     }

// }
// console.log(new_string);


// // // Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

// var new_string = "";

// for (var i = 11; i > 0; i--) {
//     new_string += i + " "
// }
// console.log(new_string);

// // //Write a code to replace the array value — If the number is even, replace it with ‘even’.

// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 == 0) {
//         nums[i] = "even"
//     }
// }
// console.log(nums);


// // // Write a code to replace the array value — If the index is even, replace it with ‘even’.

// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i < nums.length; i++) {
//     if (i % 2 == 0) {
//         nums[i] = "even"
//     }
// }
// console.log(nums);


// // // Write a code to add the even numbers only

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;
// for (var i = 0; i < numsArr.length; i++) {
//     if (numsArr[i] % 2 == 0) {
//         sum += numsArr[i]
//     }

// }
// console.log(sum);


// // // Write a code to add the even numbers and subract the odd numbers

// // var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 100;
// for (var i = 0; i < numsArr.length; i++) {
//     if (numsArr[i] % 2 === 0) {
//         sum += numsArr[i]
//         // console.log(sum)
//     } else {
//         sum -= numsArr[i]
//         // console.log(sum)
//     }
// }
// console.log(sum);


// // // Write a code to print inner arrays

// var nums1 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < nums1.length; i++) {
//     console.log(nums1[i])
// }


// // Write a code to print elements in the inner arrays

var nums2 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var str_all = "";
var inner_array
for (var i = 0; i < nums2.length; i++) {
    inner_array = nums2[i];
    for (var j = 0; j < inner_array.length; j++) {
        str_all += inner_array[j]
    }

}
console.log(str_all)


// // Write a code to replace the array value — If the index is even, replace it with ‘even’.

var nums3 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var inner_array
for (var i = 0; i < nums3.length; i++) {
    inner_array = nums3[i];
    for (var j = 0; j < inner_array.length; j++) {
        if (inner_array[j] % 2 == 0) {
            inner_array[j] = "even"
        }
    }

}
console.log(nums3);

// // Write a code to print elements in the inner arrays in reverse

var nums4 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var str_all = " ";
for (var i = nums4.length - 1; i >= 0; i--) {
    var inner_array = nums4[i];
    for (var j = inner_array.length - 1; j >= 0; j--) {
        str_all += inner_array[j] + " "
    }

}
console.log(str_all);

// // Write a code to add elements in the inner arrays based on odd or even values


var nums5 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var sum_odd = 0;
var sum_even = 0;
for (var i = 0; i < nums5.length; i++) {
    var inner_array = nums5[i];
    for (var j = 0; j < inner_array.length; j++) {
        if (inner_array[j] % 2 != 0) {
            sum_odd += inner_array[j]
        } else {
            sum_even += inner_array[j]
        }
    }
}
console.log(sum_odd);
console.log(sum_even);