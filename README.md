# 💡 ideaBox

✨ [Have fun!](https://amysiu1028.github.io/ideaBox/) ✨

### 💭 Abstract:
This is a user-friendly app where users can create, save, favorite and delete idea cards. There's an input field for the title and the body. When the user saves an idea, a card is generated lower down on the page with the custom idea. In the header of the card there is an "X" for the delete button and a star icon "☆" to add the card to their favorites. The user can see all the favorited ideas by clicking the "Show Starred Ideas" button. The same button toggles into the "Show All Ideas" and when click will show all of the ideas the user has generated! 

### 💻 Installation instructions:
To clone this repository and use on your local machine:
* Fork this ideaBox repository
* Clone down your new repository to your local machine
* Cd into the repository on your local machine
* Open the repository in your text editor
* You will have access to the HTML, CSS, and JavaScript files

### 📷 Preview of App:
[Live Github Link](https://amysiu1028.github.io/ideaBox/)
<img width="1600" alt="Preview of ideaBox application" src="https://i.imgur.com/kKmkDW9.png">

### 🍎 Context:
We spent a little bit of time all week working on the project. Between Bobby, Amy, and Lex we spent every night working from 7 to 10 at least, and also worked a good amount in the mornings as well. Lunches were sacred but thanks to the extra work time we were allotted in the lessons this week, we were able to work at a fast pace. 

### 🧠 Contributors:
- [Lex](https://github.com/Jesuitman)
- [Amy](https://github.com/amysiu1028)
- [Bobby](https://github.com/rsteckline)

### 🖇️ Learning Goals:
Gain an understanding of how to write clean HTML and CSS to match a provided comp
Understand how a developer might separate the data model from the DOM model
Incorporate & iterate over arrays in order to filter what is being displayed
Craft code with clean style, using small functions that show trends toward DRYness, SRP, and purity

### 🎆 Wins && 🔥 Challenges:
Each one of us had our own wins in addition to collaborative wins!
Lex: The biggest win i felt was when I got the functionality working for the show all ideas button following the show starred ideas button. 
Bobby: Wins - completing the project on time with a day to spare. Having our the application look like the comp! Building the HTML. Challenges - Getting stuck on the logic of the project at times, example: functionality when toggling the pages.





## 📝 Observations && ❓ Questions:
Observations 
Lex: This project was difficult but very fulfilling. the saying that you spend most of your time as a programmer confused and then get it and feel amazing definitely held true for this project. it featured very unique struggles but very satisfying wins. 
Bobby: I am happy with how the project went and am very thankful for my team, they are incredibly smart! I learned a lot and was able to apply a lot of things learned so far. 

Github Questions
Lex: the major questions I had about github was just the workflow taht Nik helped to clarify, thank you for that Nik!
Bobby: Thank you for the clarification, Nik.

Terminal Questions
Lex: The big questions I have about terminal have been pretty successfully answered by Bobby, and it was all about git workflow terminal commands

Coding Questions
Lex: I would love to find out how I could have shrunk down the show cards function, it's kind of a massive beast and I couldnt think of a different way to build it based on needing it to be dynamic with the DOM.
Bobby: Would also love to know! 

# 💭 Pseudocode: 
iterations:

iteration 0: Basic Layout
When the page loads, we should see:
a title, two inputs, and a button
a page layout and colors that match the comp above
When a user clicks “Save,” a new idea object should be created and logged to the console. The idea object should have:
title
body
id
Every time a new idea is created, it should be added to a list that represents your data model.

create a function that creates an object based on three key value pairs, title and body. id can be saved as well based on (id = date.now())
could make another function that will push that object into an array
the array should display through a grid in the body of the html
maybe all of the header could be have the input information, body would only host the array? 

iteration 1: Adding ideas
When a user fills out both inputs and clicks “Save”:
a new idea should be added to the data model.
a card should appear on the screen to match the comp above. The card should show the title and body the user entered into the form.
the form inputs should clear out to be ready for the next idea.
When a user tries to click “Save” with an empty Title or Body input field:
the “Save” button is disabled and unable to be clicked. It’s clear to the user when the button is disabled because it is a lighter color and the cursor is not a pointer when they hover over it.
a new idea card should not appear.
Notes:
You can choose what the layout looks like if more then 3 cards are added.
You can choose how to handle titles and bodies that are longer than what fits on the card. There are lots of ways to handle this.

create an if statement that says it wont save the idea if the title or body is undefined. 
build in functiuonality that disallows identical input for title and body of ideas

iteration 2: Deleting ideas
A delete button should be visible on all idea cards now that match the comp above.
When a user clicks the delete button:
that idea should be removed from the data model.
that idea card should be removed from the page.

create a css element that puts a delete button onto the idea cards. 
event listener to listen for a click

iteration 3: Favoriting Ideas
A star button should be visible on all idea cards now that match the comp above.
When a user clicks the star button:
the data model should be updated such that you can tell which ideas have been starred.
the star should toggle between orange and white to show the user whether that idea is favorited or not.
orange: favorited
white: not favorited
When an idea is created, it should start not favorited.

star button on each idea
toggle css method to flip between white and orange
if toggled idea, it pushes id into a new array
manipulate DOM to listen for click,
favorite ideas could be pulled from idea array to prevent duplicate idea showing up?

iteration 4: filtering ideas
A filter button should be visible on the side bar to match the comp above.
When a user clicks the “Show Starred Ideas” button:
only the favorited ideas should be visible
the text on the button should change to “Show All Ideas”
When the user clicks the “Show All Ideas” button:
all ideas should be visible again
the text on the button should change to “Show Starred Ideas”

show starred ideas button could rearrange displayed body to put the favorites array before the ideas array

iteration 5: Searching Ideas (extensions)
A search bar should be visible on the page to match the comp above.
Note: The search icon is not a button - this is a live search that occurs as the user types.
As a user types into the search input, the cards should start filtering to show only matches (no click needed). The user should see only cards that include the letter(s) in either the body or title.
As a user deletes letters in the search bar, cards should keep filtering correctly.
If a user deletes all the way back to a blank input, all cards should be visible.

other optional extensions: 
Here’s a list of possible extensions to implement - but ONLY IF your team has completed all the previous iterations AND have cleaned up your code to make it DRYer and more readable.

You are welcome to add your own extensions. Be sure they are thoughtful in terms of UX/UI, and that they do not break any prior functionality.

Options:

Only allow unique ideas to be added.
When a user tries to delete an idea, have them confirm that they really do want to delete it.
Implement localStorage so the ideas persist on page load.
Create a “Recently Deleted” filter that allows users to see their previously deleted ideas.