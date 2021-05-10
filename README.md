1. Declared an empty array, value_Array that'll store in the ID of the letter the user clicks, count and score.

2. Another array called position, that stores each character's ID of the name in the word search

3. When a user clicks on a letter on the Word Search, that letter should only have 1 char, declared an ID, and assigned it with e.target.id.

4. Line 66, a function listing 2 parameters (value_id and the event itself) declared a boolean, set it to false and an item_index to 0.

5. An if statement that checks if value_Array is empty, if it's empty, it'll push the character's id to that array, and changes the colour of that char to red, and returns that value_Array

6. A for-loop that'll go through the value_Array, checking if the char a used clicked is already in an array. So basically, it looks for duplicates. If it finds any it'll remove it from an array and changes its colour to black. A user click C, C will be added to an array, a user clicks C again, then this function removes it from an array.

7. If the char is not in an array, line 86-93 pushes the char to an array and changes its colour to red. Then returns the value_Array.

8. Line 16, set str_value to an array returned by addOrRemoveValue function

9. Line 40, A function that checks if the word selected by the player is found in the position array. Need to sort the user input and position array, so that if a player starts the word GOALS, with an S, it should find it in a position array

10. Inside this function, declared string_found to false, index_found to 0 and sorted_value. If the value is an array, we sort that value. Now, a for loop that sorts each word in the position array. Now we check if the length of the word selected by the player equals a word in an array. Set string_found to true, and also take indexOf that word.

11. Then returns an array of string_found and indexOf.

12. Back to line 19, if the first index of an array is true, (So if we found a matching word), we need to scratch that word from the UNORDERED LIST in GUI. Get the word from the GUI using getElementById, assigned it to elementFound. Scratch it using strike tags.

13. We also need to remove that word from a position array, if it has already been found, so a player cannot select it more than once. And also clear user input so a user starts a new word. Increment count by 1, increment score by 400 and after the word has been found, set the score to +400.

14. If the count is 5, meaning all words has been scratched, then set the score to 2000 and enables submit button. Once a user clicks on submit, pops up an alert (“You've completed the crossword”).
