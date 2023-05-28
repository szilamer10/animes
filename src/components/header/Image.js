import React from 'react';

const LogoImage = () => {
  const imagePath = process.env.PUBLIC_URL + '/img/animelogo.jpg';

  return (
    <div>
      <img src={imagePath} alt="My Image" />
    </div>
  );
};
const SearchImage = () => {
  const imagePath2 = process.env.PUBLIC_URL + '/img/search_icon.png';
  return (
    <div>
      <img src={imagePath2} alt="Search icon" />
    </div>
  );
};

export { LogoImage, SearchImage };