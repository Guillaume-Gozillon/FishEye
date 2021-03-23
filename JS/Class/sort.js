/* eslint-disable no-new */
import { Display } from './Display.js'

// Sort the elements before being built
export class BuildCardDOM {
  constructor (normal, byLike, byDate, byTitle) {
    this.cardSorter(normal, byLike, byDate, byTitle)
  }

  cardSorter (normal, byLike, byDate, byTitle) {
    // Arr not sorted
    normal.forEach(i => new Display(i))

    const sortPhoto = document.getElementsByClassName('custom-option')

    // Iterates arrays => init sort's features
    for (let i = 0; i < sortPhoto.length; i++) {
      sortPhoto[i].addEventListener('click', () => {
        this.cleanCard()

        if (sortPhoto[i].dataset.value === 'trend') {
          byLike.forEach(i => new Display(i))
        }
        if (sortPhoto[i].dataset.value === 'date') {
          byDate.forEach(i => new Display(i))
        }
        if (sortPhoto[i].dataset.value === 'title') {
          byTitle.forEach(i => new Display(i))
        }
      })
    }
  }

  cleanCard () {
    const cardContainer = document.getElementById('picture-photographer')
    const cards = document.getElementsByClassName('picture-photographer_presentation')

    for (let i = cards.length - 1; i >= 0; i--) {
      cardContainer.removeChild(cards[i])
    }
  }
}
