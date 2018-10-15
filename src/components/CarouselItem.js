import React, { Component } from 'react';

class CarouselItem extends Component {

  render() {
    return (
      <div className='carousel-item'>
        <div className='carousel-item-img'>
          <img src={this.props.image} className='carousel-item-img' />
        </div>

        <div className='carousel-item-details'>
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>

          <div className='carousel-item-details'>
            <a href={this.props.buyNowLink}>Buy Now</a>
            <a href={this.props.trailerLink}>Watch Trailer</a>
          </div>
        </div>
      </div>
    )
  }
}

export default CarouselItem;
