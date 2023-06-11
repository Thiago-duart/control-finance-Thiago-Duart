/* Desenvolva sua lógica aqui */
export function openAndCloseModal() {
    const modal = document.querySelector("#modal");
    const btnOpen = document.querySelector(".header__button");
    const iconClose = document.querySelector("#closeModal");
    const btnCancel = document.querySelector("#btnCancel");
  
    btnOpen.addEventListener("click", (e) => {
      e.preventDefault();
      modal.showModal();
    });
    const close = () => modal.close();
    iconClose.addEventListener("click", close);
    btnCancel.addEventListener("click", close);
  }
