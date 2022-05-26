
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitterSquare, faGithubSquare, faInstagramSquare, faLinkedinIn } from "@fortawesome/free-brands-svg-icons" 
// import { LinkHTMLAttributes } from 'react';

export default function Footer () {
    return (
        <div className='links'>
        <p><a href='https://www.facebook.com' target={'_blank'} rel="noreferrer" size="3x"> <FontAwesomeIcon icon={faFacebook}/> </a></p>

        <p>
            <a href='https://twitter.com/scrimba' target={'_blank'} rel="noreferrer" size="3x"> <FontAwesomeIcon icon={faTwitterSquare}/></a>
        </p>
        <p>
            <a href='https://github.com/kiks717' target={'_blank'} rel="noreferrer" size="3x"> <FontAwesomeIcon icon={faGithubSquare}/></a>
        </p>
        <p>
            <a href='https://www.instagram.com/' target={'_blank'} rel="noreferrer" size="3x"><FontAwesomeIcon icon={faInstagramSquare}/></a>
        </p>
        <p>
            <a href='https://www.linkedin.com/' target={'_blank'} rel="noreferrer" size="3x"><FontAwesomeIcon icon={faLinkedinIn}/></a>
        </p>

        </div>
    )
}