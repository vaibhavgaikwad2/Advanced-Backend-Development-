// sort function is HOF 

// the sort function takes a comparator function as args


// sorting arr in inc order

const arr = [1,10,100,9,1000,12,13,5,6,3,2];

const inc_arr= arr.sort(function (a,b){
    // if a <b -> a- b will be negative -> if comp func is neative then a is placed befoe the b
    // if a > b -> a -b will be positive -> if comp func gives positive then b willbe placed before a
    
    return a -b; 

})

console.log(inc_arr);
