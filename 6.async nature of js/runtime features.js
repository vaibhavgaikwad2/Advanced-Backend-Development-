let count =0;

let interval_id=setInterval(()=>{
    console.log("hello",+count);
    count++;

},1000); // means it prints hello + count after each 1 sec 


// if we didnt stop this it will run contiunosly

// to stop this we use this clear interval
setTimeout(()=>clearInterval(interval_id),5000);
// it will stop after 5 sec