const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("hide");
}
menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);


const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (event) => {
  const clickedImage = event.target.closest("img");
  if (!clickedImage) return; 
  const src = clickedImage.getAttribute("src");
  const alt = clickedImage.getAttribute("alt");


  const largeImageSrc = src.split("-")[0] + "-full.jpeg";

  const modal = document.createElement("dialog");
  modal.classList.add("image-viewer");
  modal.innerHTML = `
    <img src="${largeImageSrc}" alt="${alt}">
    <button class="close-viewer">X</button>
  `;

  document.body.appendChild(modal);
  modal.showModal();


  const closeButton = modal.querySelector(".close-viewer");
  closeButton.addEventListener("click", () => modal.close());

 
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });

  modal.addEventListener("close", () => modal.remove());
});
