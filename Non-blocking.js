let myPromise = new Promise((resolve, reject) => {
    const myAge = 18;

    if(myAge >= 18)
    {
        resolve("User is an Adult!");
    }
    else
    {
        reject("User is not Adult!");
    }
});

// myPromise.then((res) => {
//     console.log(res);
// });

async function abc() {
    const data = await myPromise;

    console.log(data);
}
abc();