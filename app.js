function setupGame() {

  const width = 10
  const gridCellCount = width * width
  const grid = document.querySelector('.grid')
  const cells = []
  let carsArray = [71, 74, 77]
  // let car1 = 78
  // let car2 = 74
  // let car3 = 71
  let sharksArray = [40, 43, 46, 49]
  // let shark1 = 40
  // let shark2 = 43
  // let shark3 = 46
  // let shark4 = 49
  let snakesArray = [22, 23, 24, 27, 28]
  let snake1 = 22
  let snake2 = 23
  let snake3 = 24
  let snake4 = 27
  let snake5 = 28
  let house1 = 2
  let house2 = 4
  let house3 = 6
  let house4 = 8
  let panther1 = 95
  // cells.id = i
  // let panther2 = 95
  // let panther3 = 95
  // let panther4 = 95

  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    // cell.innerHTML = i
    if (i === panther1) {
      cell.classList.add('panther1')
    }
    if (carsArray.includes(i)) {
      cell.classList.add('car')
    }
    // if (i === car2) {
    //   cell.classList.add('car2')
    // }
    // if (i === car3) {
    //   cell.classList.add('car3')
    // }
    if (sharksArray.includes(i)) {
      cell.classList.add('shark')
    }

    // if (i === shark1) {
    //   cell.classList.add('shark1')
    // }
    // if (i === shark2) {
    //   cell.classList.add('shark2')
    // }
    // if (i === shark3) {
    //   cell.classList.add('shark3')
    // }
    // if (i === shark4) {
    //   cell.classList.add('shark4')
    // }
    if (i === snake1) {
      cell.classList.add('snake1')
    }
    if (i === snake2) {
      cell.classList.add('snake2')
    }
    if (i === snake3) {
      cell.classList.add('snake3')
    }
    if (i === snake4) {
      cell.classList.add('snake4')
    }
    if (i === snake5) {
      cell.classList.add('snake5')
    }
    if (i === house1) {
      cell.classList.add('house1')
    }
    if (i === house2) {
      cell.classList.add('house2')
    }
    if (i === house2) {
      cell.classList.add('house2')
    }
    if (i === house3) {
      cell.classList.add('house3')
    }
    if (i === house4) {
      cell.classList.add('house4')
    }

    cells.push(cell)
    grid.appendChild(cell)

  // }
  }
  
  function scoreKeeper() {
    console.log('winner')
  }


  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      if (panther1 === cells.length - 1) {
        return
      }
      cells[panther1].classList.remove('panther1')
      panther1 += 1
      cells[panther1].classList.add('panther1')
    } else if (event.key === 'ArrowLeft') {
      if (panther1 === 0) {
        return
      }
      cells[panther1].classList.remove('panther1')
      panther1 -= 1
      cells[panther1].classList.add('panther1')
    } else if (event.key === 'ArrowUp') {
      if (panther1 < width) {
        return
      }
      cells[panther1].classList.remove('panther1')
      panther1 -= width
      cells[panther1].classList.add('panther1')
      scoreKeeper()
    } else if (event.key === 'ArrowDown') {
      if (panther1 > cells.length - width - 1) {
        return
      }
      cells[panther1].classList.remove('panther1')
      panther1 += width
      cells[panther1].classList.add('panther1')
    }
  })

  let count = 0

  const intervalID = setInterval(() => {
    // every 2 seconds cells[car += 1] 
    //if car1 + 1 = 80 then car1 = 70

    for (let i = 0; i < carsArray.length; i++) {
      if (carsArray[i] === 79) {
        cells[carsArray[i]].classList.remove('car')
        carsArray[i] = 69
        cells[carsArray[i]].classList.add('car')
      }
      cells[carsArray[i]].classList.remove('car')
      carsArray[i]++
      cells[carsArray[i]].classList.add('car')
    }

    for (let i = 0; i < sharksArray.length; i++) {
      if (sharksArray[i] === 49) {
        cells[sharksArray[i]].classList.remove('shark')
        sharksArray[i] = 39
        cells[sharksArray[i]].classList.add('shark')
      }
      cells[sharksArray[i]].classList.remove('shark')
      sharksArray[i]++
      cells[sharksArray[i]].classList.add('shark')
    }

    for (let i = 0; i < carsArray.length; i++) {
      if (carsArray[i] === 79) {
        cells[carsArray[i]].classList.remove('car')
        carsArray[i] = 69
        cells[carsArray[i]].classList.add('car')
      }
      cells[carsArray[i]].classList.remove('car')
      carsArray[i]++
      cells[carsArray[i]].classList.add('car')
    }

    // cells[testCar].classList.remove('car')
    // testCar += 1
    // cells[testCar].classList.add('car')

  }, 1000)


}

window.addEventListener('DOMContentLoaded', setupGame)