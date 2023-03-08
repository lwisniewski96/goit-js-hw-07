// const createGalleryItems = () => {
//   const items = _.range(0, 14);
//   .map(() => {

// });
// console.log(createGalleryItems);
// }

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElements = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img
class="gallery__image"
src="${item.preview}"
data-source= "${item.original}"
alt= "${item.description}"



</a>
</div>`
  )
  .join("");

// const gallery = document.querySelector(".gallery");
// const imagesHTML = galleryItems.map(({preview, oryginal, descryption})=>{
// return "<div class="gallery__item"></div>
// }
// );

console.log(gallery);
console.log(galleryItems);
console.log(newGallery);
