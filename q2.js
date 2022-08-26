

// Fatrry function

// function fun(){
//     return{
//         model : "galexy",
//         price : 3000
//     }
// }
// obj = fun()
// console.log(obj.model+"model",obj.price+300)




// concentrator

// function pen(name,color,price){
//     this.name=name;
//     this.color=color;
//     this.price=price
// }
// const pen1=new pen('maken','blua','$3');
// console.log(pen1)
 



let countValue = new Promise(function (resolve, reject) {
    resolve('Promise resolved'); 
});
countValue.finally(
    function greet() {
        console.log('This code is executed.');
    }
);


