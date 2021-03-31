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
        console.log('numeber', numberTarget);

        nodeTarget.innerHTML = numberTarget + 1

        const likesArrClicked = parseInt(nodeTarget.textContent)
        nodeTarget.classList.add('active')
        console.log('clicked', likesArrClicked);

        const diffArr = likesArrClicked - numberTarget
        console.log(diffArr);

        const arrToDiplay = Array.from(totalNode).map((el) => {
          return parseInt(el.textContent)
        })

        arrToDiplay.push(diffArr)

        const reducerArr = (accumulator, currentValue) => accumulator + currentValue
        const reduction = arrToDiplay.reduce(reducerArr)

        const insertPrice = document.getElementById('compteur').firstChild
        insertPrice.textContent = `${reduction - 1} ❤`
      }
    })
  }
}

new Likes()
