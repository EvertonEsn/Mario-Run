const mario = document.querySelector('.mario')
const clouds = document.querySelector('.clouds')
const pipe = document.querySelector('.pipe')

const jump = () => {
  mario.classList.add('jump')

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500)
}

const loop = setInterval(() => {
  const pipePos = pipe.offsetLeft
  const cloudPos = clouds.offsetLeft
  const marioPosB = +getComputedStyle(mario).bottom.replace('px', '')

  if (pipePos <= 120 && pipePos > 0 && marioPosB < 100) {
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePos}px`

    clouds.style.animation = 'none'
    clouds.style.left = `${cloudPos}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosB}px`

    mario.src = '/img/game-over.png'
    mario.style.width = '7.5rem'
    mario.style.left = '5rem'

    clearInterval(loop)
  }
}, 10)

document.addEventListener('keydown', jump)
