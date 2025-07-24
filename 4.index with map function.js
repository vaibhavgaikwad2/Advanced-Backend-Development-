const arr=[9,8,7,6,5];

function print(ele,idx){
    return `Element at index ${idx} is ${ele}`;
}

const res = arr.map(print);


console.log(res);