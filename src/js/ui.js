import * as domElements from './domElements';
import { state } from './main';

export const setSpinner = () => {
  domElements.spinner.classList.toggle('spinner--active');
};

export const updateCattegoryClass = (e) => {
  domElements.categoryButtons.forEach((el) =>
    el.classList.remove('categories__item--active')
  );
  e.target.parentNode.classList.toggle('categories__item--active');
};

const photoMarkup = (url) => `
    <div class="slider__photo" style="background-image: url(${url});"></div>
`;

export const updateSliderItems = (photosUrls, container) => {
  const content = photosUrls.map((photoUrl) => photoMarkup(photoUrl)).join('');
  container.innerHTML = content;
};

export const updateCurrentImage = (e) => {
  const clickedImage = e.target;
  if (clickedImage.classList.contains('slider__photo')) {
    // Update current photo and fetch bigger resolution
    const regex = /_n/;
    domElements.currentImage.style.backgroundImage = clickedImage.style.backgroundImage.replace(
      regex,
      '_b'
    );
  }
};

export const initCurrentImage = (url) => {
  domElements.currentImage.style.backgroundImage = `url(${url})`;
};

export const changePhotoDisplay = (numOfPhotosToShow) => {
  const photosArray = document.querySelectorAll('.slider__photo');
  photosArray.forEach((photo) => {
    photo.style.minWidth =
      photoWidthCalculate(
        domElements.sliderContent.getBoundingClientRect().width,
        numOfPhotosToShow
      ) + 'px';
  });
};

const photoWidthCalculate = (containerWidth, numOfPhotosToShow) => {
  const settedMargin = 10;
  const photosWithMargin = numOfPhotosToShow - 2;
  const marginsCount = photosWithMargin + 1;
  const photoWidth =
    (containerWidth - marginsCount * settedMargin) / numOfPhotosToShow;

  return photoWidth;
};

let moveOffsetContainer = 0;

export const moveSlide = (direction, elementsPerPage) => {
  const photoWidth = document
    .querySelector('.slider__photo')
    .getBoundingClientRect().width;
  let move = photoWidth + 10;
  if (direction === 'next') {
    move = -move;
  }

  if (direction === 'prev' && moveOffsetContainer === 0) {
    // Move to the end
    const elementsNum = state.photosInitUrl.length - elementsPerPage;
    domElements.sliderContent.style.transform = `translateX(-${
      move * elementsNum
    }px)`;
    moveOffsetContainer = -(move * elementsNum);
  } else if (
    direction === 'next' &&
    -moveOffsetContainer > photosContainerWidth(photoWidth, elementsPerPage)
  ) {
    // Move to the start
    moveOffsetContainer = 0;
    domElements.sliderContent.style.transform = `translateX(0px)`;
  } else {
    // Make normal move
    moveOffsetContainer += move;
    domElements.sliderContent.style.transform = `translateX(${moveOffsetContainer}px)`;
  }
};

// Calculate width of all photos in slider with margins
const photosContainerWidth = (photoWidth, elementsPerPage) => {
  const elementsNum = state.photosInitUrl.length - elementsPerPage;
  const elementsMargin = (elementsNum - 1) * 10;

  return photoWidth * elementsNum + elementsMargin;
};

export const lightboxPhotoUpdate = (e) => {
  // Regex takes url from backgroundImage
  const regex = /https.+.jpg/;
  const clickedElementUrl = e.target.style.backgroundImage.match(regex)[0];
  domElements.lightboxImg.src = clickedElementUrl;
  // Timeout helps avoid visible image change
  setTimeout(() => {
    domElements.lightbox.classList.toggle('lightbox--active');
  }, 100);
};

export const hideLightboxOnKeydown = (e) => {
  if (e.keyCode === 27) {
    hideLightbox();
  }
};

export const hideLightbox = () => {
  domElements.lightbox.classList.remove('lightbox--active');
};
