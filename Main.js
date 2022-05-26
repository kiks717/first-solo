import React from 'react';
import myself from '../images/myphoto.jpg'


export default function Main () {
    return (
        <div className='div-main'>

           <img src={myself} alt="me" className='div-image'/>

            <div className='first-section'>
                <h2>Kristina Lazarevic</h2>
                <p><span className='front'>Frontend Developer</span></p>
                <button className='email-btn'>💌 Email</button>
            </div>

        <div className='second-section'>
            <h3 className='about'>About</h3>
            <p className='desc'>
                I am a Frontend Developer student with a 
                interest in studying more about developing and practicing. 
                Ready for a  new challenges and opportunities. 
            </p>


            <h3 className='about'>Interests</h3>
            <p className='desc'>
                Food lover and excellent cook. Full time book reader. 
                Gym fanatic. Sea lover. Entrepreneur. Psychology is a hoby.
            </p>
        </div>
        </div>


    )
}