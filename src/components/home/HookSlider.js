import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

// function HookSlider() {
const HookSlider = () => {
    const [current, setCurrent] = useState(0) // array destructuring
    const sliderLength = SliderData.length;

    const changeSliderLeft = () => {
        setCurrent(current === 0 ? sliderLength - 1 : current - 1)
    }
    const changeSliderRight = () => {
        setCurrent(current === sliderLength - 1 ? 0 : current + 1)
    }
    return (
        <div className='slider_container'>
            <div className='slider-arrows'>
                <span><FontAwesomeIcon icon={faChevronLeft} onClick={changeSliderLeft} /></span>
                <span><FontAwesomeIcon icon={faChevronRight} onClick={changeSliderRight} /></span></div>
            {SliderData.map((slide, index) => {  //index-> iteration counter
                return (

                    <div className={index == current ? 'active slider' : 'slider'} key={index}> {index === current && (<img src={slide.image} alt={slide.alt} />)}</div>
                );
            })}
        </div>
    )
}

export default HookSlider