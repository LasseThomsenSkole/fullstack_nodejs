
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max + 1 - min) - min);
}
// for(let i = 0; i <= 5; i++){
//     console.log(getRandomInt(0,10))
// }

const anon = function getRandomInt(min, max){
    return Math.floor(Math.random() * (max + 1 - min) - min);
}; // <--- semi-colon

// callback kan muligvis blive kaldt og det er en function som bliver givet som parameter
function genericPerformer(name, action){
    return action(name);
}

const codingAction=(name) => `${name} likes coding` //implicit return bcs of oneliner

console.log(genericPerformer("lasse", codingAction))

function sleepingAction(name){
    return `${name} loves sleeping`
}

console.log(genericPerformer("Andreas", sleepingAction))

console.log(genericPerformer("Tara", (name) => `${name} owns at boxing`))