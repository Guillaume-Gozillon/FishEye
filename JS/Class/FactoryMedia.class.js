import { ImageMedia } from './Image.class.js'
import { VideoMedia } from './Video.class.js'

export class FactoryMedia {
  constructor (mediaSorted) {
    this.mediaSorted = mediaSorted
  }

  build () {
    const mediaList = []
    for (const media of this.mediaSorted) {
      if (media.image) {
        const imageMedia = new ImageMedia(media)
        mediaList.push(imageMedia)
        imageMedia.createHTML()
      } else if (media.video) {
        const videoMedia = new VideoMedia(media)
        mediaList.push(videoMedia)
        videoMedia.createHTML()
      }
    } return mediaList
  }
}
