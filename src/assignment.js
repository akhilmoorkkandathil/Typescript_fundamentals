// let charInput:string = "Hello how are you";
// console.log(charInput);
// let num1:number = 45;
// let num2:number = 56;
// let sumOfNumbers:number = num1+num2;
// console.log(sumOfNumbers);
// let p:number = 500000;
// let n:number = 1;
// let r:number = 10;
// let simpleInterest:number =( p*n*r)/100;
// console.log(simpleInterest);
// let mark:number = 56;
// if(mark>=50) console.log("passed");
// else console.log("Failed");
// let totalMark: number = 69;
// switch (true) {
//   case (totalMark  < 50):
//     console.log("Failed");
//     break;
//   case (totalMark < 60):
//     console.log("E");
//     break;
//     case (totalMark  < 70):
//         console.log("D");
//         break;
//     case (totalMark < 80):
//     console.log("C");
//     break;
//     case (totalMark  < 90):
//     console.log("B");
//     break;
//   case (totalMark <= 100):
//     console.log("A");
//     break;
//   default:
//     console.log("totalMark is less than or equal to 5");
// }
// let day: number = 5;
// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//     console.log("Wednesday");
//     break;
//     case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//     case 7:
//         console.log("Saturday");
//         break;
//   default:
//     console.log("Invalid day");
// }
// let number: number = 5;
// let limit:number = 10;
// for(let i:number = 1;i<=limit;i++){
//   let res:number=i*number;
//   console.log(i +" x "+ number+" = "+ res);
// }
// let Limit:number = 10;
// let sums:number=0;
// for(let i:number=1;i<=Limit;i++){
//   if(i%2==1){
//     sums+=i
//   }
// }
// console.log("Sum of odd numberes:" +sums);
// let limit = 5;
// for (let i = 1; i <= limit; i++) {
//   let str:string = "";
//   for (let j = 1; j <= i; j++) {
//     str = str + j +" "
//   }
//   console.log(str);
// }
// let array1:number[] = [1,2,3,4,5];
// let array2:number[] = [10,20,30,40,50];
// for(let i:number=0;i<array1.length;i++){
//   [array1[i],array2[i]]=[array2[i],array1[i]];
// }
// console.log("Array one is "+ array1);
// console.log("Array two is "+ array2);
// let arr1:number[] = [23,54,6,57,86,6,7,45,34,54,68,45,64,43,45,45];
// let count:number = 0;
// for(let i:number=0;i<arr1.length;i++){
//   if(arr1[i]%2==0){
//     count++
//   }
// }
// console.log("Count of even numbers in an array is "+count);
var arr1 = [23, 54, 6, 57, 86, 6, 7, 45, 34, 54, 68, 45, 64, 43, 45, 45];
//  function quicksort(arr1:number[]):number[]{
//   if(arr1.length<2) return arr1
//   let pivot:number = arr1[0];
//   let left:number[]=[];
//   let right:number[]=[];
//   let rest:number[] = arr1.slice(1);
//   for(let i:number = 0;i<rest.length;i++){
//     if(rest[i]>pivot){
//       left.push(rest[i])
//     }else{
//       right.push(rest[i])
//     }
//   }
//   return [...quicksort(left),pivot,...quicksort(right)]
//  }
//  console.log(quicksort(arr1));
function recursion(str) {
    if (str.length < 2)
        return true;
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    str = str.slice(1, str.length - 1);
    return recursion(str);
}
console.log(recursion("MALAYALAM"));
