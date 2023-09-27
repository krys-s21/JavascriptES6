//for of (word)
for (let letter of "JavaScript") {
    console.log(letter);
}
//for of (array)
let topics = ["Javascript", "Node", "CSS"];
for (let topic of topics) {
    console.log(topic);
}

//for of (Map)
let topicsMap = new Map();
topicsMap.set("HTML", "/topic/html");
topicsMap.set("CSS", "/topic/css");
topicsMap.set("JavaScript", "/topic/js");

for(let topic of topicsMap){
    console.log(topic);
}
for(let topic of topicsMap.keys()){
    console.log(topic);
}
for(let topic of topicsMap.values()){
    console.log(topic);
}
for(let topic of topicsMap.entries()){
    console.log(topic);
}