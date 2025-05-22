function getName() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("likelion");
        }, 2000);
    })
}

function getAge() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(13);
        }, 2000);
    })
}

function getAddress() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Ansan");
        }, 2000);
    })
}



Promise
    .all([getName(), getAge(), getAddress()])
    .then((res) => {
        const [name, age, address] = res;
        console.log(name, age, address)
    })