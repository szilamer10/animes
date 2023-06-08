import React from 'react'
import FilterListing from './FilterListing';
import { SeriesData } from './SeriesData'

const FilterContainer = ({movieType}) => {
    
  return (
    <div>
       <FilterListing movies={SeriesData} openClickedMovie={null} movieType={movieType}/>
    </div>
  )
}

export default FilterContainer