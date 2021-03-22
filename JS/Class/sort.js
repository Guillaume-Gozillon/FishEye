/* eslint-disable no-new */
import { Display } from './Display.js'

// Sort the elements before being built
export class BuildCardDOM {
  constructor (normal, byLike, byDate, byTitle) {
    this.cardSorter(normal, byLike, byDate, byTitle)
  }

  cardSorter (normal, byLike, byDate, byTitle) {
    normal.forEach(i => new Display(i))
    const sortPhoto = document.getElementsByClassName('custom-option')
    console.log(sortPhoto)
    sortPhoto.addEventListener('click', () => {
      this.cleanCard()
      if (sortPhoto.datavalue === 'trend') {
        byLike.forEach(i => new Display(i))
      }
      if (sortPhoto.value === 'date') {
        byDate.forEach(i => new Display(i))
      }
      if (sortPhoto.value === 'title') {
        byTitle.forEach(i => new Display(i))
      }
    })
  }

  cleanCard () {
    const cardContainer = document.getElementById('picture-photographer')
    const cards = document.getElementsByClassName('picture-photographer_presentation')

    for (let i = cards.length - 1; i >= 0; i--) {
      cardContainer.removeChild(cards[i])
    }
  }
}
