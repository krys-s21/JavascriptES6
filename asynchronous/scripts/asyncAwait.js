    new Promise((resolves) =>
        setTimeout(resolves, seconds * 1000)
    );

const countToFive = async () => {
    console.log("zero seconds");
    await delay(1);
    console.log("1 sec");
    await delay(2);
    console.log("2 sec");
    await delay(3);
    console.log("3 sec");
}

countToFive();
