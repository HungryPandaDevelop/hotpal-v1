import { getStorage, ref, deleteObject } from "firebase/storage";

import { useState, useEffect, useRef } from 'react';

import { Field } from 'redux-form';

import axios from 'axios';

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
    setLoadingFile(true);
    console.log('acceptedFiles', acceptedFiles)
    const files = acceptedFiles;
    let fileUrls = [];

    try {

      for (let index = 0; index < files.length; index++) {
        // [...files].map((file, index) => {

        const formData = new FormData();
        formData.append("image", files[index]);

        const response = await axios.post(`http://hotpal.ru/api/upload.php`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        fileUrls.push({ url: response.data.imageURL, id: response.data.newFileName });
        // fileFull.push(response.data.newFileName);

      }


      setNameFile(fileUrls);
      input.onChange(fileUrls);
      setLoadingFile(false);
    }
    catch (err) {
      console.log('err', err);
    }


  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] }
  });


  const deleteFile = async (deleteItem) => {
    console.log('deleteItem', deleteItem)
    try {
      const res = await axios.post(`http://hotpal.ru/api/deleteUpload.php`, { fileToDelete: deleteItem }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      console.log('Результат удаления файла:', res);

      setNameFile(nameFile.filter(item => item.id !== deleteItem))

      input.onChange(nameFile.filter(item => item.id !== deleteItem))


    } catch (err) {
      console.error('Ошибка при удалении файла', err);
    }
  }



  return (
    <div className={wrapClass}>
      <div className="tiny-account">

        {nameFile.length === 0 ? (

          <div className="tiny-account-stub">
            <span>Добавить, своё фото</span>
            <i></i>
          </div>

        ) : (<div className="tiny-account-shadow111"></div>)}
        <>

          <TinySlider settings={settings} >
            {nameFile && nameFile.map((item, index) => (
              <div className="tiny-account-item" key={index}>
                <div className="tiny-account-img">
                  <img src={item.url} alt={item.url} />
                  {windowSize < 576 && (
                    <i className="delete-img-dragdrop" onClick={() => { deleteFile(item.id) }}></i>
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
                  <img src={item.url} alt={item.url} />
                </div>
                <i className="delete-img-dragdrop" onClick={(e) => { deleteFile(item.id, e) }}></i>
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
