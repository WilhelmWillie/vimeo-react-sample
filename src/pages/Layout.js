import React, { Component } from 'react'

import '../scss/Layout.scss'

const Layout = () => (
  <div>
    <section className='layout-section'>
      <div className='layout-container'>
        <div className='layout-row layout-row_reverse'>
          <div className='layout-col_half'>
            <div className='layout-vid_details'>
              <h2>MONSOON III</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam.
                Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas maruis venenatis commodo eu id nibh. Ut porta libero sed sember faucibus.
              </p>
            </div>
          </div>

          <div className='layout-col_half'>
            <img src='/preview/monsoonIII.jpg' className='layout-vid_preview' alt='MONSOON III'/>
          </div>
        </div>
      </div>
    </section>

    <section className='layout-section layout-section_gray'>
      <div className='layout-container'>
        <div className='layout-row'>
          <div className='layout-col_half'>
            <div className='layout-vid_details layout-vid_details_inverse'>
              <h2>BEAMS</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam.
                Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas maruis venenatis commodo eu id nibh. Ut porta libero sed sember faucibus.
              </p>
            </div>
          </div>

          <div className='layout-col_half'>
            <img src='/preview/beams.jpg'  className='layout-vid_preview' alt='BEAMS'/>
          </div>
        </div>
      </div>
    </section>

    <section className='layout-section layout-section_gradient'>
      <div className='layout-container'>
        <div className='layout-row layout-row_reverse'>
          <div className='layout-col_half'>
            <div className='layout-vid_details layout-vid_details_inverse'>
              <h2>Move 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam.
                Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas maruis venenatis commodo eu id nibh. Ut porta libero sed sember faucibus.
              </p>
            </div>
          </div>

          <div className='layout-col_half'>
            <img src='/preview/move2.jpg'  className='layout-vid_preview' alt='Move 2'/>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Layout
