import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import Carousel from 'nuka-carousel';
import { images } from '../utils/images';

export default class Home extends React.Component {
  render() {
    return (
      <div>

        <Header />
        <div >

          <Carousel>
            <img src={images.carousel_1} className="img-responsive  "/>
            <img src={images.carousel_2} className="img-responsive  "/>
            <img src={images.carousel_3} className="img-responsive  "/>
            <img src={images.carousel_4} className="img-responsive  "/>

          </Carousel>
         
        </div>
        <Footer />

      </div>
    )
  }
}