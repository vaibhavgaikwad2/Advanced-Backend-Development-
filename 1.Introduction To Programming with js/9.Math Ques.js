function rootsofeqn(a,b,c){
    
     
    let x=(b*b)-4*a*c;
    let y= Math.sqrt(x);

    let root_1= (-b+y)/(2*a);
    let root_2= (-b-y)/(2*a);

    console.log("Root 1 :"+root_1);
    console.log("Root 2 :"+root_2);


}


rootsofeqn(2,5,3);