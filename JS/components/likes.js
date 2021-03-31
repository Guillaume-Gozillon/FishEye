export class Likes {
  constructor (rate) {
    this.buildLikes(rate)
  }

  buildLikes (rate) {
    const insertDOM = document.getElementById('picture-photographer')
    insertDOM.insertAdjacentHTML('afterend', `
          <aside id="compteur" class="compteur">
              <p>${rate[0].price}€/jour</p>
          </aside>`)
    return insertDOM
  }

  countLikes (likesArr) {
    const pushArr = []
    likesArr.forEach(el => {
      const items = el.likes
      pushArr.push(items)
    })
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return pushArr.reduce(reducer)
  }
}
