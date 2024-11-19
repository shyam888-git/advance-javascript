function _reverseString(input){
    let outputResult='';
    for(let i=input.length-1;i>=0;i--){
        outputResult+=input[i];
    }
    return outputResult;

}
console.log(_reverseString("Shyam"));