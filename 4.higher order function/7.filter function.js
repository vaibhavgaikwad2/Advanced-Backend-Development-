function iseven(x){
    return (x%2==0);
}

const arr= [1,2,3,4,5];

const res = arr.filter(iseven);

console.log(res)
