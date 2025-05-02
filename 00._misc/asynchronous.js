//javascript is single-threaded
// Javascript is single-threaded, everything runs on the main-thread

// database interaction, file handling, fetch / HTTP requests (network)

// Solution 1: callback functions

// callback hell, pyramid of doom

// Solution 2: promises (syntactic sugar for callbacks)

// pending, fulfilled
// resolved / rejected
/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Everything went well");
        reject("Something went wrong");
    }, 2000);
})
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
*/
import * as http from "node:http";

function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                resolve("something good")
            }catch(e){
                reject(e);
            }
        }, 3000)
    })
}
myPromise()
    .then((result) => console.log(result))
    .catch((error) => console.log(error));



function myFetch(url, method = 'GET', headers = {}) {
    return new Promise((resolve, reject) => {
        try{
            switch (method) {
                case 'GET':
                    const res = http.get(url, {'headers': headers});
                    resolve(res);
                    break;
            }
        }   catch(e){
            reject(e);
        }
    })
}
myFetch("http://google.com",'GET', {})
    .then((result) => result.json())
    .then((result) => {console.log(result)})
.catch((error) => console.log(error));