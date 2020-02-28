function setupGame() {


  const width = 14
  const gridCellCount = width * width
  const grid = document.querySelector('.grid')
  const cells = []
  const startButton = document.querySelector('.startButton')
  const resetButton = document.querySelector('.resetButton')
  const playerLives = document.querySelector('#playerLives')
  const playerScore = document.querySelector('#playerScore')
  const audio = document.querySelector('#click')
  const audio2 = document.querySelector('#gameover')
  const gameover = document.querySelector('#gameoverblock')
  const wingame = document.querySelector('#wingame')
  const leaderboard = document.querySelector('#leaderboard')
  const endScore = document.querySelector('#endScore')
  const audio3 = document.querySelector('#life')
  const audio4 = document.querySelector('#victory')
  const audio5 = document.querySelector('#door')
  let cars1Array = [126, 129, 133, 137]
  let cars2Array = [154, 157, 161, 165]
  let sharksArray = [70, 73, 75, 77, 79, 82]
  let snakesArray = [28, 30, 32, 34, 36, 38, 40]
  let housesArray = [2, 6, 10, 13]
  let roadArray = [126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167]
  let roadMarkerArray = [140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153]
  let waterArray = [56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97]
  let pavementArray = [168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195]
  let palmtreeArray = [0, 1, 3, 4, 5, 7, 8, 9, 11, 12]
  let panther1 = 188
  let lives = 3
  let score = 0
  let count = 0
  let play = true
  const timerscreen = document.querySelector('#screen')
  // cells.id = i
  let counter = 30
  let intervalId = 0


  // adding classes to grid (car, shark, snake, panther, styles)
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

  // for loop for moving car, snake & shark (ensuring they loop back to original cell once hitting right wall)

  startButton.addEventListener('click', () => {
    const audio1 = document.querySelector('#audio1')
    const playButton = document.querySelector('#themesong')
    audio1.src = 'sounds/themesong.mp3'
    audio1.play()

    if (intervalId !== 0) {
      return
    }

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
        }, 10000)

      } else {
        counter -= 1
      }
    }, 1000)


    // Event Listener for keys
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        audio.play()
        if (panther1 === cells.length - 1) {
          return
        }
        cells[panther1].classList.remove('panther1')
        panther1 += 1
        cells[panther1].classList.add('panther1')

      } else if (event.key === 'ArrowLeft') {
        audio.play()
        if (panther1 === 0) {
          return
        }
        cells[panther1].classList.remove('panther1')
        panther1 -= 1
        cells[panther1].classList.add('panther1')

      } else if (event.key === 'ArrowUp') {
        audio.play()
        if (panther1 < width) {
          return
        }
        cells[panther1].classList.remove('panther1')
        panther1 -= width
        cells[panther1].classList.add('panther1')
      } else if (event.key === 'ArrowDown') {
        audio.play()
        if (panther1 > cells.length - width - 1) {
          return
        }
        cells[panther1].classList.remove('panther1')
        panther1 += width
        cells[panther1].classList.add('panther1')
      }
    })

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
    }, 400)



    function collission() {
      if (cells[panther1].classList.contains('house')) {
        cells[panther1].classList.remove('house')
        cells[panther1].classList.add('panther1')
        audio5.play()
        score += 100
        playerScore.innerHTML = `Score: ${score}`
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
        panther1 = 188
        cells[panther1].classList.add('panther1')
      }
      if (cars1Array.includes(panther1) || cars2Array.includes(panther1) || snakesArray.includes(panther1) || sharksArray.includes(panther1) || palmtreeArray.includes(panther1)) {
        lives -= 1
        playerLives.innerHTML = `Lives: ${lives}`
        cells[panther1].classList.remove('panther1')
        audio3.play()
        panther1 = 188
        cells[panther1].classList.add('panther1')
      
        if (lives <= 1) {
          document.getElementById('playerLives').style.backgroundColor = 'red'
        } 
      
      } else if (lives === 0) {
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
            //add local storage (get player to submit score) - alert box 
          }
        }, 9000)
      }
    }

    const collissionIntervalId = setInterval(() => {
      collission()
    }, 100)

    resetButton.addEventListener('click', () => {
      clearInterval(collissionIntervalId)
      clearInterval(firstIntervalId)
      clearInterval(secondIntervalId)
      play = confirm(`Your score is ${score}. Do you want to play again? `)
      window.location.reload()
    })

  })

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

}


window.addEventListener('DOMContentLoaded', setupGame)
