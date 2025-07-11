async function fetchData() {
    try {
    const result = await fetch("https://fakestoreapi.com/products");

    console.log("Result: " + result);
    }

    catch(error) {
        console.log(error);
    }

    finally {
        console.log("This code is runs finally")
    }
}

// const arrFunc = async() => {
// // 
// };
fetchData();