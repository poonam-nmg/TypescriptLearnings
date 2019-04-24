new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result1) {
    console.log(result1); // 1
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result1), 1000);
    });
}).then(function (result1) {
    console.log(result1); // 2
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result1), 1000);
    });
}).then(function (result) {
    console.log(result); // 4
});
