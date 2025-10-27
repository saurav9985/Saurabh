var main=document.getElementById("main");
var s="";
// for(let i=1;i<=56;i++){
//     let r=Math.floor(Math.random()*100);
//     s+=`<div class="card">
//        <h1>${r}</h1>
//       </div>
//        `
// }
let arr=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4R1UrVj4v7rkwI4DcAWTbUx-CM6zB3WOBdg&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYJBUUQ_Cmy459CR1DSoxcWtqsC7v9j5-eQ&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREkXNZrw0BXnRTnEP5dayS1eJw5wRgdn4-BA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDSZwBV6DcMuQ-awc1WSuoo2S4SGtbcDgsjA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76OtaJ_i9LpB4jc8BXlFDzDtqpxvu7QPPqC-7O5OIOmEB9lczdlnR_ubkKWqDk1UcLlU&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvRWiYDBlUV7CfDVlQ5EWZwmUM4hyDQqi-Eh6Fb2C4gmaecLvWRhqE89B3Zz_kweA6UEM&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmjDcAS_IBIO8nNjbjAPt_R1mzgW6RurUrhdaUByLj7wY0Xx0KTPups9lousQ6rCAzjo&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWpAwAvSDKJl8nyCYdT6Fc0sAHyQMAmJ-Tg&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmYnVb8IvoGnoTocqIxTM1AFMdIhtDVu1PA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1cuFFr0D_-rK4ZzXsK0ghOX_4RRo76b971A&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7A2CuG8gtKCHgxVxzl1cDwKGS18YxVzK3g&s"];
let d=console.log(arr.length);
for(let i=1;i<=56;i++){
    let r=Math.floor(Math.random()*10);
    s+=`<div class="card">
         <img src="${arr[r]}">
      </div>
       `
}
main.innerHTML=s;



 // <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4R1UrVj4v7rkwI4DcAWTbUx-CM6zB3WOBdg&s">