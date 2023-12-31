import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import { Link } from "react-router-dom";
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryProvider } from "react-lightgallery";
import { LightgalleryItem } from "react-lightgallery";



const settings = {
  lazyload: true,
  nav: true,
  controls: false,
  mouseDrag: true,
  loop: true,
  items: 1,
  gutter: 5,
  responsive: {
    420: {
      items: 1
    }
  }
};


const Photos = ({ user }) => {


  return (
    <div className="user-photo">
      <LightgalleryProvider

      >


        <TinySlider settings={settings}>
          {user.imgsAccount.map((img, index) => (
            <LightgalleryItem group="any" src={img.url} key={index} >
              <Link href={img.url}>
                <img src={img.url} alt={img} />

              </Link>
            </LightgalleryItem>))}
        </TinySlider>

      </LightgalleryProvider>
    </div>


  )
}

export default Photos