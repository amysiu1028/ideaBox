//querySelectors:
var saveButton = document.querySelector('.save-button');
var inputTitle = document.getElementById('input-title');
var inputBody = document.getElementById('input-body');
var displayIdeasHere = document.querySelector('.card-grid')
//Variables:
var ideas = []

// var id = Date.now()

//addEventListeners:
// window.addEventListener('load',);
saveButton.addEventListener('click', function(event) { //invoke after click
    event.preventDefault();
    var title = inputTitle.value; //capture the user value for title when button is clicked
    var body = inputBody.value;
    var newIdea = createNewIdea(title,body);
    showNewIdea(title,body);
    // removeInputs(title,body);
});

//addEventHandlers:
var ideasArray = []
var FavoriteIdeas = []

function createNewIdea(title,body){
    var newIdea = {
        title:title,
        body:body,
        id:Date.now()
    }
    ideasArray.push(newIdea)
    inputTitle.value = ""
    inputBody.value = ""
}

function showNewIdea(title,body) {
    displayIdeasHere.innerHTML = `
    <article class="article">
        <header class="star" ></header>
        <h2>${title}</h2>
        <p>${body}</p>
    </article>`;
    // console.log(displayIdeasHere, "displayIdeas")
    console.log(title)
    console.log(body)
    // removeInputs(title,body);
}

// function removeInputs(title,body) {
//     title.classList.add('hidden');
//     body.classList.add('hidden');
// }
//1. function should display card and hide the user input.values title and body
//2. add condition, if title.value = "" and body.value = ""
//Disable Save button.... should hide the original button and other one should 
//appear the other one, and no card should appear


//iteration 1:
// When a user fills out both inputs and clicks “Save”: a new idea should be added to the data model. => function addNewItem(newIdea)
// a card should appear on the screen to match the comp above. The card should show the title and body the user entered into the form.
// the form inputs should clear out to be ready for the next idea.
// When a user tries to click “Save” with an empty Title or Body input field:
// the “Save” button is disabled and unable to be clicked. It’s clear to the user when the button is disabled because it is a lighter color and the cursor is not a pointer when they hover over it.
// a new idea card should not appear.
// Notes:
// You can choose what the layout looks like if more then 3 cards are added.
// You can choose how to handle titles and bodies that are longer than what fits on the card. There are lots of ways to handle this.

//1. function should display card and hide the user input.values title and body
//2. add condition, if title.value = "" and body.value = ""
//Disable Save button.... should hide the original button and other one should 
//appear the other one, and no card should appear

//iteration 0: Basic Layout
// When the page loads, we should see: a title, two inputs, and a button, a page layout and colors that match the comp above. When a user clicks "Save," a new idea object should be created and logged to the console. The idea object should have: title body id. Every time a new idea is created, it should be added to a list that represents your data model.

// 1. query select
// 1.5. object includes title, body, id
// 2. when clicked = new object should be created and logged to console - maybe array stores object??
// 3. Every time new idea created, save button clicked, should add to you data model array.

//query select:
//save button, add event listener 'click', 
//title user input so we can access user input
//body user input so we can access user input in event listener

//should create event listeners and include in event listener:
//that once clicked, will access user input.value for title and body and pass it in object.
//function should create an object with title, body and id, using title and body from userinput passing through
//function should add new idea to data model (variable), everytime event occurs
  //---for this should have a global variable = [] as data model
//function should show newIdea you created!

//for function showNewIdea() pseudocode
////add HTML to JS
    //find where you want to add the section/article
    //query Select that
    //displayIdeasHere.document.querySelector('.bottom-section')
    //then to change this you want to innerText.. or HTML?