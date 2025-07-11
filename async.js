function fetchData(callback) {
    console.log("Start fetching data......");

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json()) 
        .then(data => {
            console.log("Fetched Data!");
            callback(data);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            console.log("running this line always!");
        })
}

console.log("Start");

fetchData((data) => {
    console.log("fetched and process data", data);
});

console.log("End!");