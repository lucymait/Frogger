function setupGame() {
  const width = 10
  const gridCellCount = width * width
  const grid = document.querySelector('.grid')
  const cells = []
  let car1 = 78
  let car2 = 74
  let car3 = 71
  let shark1 = 40
  let shark2 = 43
  let shark3 = 46
  let shark4 = 49

  let panther1 = 95
  // let panther2 = 95
  // let panther3 = 95
  // let panther4 = 95

  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    if (i === panther1) {
      cell.classList.add('panther1')
    }
    if (i === car1) {
      cell.classList.add('car1')
    }
    if (i === car2) {
      cell.classList.add('car2')
    }
    if (i === car3) {
      cell.classList.add('car3')
    }
    if (i === shark1) {
      cell.classList.add('shark1')
    }
    if (i === shark2) {
      cell.classList.add('shark2')
    }
    if (i === shark3) {
      cell.classList.add('shark3')
    }
    if (i === shark4) {
      cell.classList.add('shark4')
    }


    grid.appendChild(cell)
    cells.push(cell)
  // }
  }
  

  document.addEventListener('keydown', (event) => {
    console.log(event.key)
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
    } else if (event.key === 'ArrowDown') {
      if (panther1 > cells.length - width - 1) {
        return
      }
      cells[panther1].classList.remove('panther1')
      panther1 += width
      cells[panther1].classList.add('panther1')
    }


  })


}

window.addEventListener('DOMContentLoaded', setupGame)