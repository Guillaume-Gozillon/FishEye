export class ImageMedia {
  constructor (media) {
    this.imageDOM = this.buildImage(media)
  }

  buildImage (media) {
    const imageContent = document.createElement('div')
    imageContent.classList.add('picture-photographer_presentation')
    imageContent.innerHTML = `
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
    return imageContent
  }
}
