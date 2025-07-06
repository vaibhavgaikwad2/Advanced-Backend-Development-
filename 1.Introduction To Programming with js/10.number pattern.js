function number_printing(n){
    for(row=1; row<=n; row++){

        let str="";
        let spaces=n-row;

        for(let i=1; i<=spaces; i++){
            str+=" ";

        }

        let counter=1;
        for(let j=1; j<=row; j++){
            str += counter;
            counter++;
        }
        let counter_2=row-1;
        for(let k=1; k<=row-1; k++){
            str+=counter_2;
            counter_2--;

        }


console.log(str);

    }
}


number_printing(4);