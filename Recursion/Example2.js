function pow(x,n){
    let result=1;
    //result =8;
    for(let i=0;i<=n;i++){
        //i=3
        result*=x;
        //1*=2=2;
        //2*=2=4;
        //4*=2=8

        //8*2=16;


    }
    return result;

}
console.log(pow(2,3));