import React, { Component } from 'react'
import { SliderData } from './SliderData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

class Slider extends Component {
  render() {
    return (
      <div className='slider_container'>
        <div className = 'slider-arrows'>
          <span><FontAwesomeIcon icon={ faChevronLeft } /></span> 
          <span><FontAwesomeIcon icon={ faChevronRight } /></span></div>
        {SliderData.map((slide, index) => {  //index-> iteration counter
            return(<div className =  {index == 0 ? 'active slider' : 'slider'}    key = {index}><img  src = {slide.image} alt = {slide.alt}/></div>);
        })}
        </div>
    )
  }
}

export default Slider
