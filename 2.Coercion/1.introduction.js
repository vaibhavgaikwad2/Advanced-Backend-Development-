let obj={
    toString(){
        return "98";
        
    },

    valueOf(){
        return 10;
        }

    

    
};
let obj1={};
console.log(obj1.toString()); // 
console.log(obj.toString());
console.log(obj.valueOf());
console.log(obj1.valueOf());