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

function pattern2(n){
    for(let r=n; r>=1; r--){
        let str="";
        for(let col=row; col>=n; col--){
            str="*";
        }
        console.log(str);
    }
}   