let x =undefined;

if(x){
    onslotchange.log("this is truthy value");
}

else{
    console.log("This falsy value");
}

console.log(Number("0xa "));