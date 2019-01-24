import React from 'react';
import Gallery from 'react-grid-gallery';
import '../styles/gallery.css'
import { GALLERY_IMAGES_CAMPUS, GALLERY_IMAGES_FACILTIIES, GALLERY_IMAGES_ANNUAL_DAY, GALLERY_IMAGES_SPORTS_DAY, GALLERY_IMAGES_LIFE_AT_ANUGRAHA} from '../constants/AllConstants.jsx';
 
export default class Galleria extends React.Component {


    render() {

  Gallery.defaultProps={
      enableImageSelection: false,
      enableLightbox: true,
      backdropClosesModal: true
  }
       // const IMAGES = GALLERY_IMAGES;
            
            
    return(
        <div>
            <div className="gallery-image">
                <h2 >Campus</h2>
                <Gallery 
                id="CollegeCampus"
                images={GALLERY_IMAGES_CAMPUS}
                />
            </div>
            <div className="gallery-image">
                <h2>Facilities</h2>
                <Gallery
                    id="Facilities" 
                    images={GALLERY_IMAGES_FACILTIIES}/>
            </div>
            <div className="gallery-image">
                <h2>Annual Day</h2>
                <Gallery
                    id="AnnualDay" 
                    images={GALLERY_IMAGES_ANNUAL_DAY}/>
            </div>
            <div className="gallery-image">
                <h2>Sport Day</h2>
                <Gallery
                    id="SportDay" 
                    images={GALLERY_IMAGES_SPORTS_DAY}/>
            </div>
            <div className="gallery-image">
                <h2>Rewards & Awards</h2>
                <Gallery
                    id="RewardsAwards" 
                    images={GALLERY_IMAGES_LIFE_AT_ANUGRAHA}/>
            </div>
        </div>
        
         );

    }
}
