let arr = [2,3,4,6,8];
function Max (arr){
    let max = arr[0];
   for(let i=0;i<arr.length;i++){
       if(arr[0]<arr[i]){
          max = arr[i];
       }
   }
   return max;
}
console.log(Max(arr));