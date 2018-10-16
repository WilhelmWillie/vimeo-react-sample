import React from 'react'

import FullScreenCarousel from '../components/FullScreenCarousel'

import '../scss/Carousel.scss'

// Could be replaced with an AJAX call to a backend API
const carouselData = [
  {
    title: 'Hunt for the Wilderpeople',
    image: '/carousel/hunt.jpg',
    description: 'Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do In The Shadows.',
    buyNowLink: '#',
    buyNowColor: 'rgb(73,163,230)',
    trailerLink: '#'
  },
  {
    title: 'Nichts passiert / A Decent Man',
    image: '/carousel/nichts_passiert.jpg',
    description: 'A Swiss family takes a ski vacation and runs into trouble when the father, the titular decent man, finds himself in a series of moral quandaries.',
    buyNowLink: '#',
    buyNowColor: 'rgb(57,185,237)',
    trailerLink: '#'
  },
  {
    title: 'Vice Versa',
    image: '/carousel/vice_versa.jpg',
    description: 'Come along with the Good Company crew as they travel throughout the US, Japan, BC and Quebec to showcase skiing in the best way possible.',
    buyNowLink: '#',
    buyNowColor: 'rgb(185,178,105)',
    trailerLink: '#'
  },
  {
    title: 'The Fourth Phase',
    image: '/carousel/fourth_phase.jpg',
    description: 'From the creators of The Art of FLIGHT, Red Bull Media House presents THE FOURTH PHASE, a snowboarding epic starring iconic athlete Travis Rice.',
    buyNowLink: '#',
    buyNowColor: 'rgb(64,127,171)',
    trailerLink: '#'
  },
  {
    title: 'Full Moon',
    image: '/carousel/full_moon.jpg',
    description: 'Be inspired by women who push boundaries. FULL MOON showcases the legends, current icons and future prodigies of this ever-evolving lifestyle sport.',
    buyNowLink: '#',
    buyNowColor: 'rgb(140,140,140)',
    trailerLink: '#'
  }
]

const Carousel = () => (
  <FullScreenCarousel data={carouselData} />
)

export default Carousel;
