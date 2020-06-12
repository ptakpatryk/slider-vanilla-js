export const generateImageUrl = (initUrl, size) => {
  switch (size) {
    case 'small':
      return initUrl + '_s.jpg';
    case 'normal':
      return initUrl + '_n.jpg';
    case 'large':
      return initUrl + '_c.jpg';
    case 'xLarge':
      return initUrl + '_b.jpg';
  }
};
