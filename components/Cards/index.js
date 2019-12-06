// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const pointOfEntry = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    // console.log(response);
    let change = Object.values(response.data.articles)
    // console.log(change);
    change.forEach( article => {
     article.forEach(paper => {
         console.log(paper);
         const newCard = createCard(paper)
            pointOfEntry.appendChild(newCard);
     })

    });
    
    

  })


function createCard(data){
    //define elements 
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgcontainer = document.createElement("div");
    const img = document.createElement("img");
    const authorsname = document.createElement("span")

    //append Elements 

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgcontainer);
    author.appendChild(authorsname);
    imgcontainer.appendChild(img);

    //set up classes

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgcontainer.classList.add("img-container")

    //text content 

    headline.textContent = data.headline;
    authorsname.textContent = data.authorName;
    img.src = data.authorPhoto;


    return card;

}
