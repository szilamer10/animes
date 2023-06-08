import React from 'react';

const LogoImage = () => {
  const imagePath = process.env.PUBLIC_URL + '/img/logo_1.jpg';

  return (
    <div>
      <img src={imagePath} alt="My Image" />
    </div>
  );
};
const SearchImage = () => {
  const imagePath2 = process.env.PUBLIC_URL + '/img/search_icon.png';
  return (
    <div className='customer_icons'>
      <img src={imagePath2} alt="Search icon" />
    </div>
  );
};

export { LogoImage, SearchImage };