function sum (a , b) {
    return a + b;
}

function calc(a , b , sum){
    return sum(a,b);
}

console.log(calc(2,5,sum));


setTimeout(()=>{
    console.log("hola mundo");
},1000);


const myName = (name) => {
    console.log(`hola mi nombre es ${name}`);
}

setTimeout(myName,5000,"oscar");

