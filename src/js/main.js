import axios from 'axios';
import { generateImageUrl } from './utilities';
import {
  sliderInit,
  changePage,
  updatePhotoWidth,
  moveSlideOnKeydown,
  updateItemsInSlider,
} from './slider';
import * as UI from './ui';
import '../style/style.scss';
import * as domElements from './domElements';

const API_KEY = 'cf869541db12017a0e8275066d961842';

function parseXml(xmlStr) {
  return new window.DOMParser().parseFromString(xmlStr, 'text/xml');
}

export const state = {
  photosInitUrl: [],
};

const getAlbum = (galleryId) => {
  UI.setSpinner();

  axios
    .get(
      `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${API_KEY}&gallery_id=${galleryId}`
    )
    .then((res) => parseXml(res.data))
    .then((response) => {
      UI.setSpinner();
      const photos = Array.from(response.querySelectorAll('photo'));
      state.photosInitUrl = photos.map(
        ({ attributes: { id, secret, server } }) =>
          `https://live.staticflickr.com/${server.nodeValue}/${id.nodeValue}_${secret.nodeValue}`
      );
      UI.initCurrentImage(generateImageUrl(state.photosInitUrl[0], 'xLarge'));

      sliderInit();
    })
    .catch((err) => console.log(err));
};

// Init album
getAlbum('72157714684197443');

// Event Listeners
domElements.categoryButtons.forEach((el) => {
  el.addEventListener('click', UI.updateCattegoryClass);
  el.addEventListener('click', (e) => getAlbum(e.target.parentNode.dataset.id));
});
domElements.sliderControls.forEach((el) =>
  el.addEventListener('click', (e) => changePage(e.currentTarget.classList[1]))
);
domElements.sliderContent.addEventListener('click', UI.updateCurrentImage);
domElements.currentImage.addEventListener('click', (e) =>
  UI.lightboxPhotoUpdate(e)
);
document.body.addEventListener('keydown', UI.hideLightboxOnKeydown);
document.body.addEventListener('keydown', (e) => moveSlideOnKeydown(e));

[domElements.ligthboxBackdrop, domElements.closeLightboxBtn].forEach((el) =>
  el.addEventListener('click', UI.hideLightbox)
);

// update photo width and number of items in slider on resize
window.addEventListener('resize', (e) => {
  updatePhotoWidth();
  updateItemsInSlider();
});
