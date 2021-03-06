import React, { Component } from 'react'

class CarouselItem extends Component {

  render() {
    let itemClassName = 'carousel-item'

    if (this.props.isPrev) itemClassName += ' carousel-item_prev'
    if (this.props.isNext) itemClassName += ' carousel-item_next'

    return (
      <div className={itemClassName}>
        <div className='carousel-item-img'>
          <img src={this.props.image} alt={this.props.title} />
        </div>

        <div className='carousel-item-details'>
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>

          <div className='carousel-item-links'>
            <a
              href={this.props.buyNowLink}
              className='carousel-item-link'
              style={{backgroundColor: this.props.buyNowColor}}
            >
              <i className='fas fa-play-circle'></i> Buy Now
            </a>
            <a href={this.props.trailerLink} className='carousel-item-link carousel-item-link_outline'>Watch Trailer</a>
          </div>
        </div>
      </div>
    )
  }
}

export default CarouselItem
