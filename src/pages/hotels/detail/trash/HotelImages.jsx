import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import img1 from "default/frontend/images/hotels/1.jpeg"

import { useEffect, useState } from "react";

const settings = {
  lazyload: true,
  nav: false,
  controls: true,
  mouseDrag: true,
  loop: false,
  items: 2,
  gutter: 15,
};

const HotelImages = ({ allImages }) => {

  const [renderImages, setRenderImages] = useState([])

  const changeSize = (string) => {

    let regex = /[{}]/g;
    let img = string.replace(regex, "");
    return img = img.replace(/size/g, "1024x768");

  }


  useEffect(() => {
    let calcImages = allImages.slice(1, allImages.length)

    let calcFourImage = [[]];

    let a = 0;
    let b = 0;

    calcImages.map((el) => {

      let img = changeSize(el)

      if (a === 4) {
        calcFourImage.push([])
        b++;
        a = 0;
      }
      calcFourImage[b].push(img)
      a++;
    })
    setRenderImages(calcFourImage)
    // console.log('calcFourImage', calcFourImage)
  }, [])


  return (
    <div className="hotel-images">
      <div className="main-full">
        <TinySlider settings={settings} >
          <div className="images-item">
            <div className="images-item-container">
              <img src={changeSize(allImages[0])} alt="" />
            </div>
          </div>
          {renderImages.map((item, index) => {
            return (<div key={index} >
              <div className="images-item-grid">
                {item.map((single, indexSingle) => (<div key={indexSingle} className="images-item-cell"><img src={single} alt="" /></div>))}
              </div>
            </div>)

          })}

        </TinySlider>
      </div>
    </div>
  )
}

export default HotelImages
