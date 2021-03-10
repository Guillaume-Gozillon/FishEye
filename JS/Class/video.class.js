/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
export class VideoMedia {
  constructor (media) {
    this.name = media.name,
    this.id = media.id,
    this.photographerId = media.photographerId,
    this.video = media.video,
    this.tags = media.tags,
    this.likes = media.likes,
    this.date = media.date,
    this.price = media.price
  }

  createHTML () {
    document.getElementById('picture-photographer').innerHTML += `
    <div class="picture-photographer_presentation">
      <div class="wrapper">
      <video class="img-page" alt="" preload loop autoplay>  
      <source src="/img/${this.video}" type="video/mp4">
    </video>
      </div>
      <div class="text-presentation">
        <p>${this.name}</p>
        <div class="price-and-count">
            <p>${this.price}€</p>
            <p class="paddeur">${this.likes} ❤</p>
        </div>
    </div>
</div>
      `
  }
}
