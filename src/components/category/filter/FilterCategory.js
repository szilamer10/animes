import React, { useState } from 'react'
import FilterContainer from './FilterContainer';

const FilterCategory = () => {
  const [openFilterContainer, setOpenFilterContainer] = useState(null)
  const [clickedFilterHover, setClickedFilterHover] = useState({
    Featured: false,
    Fantasy: false,
    Action: false,
    Comedy: false
  })
  const clickedFilter = (element) => {
    // console.log(element); // klikkelt filter
    setOpenFilterContainer(element);
    setClickedFilterHover(prevArrows => ({
      ...prevArrows,
      Featured: element === 'Featured' ? !prevArrows.Featured : false,
      Fantasy: element === 'Fantasy' ? !prevArrows.Fantasy : false,
      Action: element === 'Action' ? !prevArrows.Action : false,
      Comedy: element === 'Comedy' ? !prevArrows.Comedy : false
    }));
  }
  const clickedFeatured = (element) => {
    setOpenFilterContainer(null);
    setClickedFilterHover(prevArrows => ({
      ...prevArrows,
      Featured: element === 'Featured' ? !prevArrows.Featured : false,
      Fantasy: element === 'Fantasy' ? !prevArrows.Fantasy : false,
      Action: element === 'Action' ? !prevArrows.Action : false,
      Comedy: element === 'Comedy' ? !prevArrows.Comedy : false
    }));
  }
  // console.log(clickedFilterHover);
  return (
    <>
      <div className='filterCategoryContainer'>
        <div className={clickedFilterHover.Featured ? ('activeFilter') : (null)}>
          <span onClick={() => clickedFeatured('Featured')}>Featured</span>
        </div>
        <div className={clickedFilterHover.Fantasy ? ('activeFilter') : (null)}>
          <span onClick={() => clickedFilter('Fantasy')}>Fantasy</span>
        </div>
        <div className={clickedFilterHover.Action ? ('activeFilter') : (null)}>
          <span onClick={() => clickedFilter('Action')}>Action</span>
        </div>
        <div className={clickedFilterHover.Comedy ? ('activeFilter') : (null)}>
          <span onClick={() => clickedFilter('Comedy')}>Comedy</span>
        </div>
      </div>
      {openFilterContainer !== null ? <FilterContainer movieType={openFilterContainer} /> : null}
    </>
  )
}

export default FilterCategory