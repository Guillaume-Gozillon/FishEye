/* eslint-disable no-new */
import { Display } from './Display.js'

// Sort the elements before being built
export class BuildCardDOM {
  constructor (normal, byLike, byDate, byTitle) {
    this.cardSorter(normal, byLike, byDate, byTitle)
  //  this.arraySorter(normal, byLike, byDate, byTitle)
  }

  cardSorter (normal, byLike, byDate, byTitle) {
    normal.forEach(i => new Display(i))
    const sortPhoto = document.getElementById('sort-photo')
    sortPhoto.addEventListener('change', () => {
      this.cleanCard()
      if (sortPhoto.value === 'trend') {
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

  arraySorter (normal, byLike, byDate, byTitle) {
    const arrayToSort = []

    arrayToSort.push(normal)
    console.log('array NOT sorted', arrayToSort)

    const sortPhoto = document.getElementById('sort-photo')
    sortPhoto.addEventListener('change', () => {
      if (sortPhoto.value === 'trend') {
        arrayToSort.push(byLike)
        arrayToSort.shift(normal)
        console.log('array sorted', arrayToSort)
      }
    })
  }
}
