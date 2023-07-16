// Button:

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var j = 0; j < bubblyButtons.length; j++) {
    bubblyButtons[j].addEventListener('click', animateButton, false);
  }


// Cards:

const test1Conteiner = document.getElementById('test-1-conteiner')

let i=0




while(i<4) {

const card = document.createElement('div')
card.className = "cards"
card.id = `card-${i}`



card.innerHTML=` 
   
<img src=".//pics-for-test-1/test-pic-${i+1}.JPG" alt="">
<div id="answers-conteiner">
    <div id="pic-${i}-a-conteiner">
        <input type="radio" id="pic-${i}-a" name="pic-${i}" value="a">
        <label for="pic-${i}-a">a</label>          
    </div>
     <div id="pic-${i}-b-conteiner">
        <input type="radio" id="pic-${i}-b" name="pic-${i}"value="b">
        <label for="pic-${i}-b">b</label>          
    </div>
    <div id="pic-${i}-c-conteiner">
        <input type="radio" id="pic-${i}-c" name="pic-${i}"value="c">
        <label for="pic-${i}-c">c</label>          
    </div>
</div>
`
i++

test1Conteiner.appendChild(card)
}

const page = document.getElementById('page-conteiner-test-1')
const button = document.createElement('div')
button.className="button-body"
button.innerHTML=`<button class="bubbly-button">Film for today 🤗</button>`
page.appendChild(button)







const answers = [
    'a',
    'c',
    'b',
    'c'
]



const buttonOneFact = document.getElementById("one-fact")
button.addEventListener('click', (event) => {
 
  list.innerHTML = ""
  createListItem(getRandomFact())

})

const randomFacts = [
  {
      id: "dfg",
      fact: "Cruella",
      liked: true,
      score: 7.3
  },
  {
      id: "abc",
      fact: "The Trial of the Chicago 7",
      liked: false,
      score: 7.6
  },
  {
      id: "qwe",
      fact: "Titanic",
      liked: false,
      score: 8.4
  },
  {
      id: "rty",
      fact: "Shutter Island",
      liked: false,
      score: 8.5
  },
  {
      id: "uio",
      fact: "The Hottie & the Nottie",
      liked: true,
      score: 2.8
  },
  {
      id: "asd",
      fact: "A Quiet Place Part II",
      liked: true,
      score: 6.8,
  },
  {
      id: "fgh",
      fact: "Sen to Chihiro no kamikakushi",
      liked: false,
      score: 8.4
  },
]



// Translate Array<Object> to Array<String>
const getFactStrings = () => {
  const stringArr = [];

  let i = 0;
  while (i < randomFacts.length) {
      const currentFactObject = randomFacts[i];

      stringArr.push(currentFactObject.fact);

      i++;
  }    

  return stringArr;
}

const factString = getFactStrings();

// Function: find index by ID
const findIndexById = (id) => {
  let i = 0;
  while (i<randomFacts.length ){
              if (randomFacts[i].id === id)  {
                  return i
              }
              i++  
          }
}


// Like fact by id


const likeFact = (id) => {
  const indexById = findIndexById(id)
       
  const previousValue = randomFacts[indexById].liked;
  if (randomFacts[indexById]){
      randomFacts[indexById].liked = !previousValue
  }

  // Return new value in case we need it
  return !previousValue;
}



const getLikedFacts = () => {
  const likedFactAray = []

  let i=0
  while (i < randomFacts.length){
  if (randomFacts[i].liked === true) {
      likedFactAray.push(randomFacts[i])
  }
  i++
  }
  return likedFactAray
}

const likedFacts = getLikedFacts()

// Return high score facts


const isHighScore = (fact) => {
      if (fact.score > 7.5) {
      return true;
  }
  return false
}

const getHighScoreFacts = () => {
  const hightScoreFactsArray = []
  let i=0
  while (i<randomFacts.length){
      if (isHighScore(randomFacts[i])) {
          hightScoreFactsArray.push(randomFacts[i])
      }
      i++
  }
 
  return hightScoreFactsArray;
}
// Get Random Fact
const getRandomInt = (max) => {
  // Got from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * max);
}


const getRandomFact =() => {
  return randomFacts[getRandomInt(randomFacts.length-1)]
}

// Print Liked Fact String

const printLikedFacts = () => {
  let i = 0;
  while (i < randomFacts.length) {
      if (randomFacts.liked) {
          console.log(randomFacts[i].fact);
      }
      i++;
  }
}

// Translate facts array into an object with keys like id

const transformArrayToObject = () => {
  const factObject = {}
  let i=0;
  while (i<randomFacts.length) {
      factObject[randomFacts[i].id]  = randomFacts[i] 
      i++ 
  }   

  return factObject;
}

const list = document.getElementById("list")

const createListItem = (factObject) => {
  const divForFact = document.createElement("div")
  divForFact.classList.add("fact")
  divForFact.id = `movie-item-id-${factObject.id}`
  const textOfFact = document.createElement("p")
  const heartOfFact = document.createElement("label")
  textOfFact.innerHTML = `${factObject.fact} (score: ${factObject.score})` 
  heartOfFact.innerHTML = factObject.liked ? '❤' : '🤍';
  divForFact.appendChild(textOfFact)
  divForFact.appendChild(heartOfFact)
  list.appendChild(divForFact)

  heartOfFact.addEventListener('click', (event) => {
      const likedFact = document.querySelector(`#movie-item-id-${factObject.id} label`)
      const newValue = likeFact(factObject.id)
      likedFact.innerHTML = newValue ? '❤' : '🤍';
  })
} 









  

