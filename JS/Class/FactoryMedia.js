import { ImageMedia } from './Image.js'
import { VideoMedia } from './Video.js'

export class FactoryMedia {
  constructor (media) {
    this.isImageOrVideo(media)
  }

  isImageOrVideo (media) {
    if (media.image) {
      this.factoryClass = new ImageMedia(media).imageDOM
    } else if (media.video) {
      this.factoryClass = new VideoMedia(media).videoDOM
    }
  }
}
