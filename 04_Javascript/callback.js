function getName(cb) {
    setTimeout(() => {
        cb("likelion");
    }, 2000);
}

getName((name) => {
    console.log(name);
})

getName((name) => {
    console.log(name);
})

getName((name) => {
    console.log(name);
})

function getName2(cb) {
    setTimeout(() => {
        cb("likelion");
    }, 2000);
}

function getAge(cb) {
    setTimeout(() => {
        cb(13);
    }, 2000);
}

function getAddress(cb) {
    setTimeout(() => {
        cb("Ansan");
    }, 2000);
}

getName2((name) => {
    getAge((age) => {
        getAddress((address) => {
            console.log(name, age, address)
        })
    })
})