/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
export class ImageMedia {
  constructor (media) {
    this.imageDOM = this.buildImage(media)
  }

  buildImage (media) {
    const content = document.createElement('div')
    content.classList.add('picture-photographer_presentation')
    content.innerHTML = `
    <div class="picture-photographer_presentation">
      <div class="wrapper">
      <img class="img-page" src="/img/${media.image}" alt="">
    </div>
    <div class="text-presentation">
      <p>${media.name}</p>
      <div class="price-and-count">
        <p>${media.price}€</p>
        <p class="paddeur">${media.likes} ❤</p>
      </div>
    </div>`
    return content
  }
}
