(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-video-open]'),
    closeModalBtn: document.querySelector('[data-video-close]'),
    modal: document.querySelector('[data-video]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-video');
  }
})();
