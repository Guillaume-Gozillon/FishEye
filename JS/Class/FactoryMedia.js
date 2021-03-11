import { ImageMedia } from './Image.js'
import { VideoMedia } from './Video.class.js'

export class FactoryMedia {
  constructor (media) {
    this.isImageOrVideo(media)
  }

  isImageOrVideo (media) {
    if (media.image) {
      this.factoryToDOM = new ImageMedia(media).imageDOM
    } else if (media.video) {
      this.factoryToDOM = new VideoMedia(media).videoDOM
    }
  }
}
