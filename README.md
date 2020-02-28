
### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive
# Frogger

## Overview

This is my first project of the software engineering immersive course at GA London. The assignment was to create a grid-based game to be rendered in the browser, using HTML, CSS and JavaScript. The project was to be completed **individually** within **one week**.

Given a list of options from GA, I chose to re-create the classic game **Frogger**. Please note that while the game is designed in a pink panther theme, this documentation is written in terms of the original Frogger lingo, e.g. moving obstacles, as the underlying code. 

You can launch the game on GitHub pages [here](https://lucymait.github.io/project-1/)

## How to play

Use ← ↑ → ↓ arrow keys to move the player
Avoid moving obstacles 
Get each panther home to collect points!
Win by getting all 4 panthers home

## Brief

- **Render a game in the browser**
- **Design logic for winning & visually display scoreboard**
- **Include separate HTML / CSS / JavaScript files**
- Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
- Use **Javascript** for **DOM manipulation**
- **Deploy your game online**, where the rest of the world can access it
- Use **semantic markup** for HTML and CSS (adhere to best practices)

## Technologies Used

- HTML
- CSS
- JavaScript (ES6)
- Git and GitHub
- Google Fonts
- freesound

## Approach

### The Grid

The game is built using a grid. A 14 x 14 square is created using JavaScript. HTML divs are created using a for loop and appended as children of the grid.

 ```js
  const width = 14
  const gridCellCount = width * width
  const grid = document.querySelector('.grid')
  const cells = []
  let panther1 = 188

 
    for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.innerHTML = i
    if (i === panther1) {
      cell.classList.add('panther1')
    }
    if (cars1Array.includes(i)) {
      cell.classList.add('car')
    }
    if (cars2Array.includes(i)) {
      cell.classList.add('car')
    }
    if (sharksArray.includes(i)) {
      cell.classList.add('shark')
    }
    if (snakesArray.includes(i)) {
      cell.classList.add('snake')
    }
    if (housesArray.includes(i)) {
      cell.classList.add('house')
    }
    if (roadArray.includes(i)) {
      cell.classList.add('road')
    }
    if (roadMarkerArray.includes(i)) {
      cell.classList.add('roadMarker')
    }
    if (waterArray.includes(i)) {
      cell.classList.add('water')
    }
    if (pavementArray.includes(i)) {
      cell.classList.add('pavement')
    }
    if (palmtreeArray.includes(i)) {
      cell.classList.add('palmtree')
    }
    cells.push(cell)
    grid.appendChild(cell)
  }
 ```
 During actual gameplay, the grid isn't visible, but is highlighed below for demonstration purposes:
 
 ![](./assets/screenshots/GridScreenshot.png)

### Board layout 

### Objects movement 

### Game timing 

### Collisions 

### Gameover screen

### Victory screen

### Sounds

## Screenshots

![Gameplay](/images/gamescreen.png)

![Countdown screen](/images/countdown.png)

![Victory screen](/images/screenshots/victory-screen.png)

![Gameover screen](/images/gameover.png)

![Scoreboard screen](/images/scoreboard.png)

## Potential future features
Levels of difficulty
Option in the beginning for the player to choose different characters
More & better sounds

## Lessons learned