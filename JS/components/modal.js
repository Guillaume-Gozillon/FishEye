/* eslint-disable eqeqeq */
export class Modal {
  static init () {
    const bouton = document.getElementById('vignette-photographe')
    bouton.addEventListener('click', e => {
      if (e.target.classList == 'btn-contact') {
        // eslint-disable-next-line no-new
        new Modal()
      }
    })
  }

  constructor () {
    console.log('YEP')
    this.testeu = this.openModal()
    document.body.appendChild(this.testeu)
  }

  openModal () {
    const modalDOM = document.createElement('div')
    modalDOM.classList.add('modal__container')
    modalDOM.insertAdjacentHTML('afterbegin', `
    <p>YEAH</p>`)
    return modalDOM
  }
}
