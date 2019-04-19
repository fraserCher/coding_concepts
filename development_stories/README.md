# Application Goal

This application is designed to accompany a series of learning materials that are designed to teach programming concepts to inexperienced / no experience developers.

The coding concepts are all taught on a chess board, which is a grid of 64 squares (8 x 8) with the X axis being denoted by letters (left to right) and the Y axis by numbers (top to bottom).

## User Stories

### Epic - Collect the Colour game

By the end of this epic the game board will be initialised with colours and the user will have the ability to enter commands to move their character around the board collecting the colours.

1. ~Create a UI to show the game board~
2. With three varied colours draw 18 circles onto the game board (6 of each colour) in predetermined locations
3. Communicate with the user which colour to collect
3. Place the character at the starting point of the board when the game loads (A1)
4. Provide UI controls that can be used to move the character in each of the four directions
5. Animate the actions the user has entered by moving the character
6. When the character crosses the correct colour then store it as collected
7. Communicate to the user how many of the correct coloured circles they have collected
8. Record the number of moves the user has had to make in order to collect their colours
9. If the character leaves the board reset the character to the start point and inform the user the character left the board

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
