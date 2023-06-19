
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const photoPalette = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (img) => `<div class="gallery__item">
    <a class="gallery__link" href="${img.original}">
      <img
        class="gallery__image"
        src="${img.preview}"
            data-source="${img.original}"
             alt="${img.description}"
      />
    </a>
  </div>`
  )
  .join("");

photoPalette.insertAdjacentHTML("afterbegin", markup);

console.log(galleryItems);

photoPalette.addEventListener("click", selectPhoto);

function selectPhoto(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">`
  );

  instance.show();
}

























// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// // PIERWSZA CZESC ZADANIA

// // Wskazuje na istniejący kontener galerii z html i za pomocą querySelector wywołuje ( przechwycam)

// const galleryContainer = document.querySelector(".gallery");

// // galleryContainer.append(galleryElements);

// galleryItems.forEach((item) => {
//   const newLi = `<div class="gallery__item">
//                   <a class="gallery__link">
//                     <img
//                       class="gallery__image"
//                       src="${item.preview}"
//                       data-source= "${item.original}"
//                       alt= "${item.description}"
//                       >
//                   </a>
//                 </div>`;
//   galleryContainer.insertAdjacentHTML("beforeend", newLi);
// });

// // 2 CZESC ZADANIA i 4 CZESC ZADANIA

// galleryContainer.addEventListener("click", (event) => {
//   let originPhoto = event.target.getAttribute("data-source");
//   const instance = basicLightbox.create(`
//   <div class="modal">
//      <img src="${originPhoto}">
//   </div>
// `);

//   instance.show();

//   console.log(event.target.getAttribute("data-source"));
// });

// // 3 CZESC ZADANIA- wgralem w html skrypty

// // console.log(galleryContainer);
// // console.log(galleryElements);
