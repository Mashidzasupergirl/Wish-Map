const wishList = [
    {
        id: "dfg",
        wish: "Полететь на луну",
        done: true,
        sphereOfLife: 'не выбрана'
    },
    {
        id: "abc",
        wish: "Позвонить папе",
        done: false,
        sphereOfLife: 'семья'
    },
    {
        id: "qwe",
        wish: "Отложить деньги на отпуск",
        done: false,
        sphereOfLife: 'финансы'
    },
]



// Translate Array<Object> to Array<String>
const getWishStrings = () => {
    const stringArr = [];
    let i = 0;
    while (i < wishList.length) {
        const currentFactObject = wishList[i];
        stringArr.push(currentFactObject.wish);
        i++;
    }    
    return stringArr;
}

const wishString = getWishStrings();
console.log(wishString)



// // Function: find index by ID
// const findIndexById = (id) => {
//     let i = 0;
//     while (i<wishList.length ){
//                 if (wishList[i].id === id)  {
//                     return i
//                 }
//                 i++  
//             }
// }


// // Like fact by id


// const likeFact = (id) => {
//     const indexById = findIndexById(id)
         
//     const previousValue = randomFacts[indexById].done;
//     if (randomFacts[indexById]){
//         randomFacts[indexById].done = !previousValue
//     }

//     // Return new value in case we need it
//     return !previousValue;
// }



// const getLikedFacts = () => {
//     const likedFactAray = []

//     let i=0
//     while (i < randomFacts.length){
//     if (randomFacts[i].done === true) {
//         likedFactAray.push(randomFacts[i])
//     }
//     i++
//     }
//     return likedFactAray
// }

// const likedFacts = getLikedFacts()

// // Return high sphereOfLife facts


// const isHighScore = (fact) => {
//         if (fact.sphereOfLife > 7.5) {
//         return true;
//     }
//     return false
// }

// const getHighScoreFacts = () => {
//     const hightScoreFactsArray = []
//     let i=0
//     while (i<randomFacts.length){
//         if (isHighScore(randomFacts[i])) {
//             hightScoreFactsArray.push(randomFacts[i])
//         }
//         i++
//     }
   
//     return hightScoreFactsArray;
// }
// // Get Random Fact
// const getRandomInt = (max) => {
//     // Got from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//     return Math.floor(Math.random() * max);
// }


// const getRandomFact =() => {
//     return randomFacts[getRandomInt(randomFacts.length-1)]
// }

// // Print Liked Fact String

// const printLikedFacts = () => {
//     let i = 0;
//     while (i < randomFacts.length) {
//         if (randomFacts.done) {
//             console.log(randomFacts[i].fact);
//         }
//         i++;
//     }
// }

// // Translate facts array into an object with keys like id

// const transformArrayToObject = () => {
//     const factObject = {}
//     let i=0;
//     while (i<randomFacts.length) {
//         factObject[randomFacts[i].id]  = randomFacts[i] 
//         i++ 
//     }   

//     return factObject;
// }

// const list = document.getElementById("list")

// const createListItem = (factObject) => {
//     const divForFact = document.createElement("div")
//     divForFact.classList.add("fact")
//     divForFact.id = `movie-item-id-${factObject.id}`
//     const textOfFact = document.createElement("p")
//     const heartOfFact = document.createElement("label")
//     textOfFact.innerHTML = `${factObject.fact} (sphereOfLife: ${factObject.sphereOfLife})` 
//     heartOfFact.innerHTML = factObject.done ? '❤' : '🤍';
//     divForFact.appendChild(textOfFact)
//     divForFact.appendChild(heartOfFact)
//     list.appendChild(divForFact)

//     heartOfFact.addEventListener('click', (event) => {
//         const likedFact = document.querySelector(`#movie-item-id-${factObject.id} label`)
//         const newValue = likeFact(factObject.id)
//         likedFact.innerHTML = newValue ? '❤' : '🤍';
//     })
// } 

// // Function to mix 

// function shuffle(array) {
//     var currentIndex = array.length,  randomIndex;
  
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
  
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
//       return array;
//   }
  
// // All facts


// function createAllFacts() {
//     shuffle(randomFacts);
//     let i = 0;
//     list.innerHTML = ""
//     while (i<randomFacts.length) {
//         createListItem(randomFacts[i])
//         i++
//     }
// }

// createAllFacts()

// const buttonAllFacts = document.getElementById("all-facts")
// buttonAllFacts.addEventListener('click', (event) => { 
//     createAllFacts()
// })

// // Only one fact
// const buttonOneFact = document.getElementById("one-fact")
// buttonOneFact.addEventListener('click', (event) => {
//     list.innerHTML = ""
//     createListItem(getRandomFact())
// })

// // Only done facts

// const buttonLikedFacts = document.getElementById("done-facts")
// buttonLikedFacts.addEventListener('click', (event) => {
//     list.innerHTML = ""
//     let i=0
//     while (i < randomFacts.length){
//     if (randomFacts[i].done === true) {
//         createListItem(randomFacts[i])
//     }
//     i++
//     }
// })

// // Score more then 80

// const buttonScoreMore80 = document.getElementById("sphereOfLife-more-80")
// buttonScoreMore80.addEventListener('click', (event) => {
//     list.innerHTML = ""
//     const highScoreFacts = getHighScoreFacts();
//     let i=0
//     while (i<highScoreFacts.length){
//     createListItem(highScoreFacts[i])
//         i++
//        }   
// })

// // Sort by sphereOfLife;

// const buttonSortByScore = document.getElementById("sort-by-sphereOfLife")
// buttonSortByScore.addEventListener('click', (event) => {
//     list.innerHTML = ""
//     randomFacts.sort(function(a,b){
//         if (a.sphereOfLife < b.sphereOfLife) {
//             return 1;
//           }
//           if (a.sphereOfLife > b.sphereOfLife) {
//             return -1;
//           }
//              return 0;
//       })
//            let i=0
//       while (i<randomFacts.length){
//             createListItem(randomFacts[i])
//             i++
//       }
// })



// const saveButton = document.getElementById("save-button")
// window.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         handleSaveButtonClick()
// }
// })

// saveButton.addEventListener("click", () => {
//     handleSaveButtonClick()
// }) 


// const handleSaveButtonClick = () => {
//     const inputDivFilm = document.getElementById("input-area-for-text")
//     const inputDataFilm = inputDivFilm.value
//     inputDivFilm.value = ""

//     const inputDivScore = document.getElementById("input-area-for-sphereOfLife")
//     const inputDataScore = inputDivScore.value
//     inputDivScore.value = ""

//     if (inputDataFilm != ""  && inputDataScore != "") {

//     pushFilmToArray(inputDataFilm, inputDataScore)

//     let i = 0;
//     list.innerHTML = ""
//     while (i<randomFacts.length) {
//         createListItem(randomFacts[i])
//         i++
//     }
//     }  
// }

// const pushFilmToArray = (film, sphereOfLife) => {
//     // Generator of random letters

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let randomIndex1 = Math.floor(Math.random() * alphabet.length);
// let randomIndex2 = Math.floor(Math.random() * alphabet.length)
// let randomIndex3 = Math.floor(Math.random() * alphabet.length)

// let randomLetter1 = alphabet[randomIndex1];
// let randomLetter2 = alphabet[randomIndex2];
// let randomLetter3 = alphabet[randomIndex3];


// let threeLetters = randomLetter1 + randomLetter2 + randomLetter3

//     randomFacts.push({
//         id: threeLetters,
//         fact: film,
//         done: false,
//         sphereOfLife: sphereOfLife
// })
// }

// // Search function
//  const inputSearch = document.getElementById("search-input")
//  const searchButton = document.getElementById("search-button")
//   searchButton.addEventListener("click", () =>
//  {  
//      console.log(inputSearch.value)
//      let dataFromInput = inputSearch.value
//      searchFunction(dataFromInput)
//      inputSearch.value = ""
//  })   
//  function searchFunction(dataFromInput) {
//     let i = 0;
//     list.innerHTML = ""
//     const filterArray = []
//     while (i<randomFacts.length) {
//     if (dataFromInput.toLowerCase() === randomFacts[i].fact.substring(0, dataFromInput.length).toLowerCase()){
//         filterArray.push(randomFacts[i])
//     }
//     i++
//      }
//      console.log(filterArray)
//      let n=0
//      while (n<filterArray.length){
//      createListItem(filterArray[n])
//          n++
//         }   
// }
// window.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         console.log(inputSearch.value)
//         let dataFromInput = inputSearch.value
//         searchFunction(dataFromInput)
//         inputSearch.value = "" }
//     })