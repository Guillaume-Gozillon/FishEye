import { ImageMedia } from './Image.class.js'
import { VideoMedia } from './Video.class.js'

export class FactoryMedia {
  constructor (data) {
    this.data = data
  }

  build () {
    for (const media of this.data) {
      if (media.image) {
        const imageMedia = new ImageMedia(media)
        imageMedia.createHTML()
      } else if (media.video) {
        const videoMedia = new VideoMedia(media)
        videoMedia.createHTML()
      }
    }
  }
}
