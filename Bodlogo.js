const array = [1, 5, 7, 3, 1, 9, 6, 12];

//1. array dahi element-uudin niilber olooroi
//2. array dahi 5-s ih elementud olooroi
//3. array-g ihees bagaruu sort hiigeerei
//4, array-s niilber 10 baih 2 toog ol
//5. array dahi sondgoi toonuudig ustga

// //1.
// let sum=0;
// array.map((el)=>{
// sum+=el;
// })
// console.log(sum);

//2.
// array.filter((el)=>{
//   if(el>5){
//      console.log(el)
//   }
// })

//3
// const sorted = array.sort((a, b) =>  b - a);
// console.log(sorted);

//4
// let target = 10
// array.map((el,i)=>{
//   array.map((el2 , j) => {
//     if(el +array[j+1] == target){
//       console.log(array[i] , array[j+1])
//     }
//   })
// })

//5
array.filter((el) => {
  if (el % 2 == 0) {
    console.log(el);
  }
});
