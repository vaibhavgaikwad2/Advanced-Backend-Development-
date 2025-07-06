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
    for(let row=1; row<=n; row++){
        //task --> <some spaces><some stars>

        let spaces= n - row;
        let str="";

        for(let j =1; j<=spaces; j++){
            str+=" ";

        }
        // after this loop we have n - row spaces in it
        let stars = row;
        for(let col=1; col<=stars; col++){
            str+="*";

        }
        console.log(str);


    }  
}



function pattern3(n){
    for(let row=1; row<=n; row++){
        //task --> <some spaces><some stars>

        let spaces= n - row;
        let str="";

        for(let j =1; j<=spaces; j++){
            str+=" ";

        }
        // after this loop we have n - row spaces in it
        let stars = 2*row-1;
        for(let col=1; col<=stars; col++){
            str+="*";

        }
        console.log(str);


    }  
}

function pattern4(n){
    for(let row=1;row<=n; row++){
        let str="";
        for(let col=1; col<=n - row+1; col++){
            str+="*";
        }

        console.log(str);
    }
}



function uppertriangle(n){
    for(let row=1; row<=n; row++){
        let str="";
        let spaces=n-row;
        for(let j=1; j<=spaces; j++){
            str+=" ";
        }
        let stars=2*row-1;
        for(let col=1; col<=stars; col++){
            str+="*";
        }
        console.log(str);
    }
}


function lowertriangle(n){
    for(let row=1; row<=n-1; row++){
        let str="";
        let spaces=row;
        for(let j=1; j<=spaces; j++){
            str+=" ";

        }
        let stars=2*(n-row)-1;

        for(let col=1; col<=stars;col++){
            str+="*";
        }
        console.log(str);
    }
}


function Pattern5(n){
    uppertriangle(n);
    lowertriangle(n);
}

//Pattern5(5);

function hourglass(n){
    lowertriangle(n);
    uppertriangle(n);
}

//hourglass(5);

// pattern3(5);


function upperpart(n){
    for(let row=1; row<=(n-1)/2; row++){
        let str="";
        let left_str= row;
        for(let i=1; i<=left_str; i++){
            str+="*";
        }

        let spaces=n-2*row;
        for(let j=1; j<=spaces; j++){
            str+=" ";

        }

        let right_str=row;
        for(let k=1; k<=right_str; k++){
            str+="*";
        }
        console.log(str);
    }
}


function middlepart(n){
    for(let row=1; row<=1; row++){
        let str="";

        for(let col=1; col<=n; col++){
            str+="*";
        }

    console.log(str);
    }
}

function lowerpart(n){
 for(let row=1; row<=(n-1)/2; row++){

        let str = "";
        let left_str= ((n-1)/2)-row+1;
        for(let i =1; i<=left_str; i++){
            str+="*";
        }

        let spaces=2*row-1;
        for(let j=1; j<=spaces; j++){
            str+=" ";
        }

        let right_str= ((n-1)/2)-row+1;
        for(let k=1; k<=right_str; k++){
            str+="*";
        }




        console.log(str);


 }

}


function butterfly(n){
upperpart(n);

middlepart(n);

lowerpart(n);
}


butterfly(7);

