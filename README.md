# Kahoot Points

## Introduction

This is an implementation of a browser-based game points system that calculates the total points awarded to a player for a number of items they have collected in a game.

Different Items: A, B, C, D. With different points and bonuses.

Item --> Unit Points --> Bonus

A ---------> 50 -------> 200 for 3

B ---------> 30 -------> 90 for 2

A ---------> 50 

A ---------> 50 

The game accepts items in any order. Example: if we collect a B, an A, and another B, we’ll recognise the two B’s and score them at 90 (for a total score so far of 140).


![image](https://user-images.githubusercontent.com/39062528/212623158-b21da9fb-1ef5-4473-89e4-c4ef126b156d.png)

## Setup and Start

1. Clone the repository with ```git clone https://github.com/RafaelMoles/kahoot-points.git```
2. Run ```cd kahoot-points``` to navigate into the project's directory.
3. Run ```yarn``` to install the project's dependencies.
4. Run ```yarn dev``` to start the development server.
5. Open ```http://localhost:5173``` to view the app in the browser.

Note: Make sure that you have installed ```yarn``` and ```vite``` as global dependencies in your machine.

## Requirements

Functional:

- Shows all the items to collect
- Shows all the items collected and score
- Computes the total extra points from bonus
- Computes the total score of the player
- Clear current score and start again

Non-functional:

- Should fit iPad Screen.
- Accessibility.

Possible improvements:

- Keyboard input to select the item to collect it.
- Add sounds for actions.


## Design considerations

- Solid contrast: High contrast so users with visual impairments can read easily.
- Keyboard accessibility: As some users may not be able to use a mouse, the web-app its designed keyboard friendly.
-  Use of ARIA roles: ARIA roles can help provide additional information about elements on the page, but if they are not used, it can be difficult for users who rely on assistive technologies to understand the purpose of the elements.
- Add audio captions.

## Implementation

React and Typescript.

State management: Micro state management with React Hooks.

## Scripts
To run the tests, you can use the following scripts:

- ```test```: Runs the tests using the vitest command.
- ```lint```: Runs the linter using the eslint command.
- ```lint:fix```: Runs the linter and automatically fixes any issues found.
- ```format```: Formats the code using the prettier command.

## Dependencies

The package includes the following testing dependencies:

- ```@testing-library/jest-dom```: Provides custom jest matchers for testing the DOM.
- ```@testing-library/react```: Provides a set of simple and complete React DOM testing utilities.
- ```@testing-library/react-hooks```: Provides a set of utilities for testing React hooks.
- ```@vitejs/plugin-react```: Provides a development server for React apps.
- ```eslint```: Provides a linter for identifying and reporting on patterns in JavaScript.
- ```eslint-config-prettier```: Turns off all ESLint rules that are unnecessary or might conflict with Prettier.
- ```eslint-plugin-prettier```: Runs Prettier as an ESLint rule.
- ```eslint-plugin-react```: ESLint plugin with rules that help validate proper usage of React.
- ```prettier```: An opinionated code formatter.
- ```vitest```: A simple test runner for Vite projects.

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

