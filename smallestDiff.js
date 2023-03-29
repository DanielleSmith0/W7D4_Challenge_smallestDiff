
//   function findMinDiff(arr, n)
//   {
//     if (n <= 1)
//       return;
//     arr.sort();
//     let minDiff = arr[1] - arr[0];
//     for (let i = 2; i < n; i++)
//       minDiff = Math.min(minDiff, arr[i] - arr[i-1]);
        
//     for ( let i = 1; i < n; i++)
//      {
//         if ((arr[i] - arr[i-1]) == minDiff)
//         {
//         return arr[i] - arr[i-1]
//         }                   
//      }
//   }
       
 
// // Driver code
         
//     // let arr = [5, 3, 2, 4, 1];
//     // let arr = [10, 20, 14, 16, 18];
//     // let arr = [30, 23, 54, 33, 96];

//     let n = arr.length;
//     console.log(findMinDiff(arr , n));

// function findMinDiff(arr1, arr2, n1, n2)
// {
//   if (n1 <= 1)
//     return;
//   arr1.sort();
//   if (n2 <= 1)
//   return;
//   arr2.sort();
//   let minDiff = Math.min(arr2[0] - arr1[0], arr1[0] - arr2[0]);
//   for (let i = 2; i < n; i++)
//     minDiff = Math.min(minDiff, arr1[i] - arr2[i], arr2[i] - arr1[i]);
      
//   for ( let i = 1; i < n; i++)
//    {
//       if ((arr2[i] - arr1[i]) == minDiff)
//       {
//       return arr2[i] - arr1[i]
//       }
//       if ((arr1[i] - arr2[i]) == minDiff)
//       {
//       return arr1[i] - arr2[i]
//       }                         
//    }
// }
     

// // Driver code
       
//   // let arr = [5, 3, 2, 4, 1];
//   let arr1 = [10, 20, 14, 16, 18];
//   let arr2 = [30, 23, 54, 33, 96];

//   let n1 = arr1.length;
//   let n2 = arr2.length;
//   console.log(findMinDiff(arr1, arr2, n1, n2));

//Answer Walkthrough:

// function smallest(arr1, arr2) {
//     let smallestDiff = Infinity

//     //compare every single number in arr1
//     //to every single number in arr2

//     //if we get a negative number, we positivize that
//     //number, since differences can't be negative
//     //(a difference is just the gap between two numbers)

//     //look at every number in arr1
//     for (let i = 0; i < arr1.length; i++) {
//         let currArr1Num = arr1[i]

//         //compare it to every number in arr2
//         for (let k = 0; k < arr2.length; k++) {
//             let currArr2Num = arr2[k]

//             let subTr = currArr1Num - currArr2Num

//             //positivize the subtraction
//             let currDiff = Math.abs(subTr)

//             //see if our current value is smaller than the winner...
//             //then replace it!
//             if (currDiff < smallestDiff) {
//                 smallestDiff = currDiff
//             }
//         }
//     }

//     return smallestDiff
// }

// console.log(smallest([10, 20, 14, 16, 18], [30, 23, 54, 33, 96]))

//Runtime Efficiency = n^2
//as n gets bigger, there are more loops to loop through, which is quadratic. 

//function

//Steps 1: sort arrays
//O(2nlogn) -> O(nlogn)

//is this whole function O(n + nlogn) ???

//Nope, the more complex just wins out:
//O(nlogn)

//The soln file does have a code with the same algorithm.