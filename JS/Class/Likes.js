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

        const nodeTarget = e.target
        const numberTarget = parseInt(nodeTarget.textContent)

        nodeTarget.innerHTML = numberTarget + 1

        const likesArrClicked = parseInt(nodeTarget.textContent)
        nodeTarget.classList.add('active')

        const diffArr = likesArrClicked - numberTarget

        const arrDiplayed = Array.from(totalNode).map((el) => {
          return parseInt(el.textContent)
        })

        arrDiplayed.push(diffArr)

        const reducerArr = (accumulator, currentValue) => accumulator + currentValue
        const reduction = arrDiplayed.reduce(reducerArr)

        const newNodeLikes = document.getElementById('compteur').firstChild
        newNodeLikes.textContent = `${reduction - 1} ❤`
      }
    })
  }
}

new Likes()
