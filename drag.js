
function dragElement (selector, moveX, moveY, position) {
  let _moveX = moveX && true
  let _moveY = moveY && true 
  const container = document.querySelector(selector)
  let space = null
  let translateX = 0
  if(!container.children[0].classList.contains('space')) {
    space = container.children[0]
    space.classList.add('space')
  } else {
    space = container.children[0]
  }
  if(container.getBoundingClientRect().width - space.scrollWidth - 1 > 0) {
    space.style.display ="inline-flex"
    switch(position) {
      case 'center': 
        translateX = (container.getBoundingClientRect().width - space.scrollWidth - 1) / 2
        break
      case 'right':
        translateX = container.getBoundingClientRect().width - space.scrollWidth - 1
        break
        default:
          translateX = 0
    }
  }
  //const drags = container.querySelectorAll('.drag')
  let px = 0, py = 0
  let start = false
  let translateY = 0
  space.style.left = `${translateX}px`
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
    const x = containerBox.width - space.scrollWidth - 1
    console.log(x)
    translateX = Math.min(x > 0 ? x : 0, translateX)
    translateX = Math.max( - space.scrollWidth + spaceBox.width, translateX)

    translateY = Math.max(0, translateY)
    translateY = Math.min(containerBox.height - space.scrollHeight, translateY)
  }
}

