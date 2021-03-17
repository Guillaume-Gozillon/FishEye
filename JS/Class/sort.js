import { Display } from './Display.js'

// Sort the elements before being built
export const buildCardDOM = {
  cardSorter: function (normal, byLike, byDate, byTitle) {
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
  },
  cleanCard () {
    const cardContainer = document.getElementById('picture-photographer')
    const cards = document.getElementsByClassName('picture-photographer_presentation')

    // console.log('test', cards.length)
    for (let i = cards.length - 1; i >= 0; i--) {
      // console.log('Clean', cards[i], i)
      cardContainer.removeChild(cards[i])
    }
  }
}
