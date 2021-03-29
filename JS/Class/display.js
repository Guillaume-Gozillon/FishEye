/* eslint-disable no-new */
import { FactoryMedia } from './FactoryMedia.js'
import { Likes } from '../components/likes.js'

export class Display {
  constructor (media) {
    const sectionHTML = document.getElementById('picture-photographer')

    this.factoryBuildDOM(media)
    sectionHTML.appendChild(this.factoryReadyForDOM)
  }

  factoryBuildDOM (media) {
    this.factoryReadyForDOM = new FactoryMedia(media).factoryClass
  }

  otherLikes (data) {
    this.creatLikes = new Likes(data).buildLikes
  }
}
