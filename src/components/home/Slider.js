// import React, { Component } from 'react'
// import { SliderData } from './SliderData'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

// class Slider extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        nextImage:0
//     }
//   }
  

//   // changeSliderRight() {
//   //   this.setState({
//   //     nextImage: this.state.nextImage + 1
//   //   },
//   //   () =>{
//   //     // if()
//   //   })
    
//   // }

//   // changeSliderLeft() {
//   //   this.setState({
//   //     nextImage: this.state.nextImage - 1

//   //   })
//   // }
//   render() {
//     const sliderLength = SliderData.length;

//     return (
//       <div className='slider_container'>
//         <div className = 'slider-arrows'>
//           <span><FontAwesomeIcon icon={ faChevronLeft } onClick = {() => this.changeSliderLeft()}/></span> 
//           <span><FontAwesomeIcon icon={ faChevronRight } onClick = {() => this.changeSliderRight()}/></span></div>
//         {SliderData.map((slide, index) => {  //index-> iteration counter
//             return(<div className =  {index == 0 ? 'active slider' : 'slider'}    key = {index}><img  src = {slide.image} alt = {slide.alt}/></div>);
//         })}
//         </div>
//     )
//   }
// }

// export default Slider
