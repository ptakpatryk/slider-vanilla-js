import * as domElements from './domElements';
import { showItem, hideItem } from './utilities';

const clientId =
  '917089682947-af68qq1cqr1es6hbrprjc78v6876h4at.apps.googleusercontent.com';
const redirectUri = 'https://ptakpatryk.github.io/Gallery_GPhotos/';

export const login = () => {
  const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&scope=https://www.googleapis.com/auth/photoslibrary&client_id=${clientId}&redirect_uri=${redirectUri}&login_hint=patrickbird330@gmail.com`;
  window.location.href = url;
  getToken();
};

export const logout = () => {
  sessionStorage.clear();
  checkTokenAvailability();
  domElements.content.innerHTML = '';
};

export const checkTokenAvailability = () => {
  const fragmentString = location.hash.substring(1);
  const params = {};
  const regex = /([^&=]+)=([^&]*)/g;
  let m;
  while ((m = regex.exec(fragmentString))) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }
  if (Object.keys(params).length > 0) {
    // If token is in query string
    sessionStorage.setItem('oauth2-params', JSON.stringify(params));
    // Remove hash
    history.replaceState(null, null, ' ');
    // Update dashboard
    showItem(domElements.btnFetch);
    showItem(domElements.btnLogout);
    showItem(domElements.submitPhotoForm);
    hideItem(domElements.btnLogin);
  } else {
    // Update dashboard
    hideItem(domElements.btnFetch);
    hideItem(domElements.btnLogout);
    hideItem(domElements.submitPhotoForm);
    showItem(domElements.btnLogin);
  }
};

export const getToken = () => {
  if (sessionStorage.getItem('oauth2-params')) {
    const params = JSON.parse(sessionStorage.getItem('oauth2-params'));
    return params['access_token'];
  }
};
