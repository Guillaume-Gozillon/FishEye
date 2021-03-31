/* eslint-disable no-new */
/* eslint-disable eqeqeq */
class TestDOM {
  constructor () {
    this.buildLikes()
  }

  buildLikes () {
    document.addEventListener('click', e => {
      if (e.target.classList == 'paddeur') {
        const total = document.getElementsByClassName('paddeur')

        const toChange = e.target
        const numbered = parseInt(toChange.textContent)
        console.log('change', numbered)
        toChange.innerHTML = numbered + 1
        toChange.classList.add('active')
        // total.innerHTML = numbered + 1
      }
    })
  }
}

new TestDOM()
