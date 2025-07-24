const arr =[1,2,3,4,5,6,7,8,9];

function sum(prevres,currvalue){
    return prevres+currvalue;
}

const result=arr.reduce(sum);
console.log(result);