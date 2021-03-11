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

  // <i class="fas fa-heart">

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

contentDOM (media) {
  const content = document.createElement('div')
  content.classList.add('picture-photographer_presentation')
  content.innerHTML = `
  <section id="picture-photographer" class="picture-photographer">
  <div class="wrapper">
  <img class="img-page" src="/img/${media.image}" alt="">`
  return content
}

infoDOM (media) {
  const dom = document.createElement('div')
  dom.classList.add('text-presentation')
  dom.innerHTML = `
  <p>${media.name}</p>
  <div class="price-and-count">
    <p>${media.price}€</p>
    <p class="paddeur">${media.likes} ❤</p>
  </div>
  </section>`
  return dom
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