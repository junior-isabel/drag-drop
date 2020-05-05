
function dragElement (selector, moveX, moveY) {
  let _moveX = moveX && true
  let _moveY = moveY && true 
  const container = document.querySelector(selector)
  console.log()
  let space = null
  if(!container.children[0].classList.contains('space')) {
    space = container.children[0]
    space.classList.add('space')
  } else {
    space = container.children[0]
  }
  //const drags = container.querySelectorAll('.drag')
  let px = 0, py = 0
  let start = false
  let translateX = 0
  let translateY = 0
  
  
  container.addEventListener('mousedown', clickPoint, false)
  
  container.addEventListener('mousemove', movimentEvent, false)

  container.addEventListener('mouseup', leavePoint, false)

  container.addEventListener('mouseleave', leavePoint, false)

  container.addEventListener('touchstart', clickPoint, false)

  container.addEventListener('touchmove', movimentEvent, false)
  container.addEventListener('touchend', leavePoint, false)
  container.ondrop = (e) => e.preventDefault()
  container.ondrag = (e) => e.preventDefault()
  container.ondragstart = (e) => e.preventDefault()

  function unif(e) {
    e.preventDefault()
    return e.touches ? e.touches[0] : e
  }

  function clickPoint (e) {
    const event = unif(e)
    px = event.clientX
    py = event.clientY
    start = true
    e.target.classList.add('active')
    document.querySelectorAll('.drag').forEach(element => {
      if(e.target === element) {
        element.style.zIndex = 1
      } else {
        element.style.zIndex = 0
        element.style.position = 'relative'
      }
    })
  }
  function leavePoint (e) {
    e.target.classList.remove('active')
    start = false
  }
  function translate() {
    
    space.style.top = `${translateY}px`
    space.style.left = `${translateX}px`
  }
  function movimentEvent (e) {
    const event = unif(e)
    if(!start) return false
    let dx = event.clientX - px
    let dy = event.clientY - py
    
    translateX += _moveX ? dx : 0
    translateY += _moveY ? dy : 0
    constraint(dx, dy)
    translate()
    px = event.clientX
    py = event.clientY
  }

  function constraint(dx, dy) {
    const spaceBox = space.getBoundingClientRect()
    const containerBox = container.getBoundingClientRect()
    translateX = Math.min(0, translateX)
    translateX = Math.max( - space.scrollWidth + spaceBox.width, translateX)

    translateY = Math.max(0, translateY)
    translateY = Math.min(containerBox.height - space.scrollHeight, translateY)
  }
}

