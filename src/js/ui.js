import * as DOM from './domElements';
import { showItem, hideItem } from './utilities';

export const updateAlbumList = (container, list, openAlbumFn) => {
  console.log(container);
  const content = list.map(
    (el) =>
      `<figure class='album'>
      <img src=${el.coverPhotoBaseUrl} alt=${el.title} />
      <figcaption data-id=${el.id}>
        <h3 class='album__title'>${el.title}</h3>
        <p class='album__counter'>
          Photos: <span class='number'>${el.mediaItemsCount}</span>
        </p>
      </figcaption>
    </figure>`
  );
  container.innerHTML = `<section class='albums'>${content.join('')}</section>`;

  const albumsList = document.querySelectorAll('.album figcaption');
  albumsList.forEach((el) => {
    el.addEventListener('click', () => openAlbumFn(el.dataset.id));
    console.log(el.dataset.id);
  });
  console.log(albumsList);
};

export const updateGalleryItems = (container, list) => {
  const content = list.map(
    (el) =>
      `
       <figure class="photo">
            <img
              src=${el.baseUrl}
              alt=${el.filename}
            />
            <figcaption>
              <p>Added: <time>${el.mediaMetadata.creationTime.substring(
                0,
                10
              )}</time></p>
            </figcaption>
          </figure>
      `
  );

  const submitForm = `
  
  `;

  container.innerHTML = `<section class="gallery">
                ${content.join('')}
  </section>`;
};

export const setSpinner = (container) => {
  container.innerHTML = `
        <div class="sk-circle">
          <div class="sk-circle1 sk-child"></div>
          <div class="sk-circle2 sk-child"></div>
          <div class="sk-circle3 sk-child"></div>
          <div class="sk-circle4 sk-child"></div>
          <div class="sk-circle5 sk-child"></div>
          <div class="sk-circle6 sk-child"></div>
          <div class="sk-circle7 sk-child"></div>
          <div class="sk-circle8 sk-child"></div>
          <div class="sk-circle9 sk-child"></div>
          <div class="sk-circle10 sk-child"></div>
          <div class="sk-circle11 sk-child"></div>
          <div class="sk-circle12 sk-child"></div>
        </div>
        `;
};
