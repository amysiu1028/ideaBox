# ideaBox

Project: Group project for creating a website with a basic layout, where we will add ideas, delete ideas, favorite ideas, filter ideas, and add a search option for ideas (extensions), and possible optional extensions. More details on iterations below.

Setup instructions:
By EOD on Kick Off Day: complete the following tasks:

As a team, complete the DTR Form
Choose ONE TEAM MEMBER to do the following:

Locally, create a new folder called ideaBox and add the following files to that folder: index.html, main.js, and styles.css. Create an assets folder where your icons will live (You can add them to this folder as you need them.)
cd into the ideaBox directory and run git init to initialize git.
Create an initial commit.
On GitHub, create a new repository. Follow the written instructions on GitHub to add the repo’s remote to your local project, and push your initial commit up to GitHub.
Add all project partners to the repository as contributors. If your repository is set to private, add your project manager as a collaborator as well.
Complete this project submission form to ensure your project manager has the necessary links. Below are instuctions for deploying to GH Pages:
Repo Settings » Pages » Select the main branch as your Source branch » Save. Then, wait up to an hour, hit refresh, and your deployed link should appear at the top of the screen.
If you don’t want to wait, your GH pages URL will follow this format: https://username.github.io/ideaBox/ and replace username with the repo owner’s GH username and ideaBox with your repo’s name (if different). The URL will not work right away - that’s ok!
Then, as a team:

Have all team members clone down the repo.
You’re ready to start iteration 0!

deploy link (gh-pages): https://amysiu1028.github.io/ideaBox/

images or video of the functioning app: included in assets folder 

technologies used: HTML, JS, CSS

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

iteration 2: Deleting ideas
A delete button should be visible on all idea cards now that match the comp above.
When a user clicks the delete button:
that idea should be removed from the data model.
that idea card should be removed from the page.

iteration 3: Favoriting Ideas
A star button should be visible on all idea cards now that match the comp above.
When a user clicks the star button:
the data model should be updated such that you can tell which ideas have been starred.
the star should toggle between orange and white to show the user whether that idea is favorited or not.
orange: favorited
white: not favorited
When an idea is created, it should start not favorited.

iteration 4: filtering ideas
A filter button should be visible on the side bar to match the comp above.
When a user clicks the “Show Starred Ideas” button:
only the favorited ideas should be visible
the text on the button should change to “Show All Ideas”
When the user clicks the “Show All Ideas” button:
all ideas should be visible again
the text on the button should change to “Show Starred Ideas”

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

reflections: 

future features:

other pertinent information:


