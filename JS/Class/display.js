import { FactoryMedia } from './FactoryMedia.class.js'

export const display = {
  // ID + DOM
  printElement: function (id, text) {
    const element = document.getElementById(id)
    element.innerHTML = text
  },
  initDOM: function (data) {
    const domElement = new FactoryMedia(data)
    domElement.build()
  },
  trieLesCartes: function (data) {
    const domElement = new FactoryMedia(data)
    domElement.build()
    const sortPhoto = document.getElementById('sort-photo')
    sortPhoto.addEventListener('change', () => {
      if (sortPhoto.value == 'trend') {
        console.log('TEST :', data)
        data.sort((a, b) => b.likes - a.likes)
        const domElement = new FactoryMedia(data)
        domElement.build()
      }
    })
  }
}
