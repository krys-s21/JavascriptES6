//Simple promise example
const delay = (seconds) =>
    new Promise((resolve, reject) => {

        if (typeof seconds !== "number") {
            reject(new Error("seconds must be a number"));
        }
        setTimeout(resolve, seconds * 1000);
    });

console.log("Zero seconds");
delay(1).then(() => console.log("1 sec"));

//Remote data with promises (XMLHttpRequest)
const spacePeople = () => {
    return new Promise((resolves, rejects) => {
        const api = "http://api.open-notify.org/astro.json";
        const request = new XMLHttpRequest();
        request.open("GET", api);
        request.onload = () => {
            if (request.status === 200) {
                resolves(JSON.parse(request.response));
            } else {
                rejects(Error(request.statusText))
            }
        };
        request.onerror = err => rejects(err);
        request.send();
    });
};

spacePeople()
    .then(
        (spaceData) => console.log(spaceData),
        (err)=>console.log(new Error("Can't load people"))
    );