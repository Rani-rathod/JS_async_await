async function even(){
    a=new Promise((resolve,reject)=>{
        c=require("readline-sync");
        b=c.questionInt("enter the number:-")
        if (b%2==0){
            resolve('Even');
        }else{
            reject('Odd');
        }
    })
    y=await a;
    console.log(y,b)
}
even()




