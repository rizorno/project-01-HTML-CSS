const { backdropVideo, openModalVideoBtn, closeModalVideoBtn, modalVideo } = {
  backdropVideo: document.querySelector('.backdrop-video'),
  openModalVideoBtn: document.querySelector('[data-video-open]'),
  closeModalVideoBtn: document.querySelector('[data-video-close]'),
  modalVideo: document.querySelector('[data-video]'),
};

openModalVideoBtn.addEventListener('click', openModalVideo);
closeModalVideoBtn.addEventListener('click', closeModalVideo);

function openModalVideo() {
  modalVideo.classList.toggle('is-hidden-video');
  document.querySelector('body').classList.toggle('js-body-scroll');
  backdropVideo.addEventListener('click', closeModalVideoClick);
  window.addEventListener('keydown', closeModalVideoEsc);
}

function closeModalVideo() {
  modalVideo.classList.toggle('is-hidden-video');
  document.querySelector('body').classList.toggle('js-body-scroll');
  backdropVideo.removeEventListener('click', closeModalVideoClick);
  window.removeEventListener('keydown', closeModalVideoEsc);
}

function closeModalVideoClick(e) {
  if (e.target !== backdropVideo) {
    return;
  }
  closeModalVideo();
}

function closeModalVideoEsc(e) {
  if (e.code === 'Escape') {
    closeModalVideo();
  }
  return;
}
