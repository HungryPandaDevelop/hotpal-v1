import { getStorage, ref, deleteObject } from "firebase/storage";


import { useState, useEffect } from 'react';

import { Field } from 'redux-form';

import storeImage from 'services/storeImage';

import { useDropzone } from 'react-dropzone'


const TemplateFile = (props) => {

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

  const [nameFile, setNameFile] = useState([]);

  const [loadingFile, setLoadingFile] = useState(false);

  useEffect(() => {

    setNameFile(input.value);

  }, [input]);


  const onDrop = async (acceptedFiles) => {
    let fileUrls;
    // console.log(acceptedFiles)
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


  const deleteFile = (deleteItem) => {
    setNameFile(nameFile.filter(item => item !== deleteItem))

    input.onChange(nameFile.filter(item => item !== deleteItem))

    const desertRef = ref(storage, nameFile);

    deleteObject(desertRef).then(() => {
      console.log('file delete')
    }).catch((error) => {
      console.log('file delete err', error)
    });

  }



  return (
    <div className={wrapClass}>


      {label && <label><b>{label}</b>{labelSecond && <div className='hint-input-file'><i><span>{labelSecond}</span></i></div>}</label>}
      {nameFile.length < 10 && (<div className={`dragdrop-container ${isDragActive ? 'dragged' : ''}`} {...getRootProps()}>
        <input {...getInputProps()} />
        {loadingFile === true ? <div className="preloader"></div> : (<span>Перетащите несколько файлов сюда или нажмите, чтобы выбрать файлы</span>)}
      </div>)}

      <div className="ragdrop-uploaded">
        {nameFile && nameFile.map((item, index) => (
          <div className="dragdrop-file-item" key={index}>
            <div className="dragdrop-file-img">
              <img src={item} alt={item} />
            </div>
            <i onClick={() => { deleteFile(item) }}></i>
          </div>
        ))}
      </div>
    </div>

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
