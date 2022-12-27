function openModal() {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
}

openModal();

//* ============= Solution #1 =============

let listContent = {
  free: {
    name: 'Mobileapp.loyaout',
    license: 'Free',
    author: 'Mobile Market App.com',
    data: '21.02.2022',
    os: 'Windows',
    language: 'English',
    size: '4.16 MB',
    downloads: '964',
  },
  pay: {
    name: 'Mobileapp.loyaout',
    license: 'Pay',
    author: 'Mobile Market App.com',
    data: '27.12.2022',
    os: 'Windows, macOS, Linux',
    language: 'English, Ukrainian',
    size: '5.20 MB',
    downloads: '128',
  },
};

const refs = {
  btnPlanFree: document.querySelector("[value='free']"),
  btnPlanPay: document.querySelector("[value='pay']"),

  name: document.querySelector('.js-name'),
  license: document.querySelector('.js-license'),
  author: document.querySelector('.js-author'),
  data: document.querySelector('.js-data'),
  os: document.querySelector('.js-os'),
  language: document.querySelector('.js-language'),
  size: document.querySelector('.js-size'),
  downloads: document.querySelector('.js-downloads'),
};

refs.btnPlanFree.addEventListener('click', () => {
  refs.name.textContent = listContent.free.name;
  refs.license.textContent = listContent.free.license;
  refs.author.textContent = listContent.free.author;
  refs.data.textContent = listContent.free.data;
  refs.os.textContent = listContent.free.os;
  refs.language.textContent = listContent.free.language;
  refs.size.textContent = listContent.free.size;
  refs.downloads.textContent = listContent.free.downloads;
});

refs.btnPlanPay.addEventListener('click', () => {
  refs.name.textContent = listContent.pay.name;
  refs.license.textContent = listContent.pay.license;
  refs.author.textContent = listContent.pay.author;
  refs.data.textContent = listContent.pay.data;
  refs.os.textContent = listContent.pay.os;
  refs.language.textContent = listContent.pay.language;
  refs.size.textContent = listContent.pay.size;
  refs.downloads.textContent = listContent.pay.downloads;
});

//* ============= Solution #2 =============

// function hiddenList() {
//   let list = document.querySelectorAll('.js-pay');
//   list.forEach(element => {
//     element.classList.add('js-hidden');
//   });
// }

// hiddenList();

// const refs = {
//   listComponents: document.querySelectorAll('.text-down'),

//   btnPlanFree: document.querySelector("[value='free']"),
//   btnPlanPay: document.querySelector("[value='pay']"),
// };

// refs.btnPlanPay.addEventListener('click', () => showPayList('js-pay'));

// function showPayList(nameSelector) {
//   refs.listComponents.forEach(element => {
//     if (element.classList.contains(nameSelector)) {
//       element.classList.remove('js-hidden');
//     } else {
//       element.classList.add('js-hidden');
//     }
//   });
// }

// refs.btnPlanFree.addEventListener('click', () => closePayList('js-free'));

// function closePayList(nameSelector) {
//   refs.listComponents.forEach(element => {
//     if (element.classList.contains(nameSelector)) {
//       element.classList.remove('js-hidden');
//     } else {
//       element.classList.add('js-hidden');
//     }
//   });
// }
