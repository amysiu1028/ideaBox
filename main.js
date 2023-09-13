 //querySelectors:
var saveButton = document.querySelector('.save-button');// var userBodyInput = document.getElementById('input-body');
var otherSaveButton = document.querySelector('.other-save-button')
var inputTitle = document.getElementById("input-title")
var inputBody = document.getElementById("input-body")
var displayCards = document.querySelector('.card-grid')

//Variables: 
var ideasArray = []
var FavoriteIdeas = []
var displayAllIdeas = []
var id = Date.now()

//addEventListeners:
// window.addEventListener('load',);
saveButton.addEventListener("click",function(e){
    e.preventDefault()
    
    var title = inputTitle.value
    var body = inputBody.value

    if (title && body){
        for (var i =0;i<ideasArray.length;i++){
            // If a similar idea already exists, show an alert
            if (ideasArray[i].title === title && ideasArray[i].body === body) {
            alert("A similar idea already exists, maybe try something else?")
        inputTitle.value = ""
        inputBody.value = ""
        return //exits function
        }
    }
    createNewIdea(title,body)
    inputTitle.value = ""
    inputBody.value = ""
    }
    showIdeas()
})

//addEventHandlers:
function createNewIdea(title,body){
    var newIdea = {
        title:title,
        body:body,
        id: id,
        favorited: false,
    }
    ideasArray.push(newIdea)
}

function showIdeas(){
    displayCards.innerHTML= "" //clearing DOM: the displayCard container at card-grid

    for (var i=0; i<ideasArray.length;i++){
        var idea = ideasArray[i] //gets each index which is an object

        var card = document.createElement("div")
        card.classList.add("card")

        var cardBanner = document.createElement("div")
        cardBanner.classList.add("card-banner")

        var starButton = document.createElement("button")
        starButton.classList.add("star-button")
        starButton.innerHTML = '<img src="/assets/star.svg" alt="Star Icon">'; 

        var removeButton = document.createElement("button")
        removeButton.classList.add("remove-button")
        removeButton.innerHTML = '<img src="/assets/delete.svg" alt="Delete Icon">'; 

        cardBanner.appendChild(starButton)
        cardBanner.appendChild(removeButton)

        var h2 = document.createElement("h2")
        h2.textContent = idea.title //sets the text content of <h2> element to the object's title in ideaArray[i]
        h2.classList.add("card-title")

        var p = document.createElement("p")
        p.textContent = idea.body // sets the text content of the <p> element to the value of idea.title
        p.classList.add("card-body")

        card.appendChild(cardBanner)
        card.appendChild(h2)
        card.appendChild(p)

        displayCards.appendChild(card)
        console.log(displayCards)
    }
    hideCard(displayCards);
}

function hideCard(displayCards) {
    if (ideasArray.length > 0){
        displayCards.classList.remove("hidden")
    } else {
        displayCards.classList.add("hidden")
    } 
}
//hovering over: mouseover, mouseleave

saveButton.addEventListener("mouseover", function() {
    var title = inputTitle.value
    var body = inputBody.value
    if (!title && !body) {
        saveButton.classList.add("hidden")
        otherSaveButton.classList.toggle("hidden")
        saveButton.style.cursor = 'not-allowed';
    } 
})

saveButton.addEventListener("mouseout", function() {
    saveButton.classList.remove("hidden");
    otherSaveButton.classList.add("hidden");
    saveButton.style.cursor = 'pointer';
})


//iteration 2: starting! BUt not sure what to do.... 
//when user clicks delete button
var removeButton = document.querySelector('.remove-button')

//add event
removeButton.addEventListener('click', deleteCard)
//function should delete card user clicks card
function deleteCard(ideasArray) {
    for (var i=0; i<ideasArray.length;i++) {
        if ('click') {
            ideasArray.splice(i)
        }
    }
    return ideasArray
}