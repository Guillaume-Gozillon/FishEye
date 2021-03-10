/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
export class ImageMedia {
  constructor (media) {
    const element = this.createHTML()
    document.getElementById('picture-photographer').appendChild(element)
    this.name = media.name,
    this.id = media.id,
    this.photographerId = media.photographerId,
    this.image = media.image,
    this.tags = media.tags,
    this.likes = media.likes,
    this.date = media.date,
    this.price = media.price
  }

  createHTML () {
    const toTest = document.createElement('div')
    toTest.innerHTML = `
    <div class="picture-photographer_presentation">
      <div class="wrapper">
      <img class="img-page" src="/img/${this.image}" alt="">
    </div>
    <div class="text-presentation">
      <p>${this.name}</p>
      <div class="price-and-count">
        <p>${this.price}€</p>
        <p class="paddeur">${this.likes} ❤</p>
      </div>
    </div>`
  }
}
/*
export class ImageMedia {
  constructor (media) {
    const element = this.createHTML()
    document.getElementById('picture-photographer').appendChild(element)
    this.name = media.name,
    this.id = media.id,
    this.photographerId = media.photographerId,
    this.image = media.image,
    this.tags = media.tags,
    this.likes = media.likes,
    this.date = media.date,
    this.price = media.price
  }

  createHTML () {
    const toTest = document.createElement('div')
    toTest.innerHTML = `
    <div class="picture-photographer_presentation">
      <div class="wrapper">
      <img class="img-page" src="/img/${this.image}" alt="">
    </div>
    <div class="text-presentation">
      <p>${this.name}</p>
      <div class="price-and-count">
        <p>${this.price}€</p>
        <p class="paddeur">${this.likes} ❤</p>
      </div>
    </div>`
    return toTest
  }
}
*/