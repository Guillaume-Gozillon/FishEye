export class VideoMedia {
  constructor (media) {
    this.videoDOM = this.buildVideo(media)
  }

  buildVideo (media) {
    const videoContent = document.createElement('div')
    videoContent.classList.add('picture-photographer_presentation')
    videoContent.innerHTML = `
      <div class="wrapper">
        <video class="video-page" alt="" preload loop autoplay>  
          <source src="./img/${media.video}" type="video/mp4">
        </video>
      </div>
      <div class="text-presentation">
        <p>${media.name}</p>
        <div class="price-and-count">
          <p class="yep">${media.price}€</p>
          <p class="paddeur">${media.likes}</p>
          <p class="hearth">❤</p>
        </div>
      </div>`
    return videoContent
  }
}
