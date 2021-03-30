import { Likes } from '../components/likes.js'

export class ImageMedia {
  constructor (media) {

    this.truccc = this.buildImage(media)
    console.log(this.truccc);

    const sectionHTML = document.getElementById('picture-photographer')

    sectionHTML.appendChild(this.truccc)

    new Likes(this.truccc)
  }

  buildImage (media) {
    console.log(media)
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
        <p class="paddeur">${media.likes} ❤</p>
      </div>`)
    return imageContent
  }
}
// <p class="paddeur">${media.likes + 1000} ❤</p> parseInt(media.likes) + 1000
// <input id="number" type="number" value="${this.add()}">
