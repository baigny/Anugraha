import React from 'react';
import Gallery from 'react-grid-gallery';
import '../styles/gallery.css'
import { GALLERY_IMAGES } from '../constants/AllConstants.jsx';
 
export default class Galleria extends React.Component {


    render() {


        const IMAGES = GALLERY_IMAGES;
            
            
    return(
        <div>
            <Gallery enableImageSelection={false}
            id="CollegeCampus"
            images={IMAGES}
            backdropClosesModal={true}/>
            <Gallery images={IMAGES}/>
            <Gallery images={IMAGES}/>
            <Gallery images={IMAGES}/>
        </div>
        
         );

    }
}
