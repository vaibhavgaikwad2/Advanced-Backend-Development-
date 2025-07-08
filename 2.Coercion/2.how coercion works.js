let obj={};

//console.log(10-obj);

// refer notes for detailed algorthm working explaination


let obj1={
    toString(){
        return "10";
    },
    valueOf(){
        return 9;
    }
}

let obj3={x:5, valueOf() {return 99}
};

let obj4={x:5,y:4}; // x and y is key value pairs it doesnt affect the result. it only matters tostring and valueof
console.log(100-obj4);

console.log(10-obj3);