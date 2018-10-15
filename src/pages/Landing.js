import React, { Component } from 'react';

import '../scss/Landing.scss';

class Landing extends Component {
  render() {
    return (
      <div className='landing-container'>
        <img src='./vimeo.png' className='landing-vimeo_logo'/>
        <h1 className='landing-title'>React Sample</h1>
        <p>
          by <a href="http://wilhelmwillie.com"
                target="_blank"
                className='landing-author_link'>
            Wilhelm Willie
          </a>
        </p>

        <div className='landing-links'>
          <a href="layout" className='landing-link'>Layout</a>
          <a href="carousel" className='landing-link'>Carousel</a>
        </div>
      </div>
    )
  }
}

export default Landing;
