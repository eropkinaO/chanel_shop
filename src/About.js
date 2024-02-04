import { useState } from 'react';
import { dataSlides } from './Data/dataSlides';
import './App.css';

function About(){
    
    const [slide, setSlide] = useState(0);
    const {title, description, image} = dataSlides[slide];
  
    
    const previousSlide = () => {
        setSlide((slide) => {
            slide --;
            if (slide < 0) {
                return dataSlides.length - 1;
            }
            return slide;
        })
    }

    const nextSlide = () => {
        setSlide((slide) => {
            slide ++;
            if (slide > dataSlides.length - 1) {
                slide = 0;
            }
            return slide;
        })
    }
    
  
    return(<div className='content'>
        <div className='slides text'>
        <h2 className='title'>{title}</h2>
        </div>

        <div className='slides'>
        <img className="aboutImage"  src={image} width="500px" alt="slide"/>
        </div>
        
        <div className='slides text'>
            <p className='par'>{description}</p>
            </div>

            <div className='slides'>
          <button className="buttons" onClick={() => previousSlide()}>Previous</button>
          <button  className="buttons" onClick={() => nextSlide()}>Next</button>
            </div>
    

    </div>)
}

export default About;