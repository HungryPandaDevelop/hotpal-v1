import { useState } from 'react';


const ChangeTheme = () => {
  const [showDark, setShowDark] = useState(false);

  const changeStyleSite = () => {

    if (showDark) {
      document.getElementsByTagName('body')[0].classList.remove("dark-theme");
    }
    else {
      document.getElementsByTagName('body')[0].classList.add("dark-theme");
    }

    setShowDark(!showDark)
  }


  return (
    <div className={`change-style ${showDark ? 'active' : ''}`} onClick={changeStyleSite}></div>
  )
}

export default ChangeTheme;
