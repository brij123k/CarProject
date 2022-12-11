import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import CAR_MANUAL from '../../Page2/image8.png'


// export default function Slider() {

//     const [slideIndex, setSlideIndex] = useState(5)

//     const nextSlide = () => {
//         if(slideIndex !== dataSlider.length){
//             setSlideIndex(slideIndex + 1)
//         } 
//         else if (slideIndex === dataSlider.length){
//             setSlideIndex(1)
//         }
//     }

//     const prevSlide = () => {
//         if(slideIndex !== 1){
//             setSlideIndex(slideIndex - 1)
//         }
//         else if (slideIndex === 1){
//             setSlideIndex(dataSlider.length)
//         }
//     }

//     // const moveDot = index => {
//     //     setSlideIndex(index)
//     // }

//     return (
//         <div className="container-slider">
//             {dataSlider.map((obj, index) => {
//                 return (
//                     <div
//                     key={index}
//                     className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
//                     >
//                         <img 
//                         src={CAR_MANUAL}  alt="error"
//                         />
//                                                 <img 
//                         src={CAR_MANUAL}  alt="error"
//                         />
//                                                 <img 
//                         src={CAR_MANUAL}  alt="error"
//                         />
//                                                 <img 
//                         src={CAR_MANUAL}  alt="error"
//                         />
//                     </div>
//                 ) 
//             })}
//             <BtnSlider moveSlide={nextSlide} direction={"next"} />
//             <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

//             {/* <div className="container-dots">
//                 {Array.from({length: 5}).map((item, index) => (
//                     <div 
//                     key={index}
//                     onClick={() => moveDot(index + 1)}
//                     className={slideIndex === index + 1 ? "dot active" : "dot"}
//                     ></div>
//                 ))}
//             </div> */}
//         </div>
//     )
// }

export default function Slider() {
    return (
        <div className='slider_container'>
            <img className='slider_item' src={CAR_MANUAL}/>
            <img className='slider_item' src={CAR_MANUAL}/>
            <img className='slider_item' src={CAR_MANUAL}/>
            <img className='slider_item' src={CAR_MANUAL}/>
            <img className='slider_item' src={CAR_MANUAL}/>

            <img className='slider_item' src={CAR_MANUAL}/>
            <img className='slider_item' src={CAR_MANUAL}/>
            <img className='slider_item' src={CAR_MANUAL}/>
            <img className='slider_item' src={CAR_MANUAL}/>
            <img className='slider_item' src={CAR_MANUAL}/>

            <img className='slider_item' src={CAR_MANUAL}/>
            <img className='slider_item' src={CAR_MANUAL}/>
            <img className='slider_item' src={CAR_MANUAL}/>
            <img className='slider_item' src={CAR_MANUAL}/>
            <img className='slider_item' src={CAR_MANUAL}/>

        </div>
    );
}