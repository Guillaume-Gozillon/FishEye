import { ImageMedia } from './image.class.js'
import { VideoMedia } from './video.class.js'

export class FactoryMedia {
  constructor (mediaSorted) {
    this.mediaSorted = mediaSorted
  }

  build () {
    let mediaList = []
    console.log(mediaList)
    for (const media of this.mediaSorted) {
      if (media.image) {
        const imageMedia = new ImageMedia(media)
        console.log(imageMedia)
        mediaList.push(imageMedia)
      } else if (media.video) {
        const videoMedia = new VideoMedia(media)
        mediaList.push(videoMedia)
        videoMedia.createHTML()
      }
    }
    return mediaList
  }
}

/*
export class FactoryMedia {
  constructor (mediaSorted) {
    this.mediaSorted = mediaSorted
  }

  build () {
    const mediaList = []
    console.log(mediaList)
    for (const media of this.mediaSorted) {
      if (media.image) {
        const imageMedia = new ImageMedia(media)
        mediaList.push(imageMedia)
      } else if (media.video) {
        const videoMedia = new VideoMedia(media)
        mediaList.push(videoMedia)
        videoMedia.createHTML()
      }
    }
    console.log('Liste après boucle :', mediaList)
  }
}

*/
