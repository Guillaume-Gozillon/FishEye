import { FactoryMedia } from './FactoryMedia.class.js'

export const display = {

  printElement (id, text) {
    const element = document.getElementById(id)
    element.innerHTML = text
  },
  initDOM (data) {
    new FactoryMedia(data).build()
  },
  cardSorter (data) {
    const sortPhoto = document.getElementById('sort-photo')
    sortPhoto.addEventListener('change', () => {
      if (sortPhoto.value == 'trend') {
        console.log('TEST :', data)
        data.sort((a, b) => b.likes - a.likes)
        return this.initDOM(data)
      }
    })
  }
}
