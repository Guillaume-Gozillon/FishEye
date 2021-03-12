import { FactoryMedia } from './FactoryMedia.js'

export class Display {
  constructor (media) {
    const sectionHTML = document.getElementById('picture-photographer')

    this.factoryBuildDOM(media)
    sectionHTML.appendChild(this.factoryReadyForDOM)
  }

  factoryBuildDOM (media) {
    this.factoryReadyForDOM = new FactoryMedia(media).factoryClass
  }
}

// -------------------- Pour plus tard --------------------
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

  cardSorter (media) {
    const sortPhoto = document.getElementById('sort-photo')
    sortPhoto.addEventListener('change', () => {
      if (sortPhoto.value == 'trend') {
        console.log('TEST :', media)
        media.sort((a, b) => b.likes - a.likes)
        this.buildDOM(media)
      }
    })
  }
  */
