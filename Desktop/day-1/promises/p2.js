function someExpensiveFunction0() {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve("this is now resolved");
    }, 5000);
    });
    } 
//pending
//fullfill
//rejected
someExpensiveFunction0().then((y)=>{
console.log(y)
})
