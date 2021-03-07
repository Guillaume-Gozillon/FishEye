/* eslint-disable eqeqeq */
export class SortByFilter {
  constructor (media) {
    this.media = media
  }

  sortByDate () {
    const sortPhoto = document.getElementById('sort-photo')
    if (sortPhoto.value == 'date') {
      this.mediaAgain.sort(function (a, b) {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateA - dateB
      })
    }
  }

  sortByLikes () {
    const sortPhoto = document.getElementById('sort-photo')
    if (sortPhoto.value == 'likes') {
      return this.mediaAgain.sort((m1, m2) => {
        if (m1.likes < m2.likes) return 1
        if (m1.likes > m2.likes) return -1
        return 0
      })
    }
  }

  sortByTitle () {
    const sortPhoto = document.getElementById('sort-photo')
    if (sortPhoto.value == 'title') {
      sortPhoto.sort(function (a, b) {
        const titleA = a.name.toLowerCase()
        const titleB = b.name.toLowerCase()
        if (titleA < titleB) return -1
        if (titleA > titleB) return 1
        // eslint-disable-next-line no-undef
        return dateA - dateB
      })
    }
  }
}
