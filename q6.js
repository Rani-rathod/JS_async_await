const promiseWifeBringingTicks = new Promise((resolve,reject) => {
    setTimeout(() => {
       resolve('ticket');
    },3000);
});

promiseWifeBringingTicks.then((t) => {
    console.log(`person3: shows${t}.`);
});





