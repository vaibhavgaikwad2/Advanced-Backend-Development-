function custom_map(arr,fun){
    let result=[];
    for(let i=0; i<arr.length; i++){
        result.push(fun(arr[i], i));
    }
    return result;
}

const arr = [1,2,3,4,5,6]

function print(ele,idx){
    return `Element at index ${idx} is ${ele}`;
}
const value= custom_map(arr,print)

console.log(value);