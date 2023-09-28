import React from 'react'

const HotelWarning = ({ listing }) => {



  return (
    <div className="hotel-warning main-full">
      <h3>
        Важная информация
      </h3>
      {listing.policy_struct.map((el, index) => (
        <div className="hotel-warning-item" key={index}>
          <h4>{el.title}</h4>
          <div className="hotel-warning-info">
            {el.paragraphs.map((par, indexP) => (
              <p key={indexP} dangerouslySetInnerHTML={{ __html: par }}></p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default HotelWarning
