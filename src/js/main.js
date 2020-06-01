import '../style/style.scss';
import { checkTokenAvailability, login, getToken, logout } from './auth';
import * as UI from './ui';
import * as domElements from './domElements';
import { showItem, hideItem } from './utilities';

checkTokenAvailability();

const token = getToken();

const getAlbums = () => {
  UI.setSpinner(domElements.content);
  fetch(`https://photoslibrary.googleapis.com/v1/albums`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((response) => {
      UI.updateAlbumList(domElements.content, response.albums, openAlbum);
    })
    .catch((err) => console.error(err));
};

const openAlbum = (albumId) => {
  UI.setSpinner(domElements.content);
  fetch(`https://photoslibrary.googleapis.com/v1/mediaItems:search`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      pageSize: '100',
      albumId,
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      UI.updateGalleryItems(domElements.content, response.mediaItems, albumId);
    })
    .catch((err) => console.error(err));
};

const submitPhoto = (e) => {
  e.preventDefault();
  const sendMediaToPhotos = (uploadToken) => {
    fetch('https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        newMediaItems: [
          {
            description: 'photoDescription',
            simpleMediaItem: {
              fileName: 'filename',
              uploadToken: uploadToken,
            },
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const sendBinaryMedia = (binaryMedia, mimeType) => {
    fetch('https://photoslibrary.googleapis.com/v1/uploads', {
      method: 'POST',
      headers: {
        'Content-type': 'application/octet-stream',
        Authorization: `Bearer ${token}`,
        'X-Goog-Upload-Content-Type': mimeType,
        'X-Goog-Upload-Protocol': 'raw',
      },
      body: binaryMedia,
    })
      .then((res) => res.text())
      .then((uploadToken) => {
        sendMediaToPhotos(uploadToken);
      })
      .catch((err) => console.error(err));
  };

  const file = domElements.submitPhotoInput.files[0];
  file.arrayBuffer().then((binaryMediaRes) => {
    sendBinaryMedia(binaryMediaRes, file.type);
  });
};

domElements.submitPhoto.addEventListener('click', submitPhoto);
domElements.btnLogin.addEventListener('click', login);
domElements.btnLogout.addEventListener('click', logout);
domElements.btnFetch.addEventListener('click', getAlbums);
