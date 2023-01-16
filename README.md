# Kahoot Points

## Introduction

Implementation of a browser based game points system that calculates the total points awarded to a player for a number of items they have collected in a game. 

Different Items: A, B, C, D. With different points and bonus.

Item --> Unit Points --> Bonus

A ---------> 50 -------> 200 for 3

B ---------> 30 -------> 90 for 2

A ---------> 50 

A ---------> 50 

The game accepts items in any order. Example: if we collect a B, an A, and another B, we’ll recognise the two B’s and score them at 90 (for a total score so far of 140).


![image](https://user-images.githubusercontent.com/39062528/212623158-b21da9fb-1ef5-4473-89e4-c4ef126b156d.png)

## Planification
Deadline:  Sunday
Expected time 12h, distributed in two days of 6h per day. It’s expected to have one extra day to work in the project, therefore 18h.

## Requirements

- Shows all the items to collect
- Shows all the items collected and score
- Computes the total scores of bonus
- Computes the total score of the player
- Clear current score and start again

Maybe:

- Keyboard input to select the item to collect it.
- Add sounds for actions.

Non-functional:

- Should fit iPad Screen.
- Accessibility application.

## Design

Add keyboard letters to select the different numbers in the game.
Considerations in design:
- Solid contrast: High contrast so users with visual impairments can read easily.
- Keyboard accessibility: As some users may not be able to use a mouse, the web-app its designed keyboard friendly.
-  Use of ARIA roles: ARIA roles can help provide additional information about elements on the page, but if they are not used, it can be difficult for users who rely on assistive technologies to understand the purpose of the elements.
- Add audio captions.

## Implementtion
React and Typescript.
State management: Micro state management with React Hooks.

## Next Steps
How the project can be improved:

- Refactor CSS
- Refactor components
- Add more testing (for instance, storybook and cypress).
- Add accessibility configuration.
- Language translations

- Improve accessibility:
    - Add voice commands
    - WAI-ARIA

