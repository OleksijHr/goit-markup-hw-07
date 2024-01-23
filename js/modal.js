(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
// })();

// (() => {
//   const refs = {
//     frontImg: document.querySelector("[data-modal]"),
//   };

//   refs.closeFrontImg.addEventListener("click", toggleFrontImg);

//   function toggleFrontImg() {
//     refs.frontImg.classList.toggle("front-is-hidden");
//   }
// })();


// [data-modal] кинути після класів самої картинки
