import { Display } from './Display.js'

export const sortElements = {
  cardSorter: function (normal, byLike, byDate, byTitle) {
    normal.forEach(i => new Display(i))
    const sortPhoto = document.getElementById('sort-photo')
    sortPhoto.addEventListener('change', () => {
      if (sortPhoto.value === 'trend') {
        sortPhoto.remove(this.normal)
        byLike.forEach(i => new Display(i))
      }
      if (sortPhoto.value === 'date') {
        byDate.forEach(i => new Display(i))
      }
      if (sortPhoto.value === 'title') {
        byTitle.forEach(i => new Display(i))
      }
    })
  }
}
