import React, { useState } from 'react'
import FilterContainer from './FilterContainer';

const FilterCategory = () => {
    const [openFilterContainer, setOpenFilterContainer] = useState(null)

    const clickedFilter = (element) => {
        console.log(element);
        setOpenFilterContainer(element);
    }
    
  return (
    <>
    <div className='filterCategoryContainer'>
        <div>
            <span onClick={() => clickedFilter('Fantasy')}>Fantasy</span>
        </div>
        <div>
             <span onClick={() => clickedFilter('Action')}>Action</span>
        </div>
        <div>
             <span onClick={() => clickedFilter('Comedy')}>Comedy</span>
        </div>
    </div>
    {openFilterContainer !== null ? <FilterContainer movieType={openFilterContainer} /> : null}
    </>
  )
}

export default FilterCategory