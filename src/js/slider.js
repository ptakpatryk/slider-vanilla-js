import * as domElements from './domElements';
import { state } from './main';
import { generateImageUrl } from './utilities';
import { updateSliderItems } from './ui';

let currentPage = 1;
const elementsPerPage = 5;
let numberOfElements;
let maxPages;

export const sliderInit = () => {
  numberOfElements = state.photosInitUrl.length;
  maxPages = Math.floor(numberOfElements / elementsPerPage);

  const items = state.photosInitUrl.map((el) => generateImageUrl(el, 'normal'));
  const photosToShow = paginatePhotos(items, elementsPerPage, currentPage);
  updateSliderItems(photosToShow, domElements.sliderContent);
};

const paginatePhotos = (photos, numPerPage, page) => {
  page--;

  const start = numPerPage * page;
  const end = start + numPerPage;

  const paginatedPhotos = photos.slice(start, end);

  return paginatedPhotos;
};

export const changePage = (method) => {
  switch (method) {
    case 'next':
      if (currentPage === maxPages) {
        currentPage = 1;
      } else {
        currentPage++;
      }
      sliderInit();
      break;
    case 'prev':
      if (currentPage === 1) {
        currentPage = maxPages;
      } else {
        currentPage--;
      }
      sliderInit();
      break;
    default:
      return;
  }
};
