# Application Goal

This application is designed to accompany a series of learning materials that are designed to teach programming concepts to inexperienced / no experience developers.

The coding concepts are all taught on a chess board, which is a grid of 64 squares (8 x 8) with the X axis being denoted by letters (left to right) and the Y axis by numbers (top to bottom).

## User Stories

### Epic - Collect the Colour game

By the end of this epic the game board will be initialised with colours and the user will have the ability to enter commands to move their character around the board collecting the colours.

1. ~~Create a UI to show the game board~~
2. ~~With three varied colours draw 18 circles onto the game board (6 of each colour) in predetermined locations~~
3. ~~Add a refresh button to get a new game~~
4. ~~Place a character at the starting point of the board when the game loads (A1)~~
5. ~~Provide UI controls that can be used to move the character in each of the four directions~~
6. Animate the actions the user has entered by moving the character
    * ~~When the forward button is pressed the character moves forward~~
    * When the back button is pressed the character moves backwards
    * When the left button is pressed the character moves left
    * When the right button is pressed the character moves right
7. Communicate with the user which colour to collect
8. When the character crosses the correct colour then store it as collected
9. Once a colour is collected remove it from the game board
10. When all colours are collected congratulate the user for completing the game
    * The user would like to know how many moves it took to complete the game
    * Offer the user the ability to play again
11. Add the ability for moves to be recorded, then replay the moves once the user hits stop
    * The steps should be replayed at a rate of 0.5 seconds per stored move
12. If the character leaves the board reset the character to the start point and inform the user the character left the board
13. Indicate on the game board where the user has previously been.

### Epic - Introduce a movement language

1. Create a UI control where the user can enter commands to control the movement of the character
2. Implement our movement language consisting of 4 functions. Forward(); Back(); Left(); Right();
    * Right moves positively along the X axis (A -> B -> C etc.)
    * Left moves negatively along the x axis (H -> G -> F etc.)
    * Forward moves positively along the Y axis (1 -> 2 -> 3 etc.)
    * Back moves negatively along the Y axis (8 -> 7 -> 6 etc.)
    * We don't care about whitespace outside of the keywords
3. Provide a submit function and validate the syntax the user has entered is correct
4. Provide appropriate messages to the user to help them resolve their syntax should it be invalid

### Epic - Collect the Colour game enhancements

1. Add to the movement language, so each command can take an optional integer, which will move in that direction by the number provided, e.g. Forward(3);
2. The board size should be dynamic and we should ask the user what size of board they'd like in pixels (each square should be the same size)

### Bugs
1. There are 9 rows on the chess board
    * we only need 8
2. Green can never be the primary colour in the grid
    * The primary colour should be random between Red, Green and Blue

