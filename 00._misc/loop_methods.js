// vi vil gerne bruge loop methods i javascript
const myNumbers = [1, 2, 3, 4, 5, 6];

const doubledNumbers = myNumbers.map((number) => number * 2)
console.log(doubledNumbers)

const satelites = [
    {
        name: "international space station",
        height: 23.444
    },
    {
        name: "MIR",
        height: 0
    },
    {
        name: "James Webb",
        height: 42.300
    }
]
/* vi ønsker ikke at mutere direkte
satelites.forEach((satelite) => {
    if (satelite.name !== "MIR"){
        satelite.height -= 3.000
    }
})*/
// map returner nyt array
const lowerHeigth = satelites.map((satelite) => {
    if (satelite.name !== "MIR"){
        satelite.height -= 3.000
    }
    return satelite

})
console.log(lowerHeigth)

const listOfReactions = ["thumbs down", "thumbs down", "thumbs down"]
// make a list that reacts as many times as above with thumbs up

const listOfThumbsUp = listOfReactions.map(() => "thumbs up")
console.log(listOfThumbsUp)