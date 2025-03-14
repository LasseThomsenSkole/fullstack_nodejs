let dogs = [];

const dogMatchesNameH1 = document.getElementById("dog-matches-name");
const dogMatchesBio = document.getElementById("dog-matches-bio");
const dogMatchesCity = document.getElementById("dog-matches-city");
const dogMatchesStreetAddress = document.getElementById("dog-matches-street-address");
const dogMatchesImageContainerDiv = document.getElementById("dog-matches-image-container");

function getMatches() {
    fetch("/api/matches")
        .then((response) => response.json())
        .then((result) => {
            dogs = result.data;
            createMatchImage(dogs.pop());
            populateDogInfo(dogs);
        });
}

getMatches();

function createMatchImage(dog) {
    dogMatchesNameH1.textContent = dog.name;

    const imageTag = document.createElement("img");
    imageTag.src = dog.image;
    imageTag.id = "dog-matches-image";

    dogMatchesImageContainerDiv.innerHTML = "";
    dogMatchesImageContainerDiv.appendChild(imageTag);
}
function populateDogInfo(dogs){
    const dog = dogs[0]
    dogMatchesNameH1.textContent = dog.name;
    dogMatchesBio.textContent = dog.bio;
    dogMatchesCity.textContent = dog.city;
    dogMatchesStreetAddress.textContent = dog.streetAddress;
}
function setupHammerPanEvents(dogImageTag) {
    const hammertime = new Hammer(dogImageTag);

    hammertime.on('pan', (event) => {
        // Calculate the new position based on the pan movement
        const deltaX = event.deltaX;

        // Apply the transformation to the image
        dogImageTag.style.transform = `translateX(${deltaX}px)`;
    });

    hammertime.on('panend', (event) => {
        if (event.deltaX > 0) {
            console.log("Ended dragging to the right");
            // todo: Handle end of right drag here
        } else {
            console.log("Ended dragging to the left");
            // todo: Handle end of left drag here
        }
        if (dogs.length > 0) {
            createMatchImage(dogs.pop());
        } else {
            getMatches();
        }
    });
}

setupHammerPanEvents(dogMatchesImageContainerDiv)