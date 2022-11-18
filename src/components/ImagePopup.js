function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup popup_type_photo ${card ? 'popup_opened' : ''}`} aria-label="popup">
      <div className="popup__container popup__container_photo">
        <button aria-label="closeButton" type="button" className="popup__button popup__button_close button" onClick={onClose}></button>
        <figure className="popup__figure">
          <img src={card?.link} alt={card?.name} className="popup__image" />
          <figcaption className="popup__caption">{card?.name}</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default ImagePopup
