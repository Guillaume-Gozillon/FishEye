import { FactoryMedia } from './FactoryMedia.class.js'

export const display = {

  initDOM (data) {
    const factory = new FactoryMedia(data)
    factory.build()
    this.cardSorter(data)
  },
  cleanCard () {
    const cardContainer = document.getElementById('picture-photographer')
    console.log('cardContainer :', cardContainer)

    const cards = document.getElementsByClassName('picture-photographer_presentation')
    console.log('cards :', cards)

    for (let i = 0; i < cards.length; i++) {
      console.log('Clean', cards[i].name)
      cardContainer.removeChild(cards[i])
    }
  },
  cardSorter (data) {
    const sortPhoto = document.getElementById('sort-photo')
    sortPhoto.addEventListener('change', () => {
      this.cleanCard()
      if (sortPhoto.value == 'trend') {
        console.log('TEST :', data)
        data.sort((a, b) => b.likes - a.likes)
        this.initDOM(data)
      }
    })
  }
}

/*
cards.forEach(element => {
  cardContainer.removeChild(element)
})
*/
