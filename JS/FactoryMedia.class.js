import { ImageMedia } from './image.class.js'
import { VideoMedia } from './video.class.js'

export class FactoryMedia {
  constructor (mediaSorted) {
    const mediaList = []
    for (const key in mediaSorted) {
      if (mediaSorted[key].image) {
        const x = mediaSorted[key]
        const imageMedia = new ImageMedia(
          x.name,
          x.id,
          x.photographerId,
          x.image,
          x.tags,
          x.likes,
          x.date,
          x.price
        )
        mediaList.push(imageMedia)
        imageMedia.createHTML()
      } else if (mediaSorted[key]) {
        const y = mediaSorted[key]
        const videoMedia = new VideoMedia(
          y.name,
          y.id,
          y.photographerId,
          y.video,
          y.tags,
          y.likes,
          y.date,
          y.price
        )
        mediaList.push(videoMedia)
        videoMedia.createHTML()
      }
    }
  }
}
