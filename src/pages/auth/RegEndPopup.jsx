import Popup from 'components/Popup';
import RegEnd from 'pages/auth/parts/RegEnd';

import Section from "pages/main/Section"


const RegEndPopup = () => {

  let successMail = 'bink@inbox.ru'

  return (
    <>
      <Popup>
        <RegEnd successMail={successMail} />

      </Popup>
      <Section />
    </>
  )
}

export default RegEndPopup
