let company={
    sales:[{name:"John",salary:1000},{name:"Alice",salary:1600}],
    development:{
        sites:[{name:'Peter',salary:2000},{name:'Alex',salary:1800}],
        internals:[{name:'Jack',salary:1300}]
    }
};

//the function todo the job

function sumSalaries(department){
    if(Array.isArray(department)){
        return department.reduce((prev,current)=>prev+current.salary,0);
    }
   else{
    let sum=0;
    for(let sudeep of Object.values(department)){
        sum+=sumSalaries(sudeep);
    }
    return sum;
   }

}
console.log(sumSalaries(company));