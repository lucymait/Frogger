
### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive
# Frogger

## Overview

This is my first project of the software engineering immersive course at GA London. The assignment was to create a grid-based game to be rendered in the browser, using HTML, CSS and JavaScript. The project was to be completed **individually** within **one week**.

Given a list of options from GA, I chose to re-create the classic game **Frogger**. Please note that while the game is designed in a pink panther theme, this documentation is written in terms of the original Frogger lingo, e.g. moving obstacles, as the underlying code. 

You can launch the game on GitHub pages [here](https://lucymait.github.io/project-1/)

## How to play

- Use ← ↑ → ↓ arrow keys to move the player
- Avoid moving obstacles 
- Get each panther home to collect points!
- Win by getting all 4 panthers home

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
- HTML
- CSS
- JavaScript (ES6)
- Git and GitHub
- Google Fonts
- freesound

## Approach

### The Grid

The game is built using a grid. A 14 x 14 square is created using JavaScript. HTML divs are created using a for loop and appended as children of the grid. ClassList was used to add all the image icons to the grid e.g. panther, cars, sharks, snakes, palm trees and houses.

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

### Objects movement 

A set interval was used, with a for loop, to move each array of objects. Once the objects reached the end of each row, classlist.remove was used to remove the array and then classlist.add, added the array back to the start of the row.

```js
  const firstIntervalId = setInterval(() => {
      for (let i = 0; i < cars1Array.length; i++) {
        if (cars1Array[i] === 139) {
          cells[cars1Array[i]].classList.remove('car')
          cars1Array[i] = 125
          cells[cars1Array[i]].classList.add('car')
        }
        cells[cars1Array[i]].classList.remove('car')
        cars1Array[i]++
        cells[cars1Array[i]].classList.add('car')
      }
      for (let i = 0; i < cars2Array.length; i++) {
        if (cars2Array[i] === 167) {
          cells[cars2Array[i]].classList.remove('car')
          cars2Array[i] = 153
          cells[cars2Array[i]].classList.add('car')
        }
        cells[cars2Array[i]].classList.remove('car')
        cars2Array[i]++
        cells[cars2Array[i]].classList.add('car')
      }
      for (let i = 0; i < sharksArray.length; i++) {
        if (sharksArray[i] === 83) {
          cells[sharksArray[i]].classList.remove('shark')
          sharksArray[i] = 69
          cells[sharksArray[i]].classList.add('shark')
        }
        cells[sharksArray[i]].classList.remove('shark')
        sharksArray[i]++
        cells[sharksArray[i]].classList.add('shark')
      }
      for (let i = 0; i < snakesArray.length; i++) {
        if (snakesArray[i] === 41) {
          cells[snakesArray[i]].classList.remove('snake')
          snakesArray[i] = 27
          cells[snakesArray[i]].classList.add('snake')
        }
        cells[snakesArray[i]].classList.remove('snake')
        snakesArray[i]++
        cells[snakesArray[i]].classList.add('snake')
      }
    }, 350)
```

### Game timing 

```js
const secondIntervalId = setInterval(() => {
      timerscreen.innerHTML = counter
      if (counter <= 5) {
        document.getElementById('screen').style.backgroundColor = 'red'
      }
      if (counter === 0) {
        clearInterval(collissionIntervalId)
        clearInterval(firstIntervalId)
        clearInterval(secondIntervalId)
        audio2.play()
        gameover.style.display = 'block'
```

### Collisions 

```js
if (cars1Array.includes(panther1) || cars2Array.includes(panther1) || snakesArray.includes(panther1) || sharksArray.includes(panther1) || palmtreeArray.includes(panther1)) {
        lives -= 1
        playerLives.innerHTML = `Lives: ${lives}`
        cells[panther1].classList.remove('panther1')
        audio3.play()
        panther1 = 188
        cells[panther1].classList.add('panther1')
```

### Gameover screen

```js
else if (lives === 0) {
        clearInterval(collissionIntervalId)
        clearInterval(firstIntervalId)
        clearInterval(secondIntervalId)
        audio2.play()
        gameover.style.display = 'block'
        setTimeout(() => {
          gameover.style.display = 'none'
          endScore.style.display = 'block'
          endScore.innerHTML = `SCORE = ${score}`
          leaderboard.style.display = 'block'
        }, 5000)
        setTimeout(() => {
          displayScore()
        }, 5000)
        setTimeout(() => {
          play = confirm(`Your score is ${score}. Do you want to play again? `)
          if (play === true) {
            clearInterval(collissionIntervalId)
            window.location.reload()
          }
        }, 9000)
      }
```


### Victory screen

```js
 if (score >= 400) {
          clearInterval(collissionIntervalId)
          clearInterval(firstIntervalId)
          clearInterval(secondIntervalId)
          audio4.play()
          wingame.style.display = 'block'
          setTimeout(() => {
            wingame.style.display = 'none'
            endScore.style.display = 'block'
            endScore.innerHTML = `SCORE = ${score}`
            leaderboard.style.display = 'block'
          }, 5000)
          setTimeout(() => {
            displayScore()
          }, 5000)
          setTimeout(() => {
            play = confirm(`Your score is ${score}. Do you want to play again? `)
            if (play === true) {
              clearInterval(collissionIntervalId)
              window.location.reload()
            }
          }, 9000)
          return
        }
```

### Local Storage

```js

function renderList(scores, scoresList) {
    const array = scores.sort((playerA, playerB) => playerB.score - playerA.score).map(player => {
      return `<li>
        ${player.name} = <strong>${player.score} points</strong>.
      </li>`
    })
    scoresList.innerHTML = array.join('')
  }
  
  function displayScore() {
    let scores = []
    const scoresList = document.querySelector('ol')
    const scoreButton = document.querySelector('#score-enter')
  
    if (localStorage) {
      const players = JSON.parse(localStorage.getItem('players'))
      if (players) {
        scores = players
        renderList(scores, scoresList)
      }
    }
  
    scoreButton.addEventListener('click', () => {
      console.log(scores)
      const newName = prompt('Enter your name?')
      const newScore = prompt('What was your score?')
      const player = { name: newName, score: newScore }
      scores.push(player)
      renderList(scores, scoresList)
      if (localStorage) {
        localStorage.setItem('players', JSON.stringify(scores))
      }
    })
  
  }

```

### Sounds

```html
 <audio id="click" src="sounds/click.wav"></audio>
  <audio id="gameover" src="sounds/gameover.wav"></audio>
  <audio id="life" src="sounds/lifeloss.wav"></audio>
  <audio id="victory" src="sounds/youwin.mp3"></audio>
  <audio id="door" src="sounds/door.wav"></audio>
  ```

## Screenshots

![Gameplay](/images/gamescreen.png)

![Countdown screen](/images/countdown.png)

![Victory screen](/images/victory.png)

![Gameover screen](/images/gameover.png)

![Scoreboard screen](/images/scoreboardpic.png)

## Potential future features
- Levels of difficulty
- Option in the beginning for the player to choose different characters
- More & better sounds

## Lessons learned