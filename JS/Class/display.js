import { FactoryMedia } from './FactoryMedia.class.js'

console.log(mediaList);

export const display = {
/*
  // ID + DOM
  elementShown: function (id, text) {
    // eslint-disable-next-line prefer-const
    let element = document.getElementById(id)
    element.innerHTML = text
  },
  */
  trieLesCartes: function (mediaSorted) {
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
  },
  supprimeAncienDom () {}
}
