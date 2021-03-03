import { ImageMedia } from './image.class.js'
import { VideoMedia } from './video.class.js'

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
      } else if (media.video) {
        const videoMedia = new VideoMedia(media)
        console.log(mediaList)
        mediaList.push(videoMedia)
      }
    } console.log(mediaList)
  }
}
