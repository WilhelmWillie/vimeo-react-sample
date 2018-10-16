import React, { Component } from 'react';

import CarouselItem from './CarouselItem';

class FullScreenCarousel extends Component {
  // Keep track of current index in component's state
  // Array of video data is passed in via props as `data`
  state = {
    currentIndex: 0
  }

  // Set the index to the previous video. No wrapping (but could easily support wrapping)
  prevIndex = () => {
    if (this.state.currentIndex !== 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      })
    }
  }

  // Set the index to the next video. No wrapping (but could easily support wrapping)
  nextIndex = () => {
    if (this.state.currentIndex !== this.props.data.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    }
  }

  render() {
    // Map through the data prop and only render a window of backgrounds (previous, current, next)
    const backgrounds = this.props.data.map((item, index) => {
      if (index === this.state.currentIndex - 1) {
        return (<img src={item.image} key={index} alt={item.title} className='carousel-blurred_bg carousel-blurred_bg_prev' />)
      } else if (index === this.state.currentIndex) {
        return (<img src={item.image} key={index} alt={item.title} className='carousel-blurred_bg' />)
      } else if (index === this.state.currentIndex + 1){
        return (<img src={item.image} key={index} alt={item.title} className='carousel-blurred_bg carousel-blurred_bg_next' />)
      } else {
        return null
      }
    })

    // Map through the data prop and only render a window of carousel items (previous, current, next)
    const items = this.props.data.map((item, index) => {
      const isPrev = (index === this.state.currentIndex - 1)
      const isNext = (index === this.state.currentIndex + 1)

      if (isPrev || isNext || index === this.state.currentIndex) {
        return (<CarouselItem
          key={item.title}
          title={item.title}
          image={item.image}
          description={item.description}
          buyNowLink={item.buyNowLink}
          buyNowColor={item.buyNowColor}
          trailerLink={item.trailerLink}
          isPrev={isPrev}
          isNext={isNext}
        />)
      } else {
        return null
      }
    })

    return (
      <div className='carousel'>
        {backgrounds}

        <div className='carousel-black_overlay' />

        <div className='carousel-container'>
          <div onClick={this.prevIndex} className='carousel-change_slide'>
            <i className='fas fa-chevron-left'></i>
          </div>

          <div className='carousel-current-frame'>
            <div className='carousel-current'>
              {items}
            </div>
          </div>

          <div onClick={this.nextIndex} className='carousel-change_slide'>
            <i className='fas fa-chevron-right'></i>
          </div>
        </div>
      </div>
    )
  }
}

export default FullScreenCarousel;
