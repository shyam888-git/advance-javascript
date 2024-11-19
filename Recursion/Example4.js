function recSive(num){
    //factorial 5!=5*4*3*2*1

     if(num===0){
        return 1
     }
     let y=num*recSive(num-1);
     return y;


}
console.log(recSive(5));