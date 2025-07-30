
function f(x,fn){ // fn is callback
    
    console.log(x);
    fn();

}

f(10, function exp(){
    console.log("I am an exp passed to a HOF");
});
