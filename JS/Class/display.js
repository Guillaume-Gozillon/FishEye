export class Display {
  constructor (media) {
    const section = document.getElementById('picture-photographer')
    this.info = this.infoDOM(media)
    section.appendChild(this.info)
    // this.image = this.contentDOM(media)
    // section.appendChild(this.image)
  }

  /**
   * expliquer cette ligne..
   * @param {JSON} resultMedia fetch JSON data
   * @return {HTMLElement}
   */

  infoDOM (media) {
    const dom = document.createElement('div')
    dom.classList.add('text-presentation')
    dom.innerHTML = `
    <p>${media.name}</p>
    <div class="price-and-count">
      <p>${media.price}€</p>
      <p class="paddeur">${media.likes} ❤</p>
    </div>`
    return dom
  }

  contentDOM (media) {
    const content = document.createElement('div')
    content.classList.add('picture-photographer_presentation')
    content.innerHTML = `
    <div class="wrapper">
    <img class="img-page" src="/img/${media.image}" alt="">`
    return content
  }

  initDOM (data) {
    const factory = new FactoryMedia(data)
    factory.build(data)
    this.cardSorter(data)
  }

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
      // this.cleanCard()
      if (sortPhoto.value == 'trend') {
        console.log('TEST :', media)
        media.sort((a, b) => b.likes - a.likes)
        this.buildDOM(media)
      }
    })
  }
}
