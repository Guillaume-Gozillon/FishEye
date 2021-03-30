export class ImageMedia {
  constructor (media) {
    this.imageDOM = this.buildImage(media)
  }

  counterLike (media) {
    console.log('media', media);
    let toCatch = document.querySelectorAll('.paddeur')
    let ids = toCatch.classList
    toCatch.addEventListener('click', function() {
      let result = ids.toggle('fdsfds')
      //toCatch = media + 1
      if (result) {
        toCatch.textContent = 'It works'
      } else {
        toCatch.textContent = 'It Dont'
      }
    })
  }

  buildImage (media) {
    console.log(media.likes + 1000)
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
        <p class="paddeur">${media.likes + 1000}</p>
      </div>`)
    return imageContent
  }
}
