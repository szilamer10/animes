import React, { useState } from 'react'

const FilterCategory = () => {
    const [openFilterContainer, setOpenFilterContainer] = useState(null)
    const clickedFilter = (element) => {
        setOpenFilterContainer(true);
    }
  return (
    <div className='filterCategoryContainer'>
        <div>
            <span onClick={() => clickedFilter('fantasy')}>Fantasy</span>
        </div>
        <div>
             <span onClick={() => clickedFilter('action')}>Action</span>
        </div>
        <div>
             <span onClick={() => clickedFilter('comedy')}>Comedy</span>
        </div>
    </div>
  )
}

export default FilterCategory