import { getStorage, ref, deleteObject } from "firebase/storage";

import { useState, useEffect, useRef } from 'react';

import { Field } from 'redux-form';

import storeImage from 'services/storeImage';

import { useDropzone } from 'react-dropzone'



import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

const settings = {
  // lazyload: true,
  nav: false,
  controls: true,
  mouseDrag: true,
  loop: false,
  items: 1,
  // gutter: 15,
};
const settingsSecond = {
  // lazyload: true,
  nav: false,
  controls: false,
  mouseDrag: true,
  loop: false,
  items: 3,
  gutter: 15,
};

const TemplateFile = (props) => {
  const windowSize = useRef(window.innerWidth).current;
  const storage = getStorage();

  const {
    input,
    meta: { error }
  } = props;

  const {
    label,
    labelSecond,
    wrapClass,
    onSubmit
  } = props.obj;

  // console.log('onSubmit', onSubmit)

  const [nameFile, setNameFile] = useState([]);

  const [loadingFile, setLoadingFile] = useState(false);

  useEffect(() => {
    // console.log('input.value', input.value)
    if (input.value) {
      setNameFile(input.value);
    }
  }, [input]);


  const onDrop = async (acceptedFiles) => {
    let fileUrls;
    console.log(acceptedFiles)
    if (acceptedFiles.length < 10) {
      fileUrls = await Promise.all( // загрузили получили урлы
        acceptedFiles.map((file) => storeImage(file, setLoadingFile, 'users'))
      ).catch(() => {
        console.log('err')
        return
      });

      console.log('fileUrls', fileUrls)

      setNameFile([...nameFile, ...fileUrls]);

      input.onChange([...nameFile, ...fileUrls]);
    } else {
      alert('меньше')
    }



  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] }
  });


  const deleteFile = (deleteItem, e) => {
    setNameFile(nameFile.filter(item => item !== deleteItem))

    input.onChange(nameFile.filter(item => item !== deleteItem))

    const desertRef = ref(storage, nameFile);

    deleteObject(desertRef).then(() => {
      console.log('file delete')
      // onSubmit(e)
    }).catch((error) => {
      console.log('file delete err', error)
    });

  }



  return (
    <div className={wrapClass}>
      <div className="tiny-account">

        {nameFile.length === 0 ? (

          <div className="tiny-account-stub">
            <span>Здесь могла бы красоваться Ваша фотография</span>
            <i></i>
          </div>

        ) : (<div className="tiny-account-shadow111"></div>)}
        <>

          <TinySlider settings={settings} >
            {nameFile && nameFile.map((item, index) => (
              <div className="tiny-account-item" key={index}>
                <div className="tiny-account-img">
                  <img src={item} alt={item} />
                  {windowSize < 576 && (
                    <i className="delete-img-dragdrop" onClick={() => { deleteFile(item) }}></i>
                  )}
                </div>
              </div>
            ))}
          </TinySlider>
        </>

      </div>
      {label && <label><b>{label}</b>{labelSecond && <div className='hint-input-file hint-tiny-file'><i><span>{labelSecond}</span></i></div>}</label>}
      {
        nameFile.length < 10 && (<div className={`dragdrop-container ${isDragActive ? 'dragged' : ''}`} {...getRootProps()}>
          <input {...getInputProps()} />
          {loadingFile === true ? <div className="preloader"></div> : (<span>Перетащите несколько файлов сюда или нажмите, чтобы выбрать файлы</span>)}
        </div>)
      }
      {windowSize > 576 && (
        <div className="ragdrop-uploaded ragdrop-uploaded-tiny">
          <TinySlider settings={settingsSecond} >
            {nameFile && nameFile.map((item, index) => (
              <div className="dragdrop-file-item" key={index}>
                <div className="dragdrop-file-img">
                  <img src={item} alt={item} />
                </div>
                <i className="delete-img-dragdrop" onClick={(e) => { deleteFile(item, e) }}></i>
              </div>
            ))}
          </TinySlider>
        </div>
      )}
    </div >

  )
}


const RenderInputFile = ({ obj }) => {

  return <Field
    name={obj.name}
    obj={obj}
    component={TemplateFile}
  />

}


export default RenderInputFile
