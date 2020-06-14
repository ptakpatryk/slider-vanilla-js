import * as domElements from './domElements';
import * as UI from './ui';
import { state } from './main';
import { generateImageUrl } from './utilities';
import { updateSliderItems } from './ui';

let currentPage = 1;
let elementsPerPage = 5;
let numberOfElements;
let maxPages;

export const updatePhotoWidth = () => {
  UI.changePhotoDisplay(elementsPerPage);
};

export const sliderInit = () => {
  numberOfElements = state.photosInitUrl.length;
  const items = state.photosInitUrl.map((el) => generateImageUrl(el, 'normal'));
  updateSliderItems(items, domElements.sliderContent);
  updateItemsInSlider();
  updatePhotoWidth();
};

export const changePage = (method) => {
  switch (method) {
    case 'next':
      UI.moveSlide('next', elementsPerPage);
      break;
    case 'prev':
      UI.moveSlide('prev', elementsPerPage);
      break;
    default:
      return;
  }
};

export const moveSlideOnKeydown = (e) => {
  if (e.keyCode === 39) {
    changePage('next');
  }
  if (e.keyCode === 37) {
    changePage('prev');
  }
};

export const updateItemsInSlider = () => {
  if ((window.innerWidth < 500) & (elementsPerPage !== 3)) {
    elementsPerPage = 3;
    updatePhotoWidth();
  }
  if ((window.innerWidth > 500) & (elementsPerPage === 3)) {
    elementsPerPage = 5;
    updatePhotoWidth();
  }
};
