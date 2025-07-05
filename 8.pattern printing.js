function print(n){
    for(let i=1; i<=n; i++){
        let stars ="";
        for(let col=1;col<=n; col++){
            stars+="*";
        }
       console.log(stars); 

    }
}

function pattern(n){
    for(let row=1;row<=n; row++){
        let str="";
        for(let col=1; col<=row; col++){
            str+="*";
        }

        console.log(str);
    }
}

pattern(6);