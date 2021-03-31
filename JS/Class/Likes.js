/* eslint-disable no-new */
/* eslint-disable eqeqeq */
class Likes {
  constructor () {
    this.buildLikes()
  }

  buildLikes () {
    document.addEventListener('click', e => {
      if (e.target.classList == 'paddeur') {
        const totalNode = document.getElementsByClassName('paddeur')

        const toChange = e.target
        const ancien = parseInt(toChange.textContent)

        console.log('ancien', ancien)
        toChange.innerHTML = ancien + 1

        const nouveau = parseInt(toChange.textContent)
        console.log('nouveau', nouveau)
        toChange.classList.add('active')
        // total.innerHTML = numbered + 1

        const calcul = nouveau - ancien
        console.log('calcul', calcul)

        const toTest = Array.from(totalNode).map((el) => {
          return parseInt(el.textContent)
        })

        toTest.push(calcul)

        const newreducer = (accumulator, currentValue) => accumulator + currentValue
        const reduction = toTest.reduce(newreducer)
        console.log('reduction', reduction - 1)

        const insertPrice = document.getElementById('compteur').firstChild
        insertPrice.textContent = `${reduction - 1} ❤`
      }
    })
  }
}

new Likes()
