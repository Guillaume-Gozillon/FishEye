import { ImageMedia } from './image.class.js'
import { VideoMedia } from './video.class.js'

export class FactoryMediaRecup {
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
    }
  }
  // Créer un remove()
}
