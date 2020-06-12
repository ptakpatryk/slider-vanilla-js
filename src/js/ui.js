import * as domElements from './domElements';

export const setSpinner = (container, remove) => {
  container.innerHTML = remove
    ? ''
    : `<div class='sk-circle'>
  <div class='sk-circle1 sk-child'></div>
  <div class='sk-circle2 sk-child'></div>
  <div class='sk-circle3 sk-child'></div>
  <div class='sk-circle4 sk-child'></div>
  <div class='sk-circle5 sk-child'></div>
  <div class='sk-circle6 sk-child'></div>
  <div class='sk-circle7 sk-child'></div>
  <div class='sk-circle8 sk-child'></div>
  <div class='sk-circle9 sk-child'></div>
  <div class='sk-circle10 sk-child'></div>
  <div class='sk-circle11 sk-child'></div>
  <div class='sk-circle12 sk-child'></div>
</div>`;
};

export const updateCattegoryClass = (e) => {
  domElements.categoryButtons.forEach((el) =>
    el.classList.remove('categories__item--active')
  );
  console.log(e.target.parentNode.classList.toggle('categories__item--active'));
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
