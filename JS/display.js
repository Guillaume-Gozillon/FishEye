import { FactoryMedia } from './FactoryMedia.class.js'

export const display = {
  trieLesCartes (mediaSorted) {
    const domElement = new FactoryMedia(mediaSorted)
    const sortPhoto = document.getElementById('sort-photo')
    sortPhoto.addEventListener('change', () => {
      if (sortPhoto.value == 'trend') {
        console.log('TEST :', mediaSorted)
        mediaSorted.sort((a, b) => b.likes - a.likes)
        domElement.mediaSorted = mediaSorted
        // Fix error
        domElement.build()
      }
    })
  }
}
