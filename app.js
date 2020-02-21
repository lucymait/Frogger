function setupGame() {


  //const & let
  const width = 14
  const gridCellCount = width * width
  const grid = document.querySelector('.grid')
  const cells = []
  const startButton = document.querySelector('.startButton')
  const playerLives = document.querySelector('#playerLives')
  const playerScore = document.querySelector('#playerScore')
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
  // cells.id = i
  // let panther2 = 95
  // let panther3 = 95
  // let panther4 = 95


  // adding class to grid (car, shark, snake, panther, styles)
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    // cell.innerHTML = i
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

  // function for score
  function scoreKeeper() {
    // console.log('winner')
  }

  // Event Listener for keys
  document.addEventListener('keydown', (event) => {

    const arrowAudio = document.querySelector('keydown')
    // audio.src = 'sounds/click.mp3'
    // keydown.play()

    if (event.key === 'ArrowRight') {
      collission()
      if (panther1 === cells.length - 1) {
        return
      }
      cells[panther1].classList.remove('panther1')
      panther1 += 1
      cells[panther1].classList.add('panther1')
    } else if (event.key === 'ArrowLeft') {
      // checkCollission()
      if (panther1 === 0) {
        return
      }
      cells[panther1].classList.remove('panther1')
      panther1 -= 1
      cells[panther1].classList.add('panther1')
    } else if (event.key === 'ArrowUp') {
      scoreKeeper()
      // checkCollission()
      if (panther1 < width) {
        return
      }
      cells[panther1].classList.remove('panther1')
      panther1 -= width
      cells[panther1].classList.add('panther1')
    } else if (event.key === 'ArrowDown') {
      // checkCollission()
      if (panther1 > cells.length - width - 1) {
        return
      }
      cells[panther1].classList.remove('panther1')
      panther1 += width
      cells[panther1].classList.add('panther1')
    }
  })


  // for loop for moving car, snake & shark (ensuring they loop back to original cell once hitting right wall)

  startButton.addEventListener('click', () => {

    const audio1 = document.querySelector('#audio1')
    const playButton = document.querySelector('#themesong')
    audio1.src = 'sounds/themesong.mp3'
    audio1.play()


    let count = 0

    const firstintervalID = setInterval(() => {

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

      function collission() {

        const secondintervalID = setInterval(() => {
          if (cells.classList.contains('car' || 'panther1')) {
            lives -= 1
            playerLives.innerHTML = `Lives: ${lives}`
            cells.classList.remove('panther1')
          }
    
          if (lives === 0) {
            clearInterval(secondintervalId)
            play = confirm(`Your score is ${score}. Do you want to play again? `)
            if (play === true) {
              window.localStorage.reload(true)
            }
          }
        })
      }

    }, 500)

  })

}


window.addEventListener('DOMContentLoaded', setupGame)