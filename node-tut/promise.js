let a = 20;
let b = 0;

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})

waitingData.then((data)=>{
    b = data;
    console.log(a+b)
})



console.log("starting up")

setTimeout(()=>{
    console.log("2 second log")
}, 2000)



setTimeout(()=>{
    console.log("0 second ago")
},0)

console.log("Finishing up")

