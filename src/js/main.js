import axios from 'axios';
import { generateImageUrl } from './utilities';
import { sliderInit, changePage } from './slider';
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

const getAlbum = () => {
  UI.setSpinner(domElements.spinner);

  axios
    .get(
      `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${API_KEY}&gallery_id=72157655899998382`
    )
    .then((res) => parseXml(res.data))
    .then((response) => {
      UI.setSpinner(domElements.spinner, true);
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

getAlbum();

domElements.categoryButtons.forEach((el) =>
  el.addEventListener('click', UI.updateCattegoryClass)
);
domElements.sliderControls.forEach((el) =>
  el.addEventListener('click', (e) => changePage(e.currentTarget.classList[1]))
);
domElements.sliderContent.addEventListener('click', UI.updateCurrentImage);
