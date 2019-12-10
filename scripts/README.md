Small exercises
Create a fetchJoke function
Move the fetch().then().then()... call to this function

Try calling your fetchJoke function from the console and make sure it keeps adding jokes to the page.

Create a container for displaying the jokes.
Option 1: in your HTML, create a new element with class js-joke-container
Create a variable named jokeContainer and call document.querySelector() to get a reference to your element.

Option 2: In your JavaScript file, create a function that creates the container element and calls .appendChild() to add it to the body.
Make sure to call this function in your index.js before you call fetchJoke

In either case...
Update the rendersJokeToPage function so that it clears out the container and then appends the joke element to the container

Create a "joke" button
Option 1: in your HTML, create a <button> element with class js-joke-button
Create a variable named jokeButton and call document.querySelector() to get a reference to your element.

Option 2: In your JavaScript file, create a function that creates the button element and appends it to the body
In either case...
Call addEventListener so that on "click", the browser calls your fetchJoke function

Medium exercises
Create a fetchMultipleJokes function
This function should call your fetchJoke function 5 times (adding all 5 jokes without clearing the container).

Note, you will need to update your rendersJokeToPage function. Consider creating a separate clearJokeContainer function...

Create a fetchMultiple button
Create a button and event listeners for a button that will run the fetchMultipleJokes function when it is clicked.

Large exercises
Display a list of categories
This address returns an array of category names: https://api.chucknorris.io/jokes/categories

For each item in the list, add the category name as list items to an unordered list.

Display the unordered list on the page.

Add a click handler for each category
When the user clicks one of the list items, it should save the category name to a variable.

Display the current category on the page in an h2 element before/above the list of categories.

Use the category choice
After the user chooses a category, clear out any existing jokes.

When they click a button to get one joke or multiple jokes, use the category name as part of the address.

The format is: https://api.chucknorris.io/jokes/random?category={category}

For example, for jokes about food, the category is "food" and the address is https://api.chucknorris.io/jokes/random?category=food