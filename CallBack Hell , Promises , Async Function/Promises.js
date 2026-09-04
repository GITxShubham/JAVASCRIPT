// A Promise in JavaScript is a special object that acts as a placeholder
// for a value that is not yet known because the operation is asynchronous. 
// It represents the eventual completion (or failure) of an asynchronous task 
// (like fetching data from an API, loading a file, or waiting for a timer) 
// and allows you to write cleaner, more manageable code.



// Let us start with a callback hell example ->

// function savetoDB(data,success,failure){
//     let internetspeed = Math.floor(Math.random()*10)+1;
//     if(internetspeed>4) success();
//     else failure();
// }


// savetoDB("Spiderman",()=>{
//     console.log("Success1: Data1 was saved");
//     savetoDB("Peter Parker",()=>{
//         console.log("success2: data2 was saved.");
//         savetoDB("Tom Holland",()=>{
//             console.log("success3: data3 was saved.");
//         },()=>{
//             console.log("Failure3: weak Connection , data3 was not saved.");
//         });
//     },()=>{
//         console.log("Failure2: weak connection , data2 was not saved.");
//     });
// },()=>{
//     console.log("Failure1: Weak Connection , Data1 was Not Saved.");
// });






// Note: Above was the example of callback hell.
// Now let us fix it with promises.


function savetoDB(data){
    return new Promise((resolve,reject)=>{
        let internetspeed = Math.floor(Math.random()*10)+1;
        if(internetspeed>4) resolve("success: data was saved");
        else reject("Failure: weak Connection");
    });
}

savetoDB("Spiderman")
    .then((result)=>{
        console.log("promise was resolved , Data1 was saved");
        console.log("result of promise:",result);
        return savetoDB("Peter Parker");
    })
    .then((result)=>{
        console.log("Promise was resolved , data2 was saved.");
        console.log("result of promise:",result);
        return savetoDB("Tom Holland");
    })
    .then((result)=>{
        console.log("Promise was resolved , data3 was saved.");
        console.log("result of promise:",result);
    })
    .catch((error)=>{
        console.log("Weak Connection , Promise was rejected");
        console.log("result of error:",error);
    });


// Note: The concept of promise chaining and result and error was also used in the above example