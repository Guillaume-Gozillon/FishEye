import { FactoryMedia } from './FactoryMedia.js'
import { Lightbox } from './Lightbox.js'

export class Display {
  constructor (media) {
    const sectionHTML = document.getElementById('picture-photographer')

    this.factoryBuildDOM(media)
    sectionHTML.appendChild(this.factoryReadyForDOM)
  }

  factoryBuildDOM (media) {
    this.factoryReadyForDOM = new FactoryMedia(media).factoryClass
    console.log(this.factoryReadyForDOM)
  }
}
