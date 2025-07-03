function special_chars(){
    var a= NaN;
console.log(a);
var b= -0;
console.log(b);
}

function example(){
    var a=10;
    console.log(a);
    console.log("vaibhav gaikwad");

}

function arithmatic_operations(a,b){
    var a;
    var b;

    add = a+b;

    console.log(add);
    
}

function ops(){
    console.log(1=="1");
    console.log(1==="1");
}

function types(){
        console.log(typeof "1");
}

function ternary(){
    let age=20;
    let result = age >=18 ? "Adult":"Minor";
    console.log(result)
}

function if_elsee(){
    var age=20;
    if(age>=18){
        console.log("Adult");

    }
    else{
        console.log("Minor");
    }
}

function else_if(){
    if(10<5){
        console.log("False");

    }else if(10>5 ){
        console.log("True");
    }
}



function SwitchCases(){
    let day = "Monday";

    switch(day){
        case "Monday":
            console.log("Working day");
            break;

        case "Sunday":
            console.log("Rest Day");

            break;


        
    }
}

function evenodd(){
    let x = 27;
    if(x%2==0){
        console.log("Number is Even");
    }
    else{
        console.log("Number is odd");
    }
}

function greaternum(){
    let x =34;
    let y=27;
    let z = 54;

    if(x>y){
        if(x>z){
            console.log("X is greater num");
        }
        else{
            console.log("Z is greater num");
        }

    }else{
        if(y>z){
            console.log("y is greater num");

        }
        else{
            console.log("z is greater num");
        }
    }
}

function triangle(){
    let a = 10;
    let b = 12;
    let c= 14;

    if(a+b>c && a+c>b && b+c>c){
        console.log("Triangle can be formed ");
    }
    else{
        console.log("Triangle cant be formed");
    }
}

function triangle_type(){
    let a=12;
    let b=12;
    let c=12;

    if(a+b>c && a+c>b && b+c>c){
        if(a==b && b==c && a==c){
            console.log("Equilateral Triangle can be formed");
        }
        
        
        else if(a!=b && b!=c && a!=c){
            console.log("scalene triangle can be formed");
        }else{
            console.log("isosceles triangle can be formed");
        }

    }
    else{
        console.log("Triangle cant be formed");
    }
}


function loops(){
    for(i=0;i<5;i++){
        console.log(i);
    }

}
function sumusingfor(){
    let ans=0;
for(let i=1; i<=10; i++){
    ans +=i;
}
console.log(ans);
}

function whileloops(){
    let i =1;
    let ans =0;
    while(i<=20){
        ans+=i;
        i++
    }
    console.log(ans);
}

for(let i=1; i<=25; i++){
    if(i%2==0){
        console.log(i);
    }
}


 