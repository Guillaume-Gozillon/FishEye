/* eslint-disable eqeqeq */
export class Modal {
  static init (data) {
    const bouton = document.getElementById('vignette-photographe')
    bouton.addEventListener('click', e => {
      if (e.target.classList == 'btn-contact') {
        // eslint-disable-next-line no-new
        new Modal(data)
      }
    })
  }

  constructor (media) {
    this.openModal = this.buildModal(media)
    document.body.appendChild(this.openModal)
  }

  closeModal () {
    console.log('test');
    this.openModal.classList.add('fadeOut')

    window.setTimeout(() => {
      this.openModal.remove(this.openModal)
    }, 500)
  }

  buildModal (media) {
    this.modalDOM = document.createElement('div')
    this.modalDOM.classList.add('modal__container')
    this.modalDOM.insertAdjacentHTML('afterbegin', `
    <div class="open-modal">
      <h1>Contactez moi <br> ${media[0].name}</h1>
      <button class="modal__close">Fermer</button>
    </div>
    <div class="formData">
      <label for="firstname">Prénom</label>
      <input type="text" id="firstname" name="firstname"/>
      <label for="surname">Nom</label>
      <input type="text" id="surname" name="surname"/>
      <label for="mail">Mail</label>
      <input type="text" id="mail" name="mail"/>
      <label for="message">Votre message :</label>
      <input type="text" class="message" id="message" name="message"/>
    </div>
    <input class="btn-submit" type="submit" class="button" value="Envoyer"/>
    `)
    this.modalDOM.querySelector('.modal__close').addEventListener('click', this.closeModal.bind(this))
    return this.modalDOM
  }
}
