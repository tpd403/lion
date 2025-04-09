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


(async () => {
    const name = await getName();
    const age = await getAge();
    const address = await getAddress();

    console.log(name, age, address);
})();