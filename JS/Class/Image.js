export class ImageMedia {
  constructor (media) {
    this.imageDOM = this.buildImage(media)
  }

  buildImage (media) {
    console.log(media.likes + 100);
    const imageContent = document.createElement('div')
    imageContent.classList.add('picture-photographer_presentation')
    imageContent.insertAdjacentHTML('afterbegin', `
      <div class="wrapper">
        <img class="img-page" src="/img/${media.image}" alt="img">
      </div>
      <div class="text-presentation">
        <p>${media.name}</p>
      <div class="price-and-count">
        <p>${media.price}€</p>
        <p class="paddeur">${media.likes + 100} ❤</p>
      </div>`)
    return imageContent
  }
}
