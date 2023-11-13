# Code Quiz

### Description
The goal of this project is to make a timed multiple-choice quiz. The quiz must have a clean, polished, and resposive user interface. The quiz should also store scores to be shown on a leaderboard at the end of the quiz. Each button should have a function such as the start button starting the timer nd showing the questions or the questions buttons telling you if the answer was right or wrong and if wrong subtracts time from the timer. It should have an initials input to be submitted and then shown on the leader board and the leader board should have a clear button that will remove all scores.

## The process


### What i did
* Created an html document that has all the sections of the quiz and hid all but the start section in CSS
* Linked all the ids and classes to the javascript 
* Created an array for all the questions
* Created a timer using set interval and an if statement that will make the final screen appear when the timer is finished or all the questions are answered
* Made a function that makes the questions from the array appear as text on the page 
* Created a event function that checks the answers using an if statement that sees if the correct answer in the array is equal to the value selected
* Created paragraph elements that will apprear when an answer is selected that will output Correct or Wrong
* Made an if that checks what question the user is on and if they arent on the last one it will add to the question count to display the next question
* Created a high score function that will add the inputed intials and the score received to an array and a li element would be created for each tiem in that array using for loop the items will also be put in local storage using set item
* Created a function that will pull the items from local storage using .getitem
* Added an event listener to each button and linked them to the functions so the functions would work on a click of the mouse

![The complete version of the code](https://github.com/nathan26036/code-quiz/blob/main/assets/Images/java.PNG)
![The Deployed image of the starting page](https://github.com/nathan26036/code-quiz/blob/main/assets/Images/starting-screen.PNG)
![The Deployed image of the questions](https://github.com/nathan26036/code-quiz/blob/main/assets/Images/questions.PNG)
![The Deployed image of the scoreboard](https://github.com/nathan26036/code-quiz/blob/main/assets/Images/score-board.PNG)

## Installation 
The final code deployed can be found at https://nathan26036.github.io/code-quiz/

## Resources
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
* https://stackoverflow.com/questions/68515490/how-do-i-make-textboxs-text-disappear-after-submit-button-is-clicked
* https://stackoverflow.com/questions/10710674/how-to-remove-and-clear-all-localstorage-data
