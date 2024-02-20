import { getStorage, ref, deleteObject } from "firebase/storage";

import { useState, useEffect } from 'react';

import { Field } from 'redux-form';

import storeImage from 'services/storeImage';


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
    textEmpty
  } = props.obj;

  const [nameFile, setNameFile] = useState([]);
  const [loadingFile, setLoadingFile] = useState(false);


  useEffect(() => {
    // console.log('token', token)
    setNameFile(input.value);

  }, [input]);

  const onChange = async (acceptedFiles) => {
    let fileUrls;
    // 
    const files = [...acceptedFiles.target.files];
    console.log(files)
    if (files.length < 10) {
      fileUrls = await Promise.all( // загрузили получили урлы
        files.map((file) => storeImage(file, setLoadingFile, 'users'))
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

      <div
        className="file-input-container"
      >
        {loadingFile === true && <div className="preloader"></div>}
        {!nameFile && <div className="file-decorate"><span>{textEmpty}</span><i></i></div>}
        {/* <input ref={elRef} type="text" {...input} value={nameFile} className="input-file-second" /> */}
        <input
          type="file"
          onChange={onChange}
          className="input-file"
          accept=".jpg, .jpeg, .png, .svg"
          multiple
        />
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



export default RenderInputFile;