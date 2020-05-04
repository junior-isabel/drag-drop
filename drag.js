
function dragElement (selector) {
  const drag = document.querySelector(selector)
  let px = 0, py = 0
  let start = false
  let translateX = 0
  let translateY = 0
  
  drag.addEventListener('mousedown', clickPoint, false)
  
  drag.addEventListener('mousemove', movimentEvent, false)

  drag.addEventListener('mouseup', leavePoint, false)

  drag.addEventListener('mouseleave', leavePoint, false)

  drag.addEventListener('touchstart', clickPoint, false)

  drag.addEventListener('touchmove', movimentEvent, false)
  drag.addEventListener('touchend', leavePoint, false)
  drag.ondrop = (e) => e.preventDefault()
  drag.ondrag = (e) => e.preventDefault()
  drag.ondragstart = (e) => e.preventDefault()
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
    
    drag.style.transform = `translate(${translateX}px, ${translateY}px)`
  }
  function movimentEvent (e) {
    const event = unif(e)
    if(!start) return false
    let dx = event.clientX - px
    let dy = event.clientY - py
    
    translateX += dx
    translateY += dy
    constraint(dx, dy)
    translate()
    px = event.clientX
    py = event.clientY
  }

  function constraint(dx, dy) {
    const element = drag.getBoundingClientRect()
    translateX = Math.max(0, translateX)
    if(element.top < 0 ) {
      translateY -= dy - 1
    }
    translateX = translateX + element.width > window.innerWidth ? window.innerWidth - element.width : translateX
  }
}



new dragElement('.drag-1')
new dragElement('.drag-2')
new dragElement('.drag-3')


