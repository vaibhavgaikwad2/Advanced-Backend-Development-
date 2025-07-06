function arrangement(arr){
    let count_1=0;
    let count_0=0;
    let length=arr.length;

    for(let i=0; i<=length -1; i++){
        if(arr[i]==0){
            count_0++;
        }else{
            count_1++;
        }
    }
    for(let j=0; j<= count_0-1; j++){
        arr[j]=0;
    }

    //let count=count_0;

    for(let k=0; k<=count_1-1; k++){
        arr[k+count_0]=1;
    }

    console.log(arr);
}


arr=[1,1,0,0,1,0];
arrangement(arr);