import { useState } from 'react';
import { contactSlide } from './Data/contactsSlide';
import './App.css';

function Contact(){
    
    const [contact, setContact] = useState(0);
    const {id,title, adress, image} = contactSlide[contact];
    
    const previousContact = () => {
        setContact((contact) => {
            contact --;
            if (contact < 0) {
                return contactSlide.length - 1;
            }
            return contact;
        })
    }

    const nextContact = () => {
        setContact((contact) => {
            contact ++;
            if (contact > contactSlide.length - 1) {
                contact = 0;
            }
            return contact;
        })
    }
    
    
    return(<div className='content'>
        <div className='slides'>
        <h2>{id} - {title}</h2>
        </div>

        <div className='slides'>
        <img className="aboutImage" src={image} width="500px" alt="slide"/>
        </div>
        
        <div className='slides text'>
            <p>{adress}</p>
            </div>

            <div className='slides'>
          <button className="buttons" onClick={() => previousContact()}>Previous store</button>
          <button  className="buttons" onClick={() => nextContact()}>Next store</button>
            </div>
    

    </div>)
}

export default Contact;