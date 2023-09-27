
//with convensional function
function skier(name, sound) {
    return {
        name,
        sound,
        powderYell: function () {
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}!`)
        }
    }
}

skier("Sendy", "woo").powderYell();
skier("John", "yeah").powderYell();


//using arrow function
const arrowSkier = (name, sound) => {
    return {
        name,
        sound,
        powderYell: () => {
            let yell = sound.toUpperCase();
            console.log(`${yell}! ${yell}!`)
        }
    }
}

arrowSkier("Sendy", "woo").powderYell();
arrowSkier("John", "yeah").powderYell();