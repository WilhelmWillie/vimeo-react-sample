import React from 'react';

import '../scss/Landing.scss';

const Landing = () => (
  <div className='landing-container'>
    <img src='./vimeo.png' className='landing-vimeo_logo' alt='Vimeo Logo'/>
    <h1 className='landing-title'>React Sample</h1>
    <p>
      by <a href='http://wilhelmwillie.com'
            target='_blank'
            rel='noopener noreferrer'
            className='landing-author_link'>
        Wilhelm Willie
      </a>
    </p>

    <div className='landing-links'>
      <a href='layout' className='landing-link'>Layout</a>
      <a href='carousel' className='landing-link'>Carousel</a>
    </div>
  </div>
)

export default Landing;
