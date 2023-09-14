// Query Selectors:
var saveButton = document.querySelector('.save-button');
var inputTitle = document.getElementById("input-title");
var inputBody = document.getElementById("input-body");
var displayCards = document.querySelector('.card-grid');
var bottomSection = document.querySelector('.bottom-section');

// Variables:
var ideasArray = [];
var id = Date.now();

// Functions:

function createNewIdea(title, body) {
    var newIdea = {
        title: title,
        body: body,
        id: id,
        favorited: false,
    };
    ideasArray.push(newIdea);
}

function showIdeas() {
    displayCards.innerHTML = "";

    ideasArray.forEach(function (idea) {
        var card = document.createElement("div");
        card.classList.add("card");

        var cardBanner = document.createElement("div");
        cardBanner.classList.add("card-banner");

        var starButton = document.createElement("button");
        starButton.classList.add("star-button");

        var starImg = document.createElement("img");
        starImg.alt = "Star Icon";

        // Set the appropriate class and source for the star image
        if (idea.favorited) {
            starImg.classList.add("other-star"); // Orange star class
            starImg.src = "assets/star-active.svg";
        } else {
            starImg.classList.add("star"); // White star class
            starImg.src = "assets/star.svg";
        }

        starButton.appendChild(starImg);

        starButton.addEventListener("click", function () {
            idea.favorited = !idea.favorited;
            if (idea.favorited) {
                starImg.classList.add("other-star");
                starImg.src = "assets/star-active.svg";
            } else {
                starImg.classList.remove("other-star");
                starImg.src = "assets/star.svg";
            }
        });

        var removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.innerHTML = '<img class="remove-img" src="assets/delete.svg" alt="Delete Icon">';

        cardBanner.appendChild(starButton);
        cardBanner.appendChild(removeButton);

        var h2 = document.createElement("h2");
        h2.textContent = idea.title;
        h2.classList.add("card-title");

        var p = document.createElement("p");
        p.textContent = idea.body;
        p.classList.add("card-body");

        card.appendChild(cardBanner);
        card.appendChild(h2);
        card.appendChild(p);

        displayCards.appendChild(card);
    });

    hideCard(displayCards);
}

function hideCard(displayCards) {
    if (ideasArray.length > 0) {
        displayCards.classList.remove("hidden");
    } else {
        displayCards.classList.add("hidden");
    }
}

// Event Listeners:

saveButton.addEventListener("mouseenter", function () {
    var title = inputTitle.value;
    var body = inputBody.value;
    if (!title && !body) {
        saveButton.style.background = '#A8AAD2';
        saveButton.style.cursor = 'not-allowed';
    } else {
        saveButton.style.background = '#1F1F3C';
        saveButton.style.cursor = 'pointer';
    }
});

saveButton.addEventListener("mouseout", function () {
    saveButton.style.background = '#1F1F3C';
});

saveButton.addEventListener("click", function (e) {
    e.preventDefault();

    var title = inputTitle.value;
    var body = inputBody.value;

    if (title && body) {
        for (var i = 0; i < ideasArray.length; i++) {
            if (ideasArray[i].title === title && ideasArray[i].body === body) {
                alert("A similar idea already exists, maybe try something else?");
                inputTitle.value = "";
                inputBody.value = "";
                return;
            }
        }
        createNewIdea(title, body);
        inputTitle.value = "";
        inputBody.value = "";
    }
    showIdeas();
});

bottomSection.addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-img')) {
        var index = -1;
        var cards = document.querySelectorAll('.card');
        var card = event.target.closest('.card');

        for (var i = 0; i < cards.length; i++) {
            if (cards[i] === card) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            ideasArray.splice(index, 1);
            card.remove();
        }
    }
});
