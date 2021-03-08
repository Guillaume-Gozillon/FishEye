import { FactoryMedia } from './FactoryMedia.class.js'

export const display = {

  initDOM (data) {
    const theOther = new FactoryMedia(data).build()
    console.log(theOther)
  },
  cardSorter (data) {
    const sortPhoto = document.getElementById('sort-photo')
    sortPhoto.addEventListener('change', (e) => {
      if (sortPhoto.value == 'trend') {
        console.log('TEST :', data)
        data.sort((a, b) => b.likes - a.likes)
        e.preventDefault()
        return this.initDOM(data)
      }
    })
  }
}
