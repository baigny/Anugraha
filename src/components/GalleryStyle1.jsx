import React from 'react';
import ImageGallery from 'react-image-gallery';
 
export default class Gallery extends React.Component {
 
  render() {
 
    const images = [
      {
        original: "http://lorempixel.com/1000/600/nature/1/",
        thumbnail: "http://lorempixel.com/250/150/nature/1/",
      },
      {
        original: "http://lorempixel.com/1000/600/nature/2/",
        thumbnail: "http://lorempixel.com/250/150/nature/2/"
      },
      {
        original: "http://lorempixel.com/1000/600/nature/3/",
        thumbnail: "http://lorempixel.com/250/150/nature/3/"
      }
      ,
      {
        original: "http://lorempixel.com/1000/600/nature/4/",
        thumbnail: "http://lorempixel.com/250/150/nature/4/"
      },
      {
        original: "http://lorempixel.com/1000/600/nature/5/",
        thumbnail: "http://lorempixel.com/250/150/nature/5/"
      }
    ]
 
    return (
      <ImageGallery items={images} 
      showBullets={true}
      showFullscreenButton={false}
      showThumbnails={false}/>
    );
  }
 
}