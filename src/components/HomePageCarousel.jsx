import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import '../styles/homePageCarousel.css';
import * as allConstants from '../constants/AllConstants.jsx';
//import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
//import { Link } from 'react-router-dom';


export default class HomePageCarousel extends Component {
    
    handleImageError(event) {
        if (this.props.defaultImage &&
            event.target.src.indexOf(this.props.defaultImage) === -1) {
          event.target.src = this.props.defaultImage;
        }
      }
    
    renderMyItem = (item) => {
        const onImageError = this.handleImageError
        var renderingItem = <div className='image-gallery-image'>
                                <img
                                    src={item.original}
                                     alt={item.originalAlt}
                                    /*srcSet={item.srcSet}
                                    sizes={item.sizes}
                                    onLoad={this.props.onImageLoad} */
                                    onError={onImageError.bind(this)}
                                />
                                {
                                    item.description &&
                                    <span className='image-gallery-description'>
                                        {item.link ?
                                            <a className='carousel-links' href={item.link}>
                                            {item.description}
                                            </a>
                                            :
                                            item.description}
                                    </span>
                                }
                            </div>

        return (
            <div>
                {renderingItem}         
            </div>
            ) 
        }
  render() {

    const images = allConstants.HOMEPAGE_CAROUSEL_IMAGES

    return (
      <ImageGallery 
      items={images} 
      showBullets={true}
      showFullscreenButton={false}
      showThumbnails={false}
      useBrowserFullscreen={false}
      autoPlay={true}
      renderItem={this.renderMyItem}/>
    );
  }

}