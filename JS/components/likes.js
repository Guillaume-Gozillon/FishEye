
export class Likes {
  constructor (rate, totalLikes) {
    this.buildLikes(rate, totalLikes)
  }

  buildLikes (rate, totalLikes) {
    const insertDOM = document.getElementById('picture-photographer')
    insertDOM.insertAdjacentHTML('afterend', `
          <aside id="compteur" class="compteur">
              <p>${this.countLikes(totalLikes)} ❤</p>
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
    console.log(pushArr);
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return pushArr.reduce(reducer)
  }
}