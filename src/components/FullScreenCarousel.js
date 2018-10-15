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
    const currentItemData = this.props.data[this.state.currentIndex]
    const currentItem = (
      <CarouselItem
        title={currentItemData.title}
        image={currentItemData.image}
        description={currentItemData.description}
        buyNowLink={currentItemData.buyNowLink}
        buyNowColor={currentItemData.buyNowColor}
        trailerLink={currentItemData.trailerLink}
      />
    )

    let prevItemData = null, nextItemData = null, prevItem = null, nextItem = null

    if (this.state.currentIndex - 1 >= 0) {
      prevItemData = this.props.data[this.state.currentIndex - 1]
      prevItem = (
        <CarouselItem
          title={prevItemData.title}
          image={prevItemData.image}
          description={prevItemData.description}
          buyNowLink={prevItemData.buyNowLink}
          buyNowColor={prevItemData.buyNowColor}
          trailerLink={prevItemData.trailerLink}
        />
      )
    }

    if (this.state.currentIndex + 1 < this.props.data.length) {
      nextItemData = this.props.data[this.state.currentIndex + 1]
      nextItem = (
        <CarouselItem
          title={nextItemData.title}
          image={nextItemData.image}
          description={nextItemData.description}
          buyNowLink={nextItemData.buyNowLink}
          buyNowColor={nextItemData.buyNowColor}
          trailerLink={nextItemData.trailerLink}
        />
      )
    }

    const backgrounds = this.props.data.map((item, index) => {
      if (index === this.state.currentIndex - 1) {
        return (<img src={item.image} key={index} className='carousel-blurred_bg carousel-blurred_bg_prev' />)
      } else if (index === this.state.currentIndex) {
        return (<img src={item.image} key={index} className='carousel-blurred_bg' />)
      } else if (index === this.state.currentIndex + 1){
        return (<img src={item.image} key={index} className='carousel-blurred_bg carousel-blurred_bg_next' />)
      } else {
        return null
      }
    })

    return (
      <div className='carousel'>
        <div className='carousel-black_overlay' />

        <div className='carousel-container'>
          <div onClick={this.prevIndex} className='carousel-change_slide'>
            <i className='fas fa-chevron-left'></i>
          </div>

          {backgrounds}
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
