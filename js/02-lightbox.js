import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const newLi = `
                <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt= "${item.description}" />
</a>`;

  galleryContainer.insertAdjacentHTML("beforeend", newLi);
});

// 2 CZESC ZADANIA i 4 CZESC ZADANIA

galleryContainer.addEventListener("click", (event) => {
  let originPhoto = event.target.getAttribute("data-source");
  const instance = basicLightbox.create(`
  <div class="modal">
     <img src="${originPhoto}">
  </div>
`);

  instance.show();

  console.log(event.target.getAttribute("data-source"));
});

console.log(galleryItems);
