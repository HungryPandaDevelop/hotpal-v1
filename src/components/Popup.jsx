import { useState } from "react"

const Popup = ({ children, showStart, showPopup }) => {



  const closePopup = () => {
    showPopup(false)
  }

  return (
    <div className={`popup element-show ${(showStart) ? 'show' : ''}`} >
      <div className="popup-overlay"></div>
      <div className="popup-container">

        <i className="btn-close close-btn--popup" onClick={closePopup}></i>


        {children}
      </div>
    </div>
  )
}

export default Popup
