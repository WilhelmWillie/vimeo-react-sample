import React, { Component } from 'react';

import CarouselItem from './CarouselItem';

class FullScreenCarousel extends Component {
  state = {
    currentIndex: 0
  }

  prevIndex = () => {
    if (this.state.currentIndex != 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      })
    }
  }

  nextIndex = () => {
    if (this.state.currentIndex != this.props.data.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    }
  }

  render() {
    // const carouselItems = this.props.data.map((item, index) => (
    //   (this.state.currentIndex == index) ? (
    //     <CarouselItem
    //       title={item.title}
    //       image={item.image}
    //       description={item.description}
    //       buyNowLink={item.buyNowLink}
    //       trailerLink={item.trailerLink}
    //     />
    //   ) : (
    //     null
    //   )
    // ))

    const currentItemData = this.props.data[this.state.currentIndex]
    const currentItem = (
      <CarouselItem
        title={currentItemData.title}
        image={currentItemData.image}
        description={currentItemData.description}
        buyNowLink={currentItemData.buyNowLink}
        trailerLink={currentItemData.trailerLink}
      />
    )

    return (
      <div className='carousel'>
        <img src={currentItemData.image} className='carousel-blurred_bg' />
        <div className='carousel-black_overlay' />
        
        <div className='carousel-current'>
          <div onClick={this.prevIndex} className='carousel-change_slide'>
            <i className='fas fa-chevron-left'></i>
          </div>

          {currentItem}

          <div onClick={this.nextIndex} className='carousel-change_slide'>
            <i className='fas fa-chevron-right'></i>
          </div>
        </div>
      </div>
    )
  }
}

export default FullScreenCarousel;
