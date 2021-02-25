class VideoMedia {
  /**
       *
       * @param name
       * @param id
       * @param photographerId
       * @param video
       * @param tags
       * @param likes
       * @param date
       * @param price
       */

  constructor (name, id, photographerId, video, tags, likes, date, price) {
    this.name = name
    this.id = id
    this.photographerId = photographerId
    this.video = video
    this.tags = tags
    this.likes = likes
    this.date = date
    this.price = price
    console.log('VIDEO', this.video)
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
