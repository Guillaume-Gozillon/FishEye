import { ImageMedia } from './Image.class.js'
import { VideoMedia } from './Video.class.js'

export class FactoryMedia {
  constructor (data) {
    this.data = data
  }

  build () {
    const photoArray = []
    console.log('Tableau des éléments :', photoArray)
    for (const media of this.data) {
      if (media.image) {
        const imageMedia = new ImageMedia(media)
        photoArray.push(imageMedia)
      } else if (media.video) {
        const videoMedia = new VideoMedia(media)
        photoArray.push(videoMedia)
        // videoMedia.createHTML()
      }
    } return photoArray
  }
}
