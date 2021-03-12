import { Display } from './Display.js'

export const sortElements = {
  cardSorter: function (media) {
    media.forEach(i => new Display(i))
    const sortPhoto = document.getElementById('sort-photo')
    sortPhoto.addEventListener('change', () => {
      if (sortPhoto.value == 'trend') {
        console.log('OH', media)
        return media.sort((a, b) => b.likes - a.likes)
      }
    })
  }
}


