function greet(name) {
    console.log(`Hello ${name}`);
}

function addOne(num) {
    console.log(num + 1);
}

function subOne(num) {
    console.log(num - 1);
}

module.exports = {
    greet,
    addOne,
    subOne,
};

/*
{
greet: greet,
addOne: addOne,
}
*/