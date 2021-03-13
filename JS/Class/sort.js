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
        this.cleanCard()
        byDate.forEach(i => new Display(i))
      }
      if (sortPhoto.value === 'title') {
        this.cleanCard()
        byTitle.forEach(i => new Display(i))
      }
    })
  },
  cleanCard () {
    const cardContainer = document.getElementById('picture-photographer')
    console.log('cardContainer :', cardContainer)

    const cards = document.getElementsByClassName('picture-photographer_presentation')
    console.log('cards :', cards)

    for (let i = 0; i < cards.length; i++) {
      console.log('Clean', cards[i])
      cardContainer.remove(cards[i])
    }
  }
/*
  cleanCard () {
    const cardContainer = document.getElementById('picture-photographer')
    console.log('cardContainer :', cardContainer)

    const cards = document.getElementsByClassName('picture-photographer_presentation')
    console.log('cards :', cards)

    for (let i = 0; i < cards.length; i++) {
      console.log('Clean', cards[i].name)
      cardContainer.removeChild(cards[i])
    }
  }
  */
}
