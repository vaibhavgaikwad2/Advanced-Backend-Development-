 function evenodd(num){

    if(num%2==0){
        console.log("Even number");
    }
    else{
        console.log("odd");
    }

    
 }

 evenodd(5);

 for(let i=1; i<=20; i++){
    evenodd(i);
 }


 // Arrow function 

 let square = x => x*x;

 console.log(square(3));

function greet(name){
    return "Hello "+ name;
}

console.log(greet("vaibhav"));