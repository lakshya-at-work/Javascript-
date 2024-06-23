// map reduce and filer 

//map creates a new array 


a=[1,2,3,4,5,56,6,3,512,78]

a.map((value)=>{
    console.log(value)
    return value+1;

})

//filter method

let b= a.filter((value)=>{
    return  value>5
})
console.log(b)
4