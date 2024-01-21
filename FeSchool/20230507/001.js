function message() {

    Promise.all([
        new Promise((resolve) => {
            setTimeout(() => {
                resolve('hello');
            }, 100)
        }),
        new Promise((resolve) => {
            setTimeout(() => {
                resolve('world');
            }, 100)
        })
    ]).then(([hello, world]) => {
        console.log(`${hello} ${world}`);
    });
}