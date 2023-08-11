import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

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
      <TinySlider settings={settings}>
        {user.imgsAccount.map((img, index) => (
          <div key={index}>
            <img src={img} alt={img} />
          </div>))}
      </TinySlider>
    </div>

  )
}

export default Photos