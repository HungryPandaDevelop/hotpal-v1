import React from 'react';



import RangeSlider from 'components/forms/fields/RangeSlider';
import ChoiseTags from 'components/forms/fields/ChoiseTags';
import EditionTags from 'components/forms/fields/EditionTags';
import Invite from 'components/forms/filedsSpecial/Invite';

import RenderTitle from 'components/forms/fields/RenderTitle';

import RenderInputText from 'components/forms/fields/RenderInputText'; // поле стандартное

import RenderInputDate from './fields/RenderInputDate'; // дата
import RenderInputDateRange from './fields/RenderInputDateRange'; // дата

import RenderInputPhone from './fields/RenderInputPhone'; // телефон

import RenderInputPassword from './fields/RenderInputPassword'; // пароля

import RenderInputTextarea from './fields/RenderInputTextarea'; // область текста
import RenderInputEditor from './fields/RenderInputEditor'; // область текста
import RenderMessage from './fields/RenderMessage'; // область текста

import RenderInputCheckbox from './fields/RenderInputCheckbox';  // чекбокс

import RenderInputRadio from './fields/RenderInputRadio';  // radio

import RenderInputSelect from './fields/RenderInputSelect'; // селект

// import RenderInputFile from './fields/RenderInputFileChat'; // файл

import RenderInputFileDropZoneAccount from './fields/RenderInputFileDropZoneAccount'; // зона файлов

// import RenderInputFilePhoto from './fields/RenderInputFilePhoto'; // фото






import RenderInputStar from './fields/RenderInputStar'; // звезды отзыв

import RenderInputSwitch from './fields/RenderInputSwitch'; // поле переключателя

import RenderInputComplex from './fields/RenderInputComplex'; // комлекс

import RenderInputCoords from './fields/RenderInputCoords'; // координаты

import RenderInputCity from './fields/RenderInputCity'; // выбор города
import AutocompleteHotel from './filedsSpecial/AutocompleteHotel'; // выбор города
import RenderInputGeoHotels from './filedsSpecial/GeoHotels'; // выбор точки
import RenderInputYaString from './filedsSpecial/SearchYaString'; // выбор точки


import { required, minLength, minLengthPass, mailCheck } from 'components/forms/validator';

const RenderFields = ({ fields, checkErrorSubmit, type }) => {

  const setValidate = (validate) => {

    let validateArr = [];
    if (!validate) { return validateArr; }
    validate.map((item) => {
      if (item === 'required') { validateArr.push(required); }
      else if (item === 'minLength') { validateArr.push(minLength); }
      else if (item === 'minLengthPass') { validateArr.push(minLengthPass); }
      else if (item === 'mailCheck') { validateArr.push(mailCheck); }
    });

    return validateArr;
  }



  const choiseFieldType = (obj) => {

    switch (obj.type) {
      case 'title':
        return (
          <>
            <RenderTitle
              obj={obj}
            />
          </>
        )
      case 'invite':
        return (
          <>
            <Invite
              obj={obj}
            />
          </>
        )
      case 'tags':
        return (
          <>
            <EditionTags
              obj={obj}
            />
          </>
        )
      case 'choiseTags':
        return (
          <>
            <ChoiseTags
              obj={obj}
            />
          </>
        )
      case 'range':
        return (
          <>
            <RangeSlider
              obj={obj}
            />
          </>
        )
      case 'text':
        return (
          <>
            <RenderInputText
              obj={obj}
            />
          </>
        );
      case 'textarea':
        return (
          <RenderInputTextarea
            obj={obj}
          />
        );
      case 'editor':
        return (
          <RenderInputEditor
            obj={obj}
          />
        );
      case 'message':
        return (
          <RenderMessage
            obj={obj}
          />
        );
      case 'phone':
        return (
          <RenderInputPhone
            obj={obj}
          />
        );
      case 'select':
        return (
          <RenderInputSelect
            obj={obj}
          />
        );
      case 'date':
        return (
          <RenderInputDate
            obj={obj}
          />
        );
      case 'dateRange':
        return (
          <RenderInputDateRange
            obj={obj}
          />
        );
      case 'password':
        return (
          <RenderInputPassword
            obj={obj}

          />
        );

      case 'checkbox':
        return (<RenderInputCheckbox
          obj={obj}
        />)
      case 'radio':
        return (
          <RenderInputRadio
            obj={obj}
          />
        );
      case 'switch':
        return (
          <RenderInputSwitch
            obj={obj}
          />
        );
      // case 'file':
      //   return (
      //     <RenderInputFile
      //       obj={obj}
      //     />
      //   );

      case 'dropzoneAccount':
        return (
          <RenderInputFileDropZoneAccount
            obj={obj}
          />
        );
      // case 'photo':
      //   return (
      //     <RenderInputFilePhoto
      //       obj={obj}
      //     />
      //   );


      case 'complex':
        return (
          <RenderInputComplex
            obj={obj}
          />
        );
      case 'coords':
        return (
          <RenderInputCoords
            obj={obj}
          />
        );
      case 'city':
        return (
          <>
            <RenderInputCity
              obj={obj}
            />
          </>
        );
      case 'autoHotel':
        return (
          <>
            <AutocompleteHotel
              obj={obj}
            />
          </>
        );
      case 'yaString':
        return (
          <>
            <RenderInputYaString
              obj={obj}
            />
          </>
        );
      case 'geo':
        return (
          <>
            <RenderInputGeoHotels
              obj={obj}
            />
          </>
        );
      case 'star':
        return (
          <RenderInputStar
            obj={obj}
          />
        );
      default:
    }
  }


  return (
    <>
      {type !== 'single' ? (
        Object.keys(fields).map((item, index) => (
          <React.Fragment
            key={index} >
            {
              (
                choiseFieldType({ ...fields[item], checkErrorSubmit, 'validate': setValidate(fields[item].validate) })
              )
            }
          </React.Fragment>
        ))
      ) : (
        <React.Fragment >
          {
            (
              choiseFieldType({ ...fields, checkErrorSubmit, 'validate': setValidate(fields.validate) })
            )
          }
        </React.Fragment>
      )}
      { }
    </>
  )
}

export default RenderFields;
