import axios from 'axios';
import { generateImageUrl, toggleClass } from './utilities';
import * as UI from './ui';
import '../style/style.scss';
import * as domElements from './domElements';

const API_KEY = 'cf869541db12017a0e8275066d961842';

function parseXml(xmlStr) {
  return new window.DOMParser().parseFromString(xmlStr, 'text/xml');
}

let photosInitUrl;

const getAlbum = () => {
  axios
    .get(
      `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${API_KEY}&gallery_id=72157655899998382`
    )
    .then((res) => parseXml(res.data))
    .then((response) => {
      const photos = Array.from(response.querySelectorAll('photo'));
      photosInitUrl = photos.map(
        ({ attributes: { id, secret, server } }) =>
          `https://live.staticflickr.com/${server.nodeValue}/${id.nodeValue}_${secret.nodeValue}`
      );
      const smallImages = photosInitUrl.map((el) =>
        generateImageUrl(el, 'normal')
      );
    })
    .catch((err) => console.log(err));
};

getAlbum();

console.log(domElements.categoryButtons);

// domElements.categoryButtons.forEach((el) =>
//   el.addEventListener('click', () =>
//     toggleClass(el, 'categories__item--active')
//   )
// );

domElements.categoryButtons.forEach((el) =>
  el.addEventListener('click', UI.updateCattegoryClass)
);
