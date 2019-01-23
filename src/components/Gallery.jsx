import React, { Component } from 'react';

import '../styles/gallery.css'

import Gallery from './GalleryStyle1.jsx';
import Galleria from './GalleryStyle2.jsx';

class Home extends Component {
  render() {
    return (
        <div>
          
          <div className="container">
            
            
            {0 ?
              <Gallery/>
            :
              <Galleria/>
            }
          </div>
                  
         
        </div>
    );
  }
}

export default Home;
