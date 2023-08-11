import { Field } from 'redux-form';
import { useState, useEffect, useRef } from "react"

const TempateInput = (props) => {

  const {
    input,
    meta: { error }
  } = props;

  const {
    label,
    placeholder,
    text,
    textSecond,
    options
  } = props.obj;

  const [tags, setTags] = useState([]);


  const [originList, setOriginList] = useState(options);
  const [filterList, setFilterList] = useState(options);

  const [showPopup, setShowPopup] = useState(false);

  const [term, setTerm] = useState('');

  const inputRef = useRef();

  const onTagsAd = (item) => {
    setTags([...tags, item]);

    setFilterList(filterList.filter(origin => origin !== item))
  };

  const onRemoveTags = (el) => {
    setTags(tags.filter(item => item !== el));

    setFilterList([...filterList, el]) // такое себе

  }
  const [firstLoad, setFirstLoad] = useState(0);

  useEffect(() => {
    if (input.value && firstLoad === 0) {
      setFirstLoad(1)
      setTags(input.value);

      if (input.value && input.value.length > 0) {
        let tempArr = options;
        input.value.map(el => tempArr = tempArr.filter(item => el !== item));
        setOriginList(tempArr);
        setFilterList(tempArr);

      } else {
        setOriginList(options);
        setFilterList(options);
      }
    }


    input.onChange(tags);
  }, [tags]);




  const filterOptions = (e) => {

    setTerm(e.target.value);

    setFilterList(originList.filter(el => {
      if ((el.toLowerCase()).indexOf(e.target.value) >= 0) { return el; }
    }));
  };
  const renderOptions = () => {

    return (
      <ul className="tags-popup ln">
        {filterList.length === 0 ? 'Список пуст' : filterList.map((item, index) => (
          <li key={index} onClick={() => { onTagsAd(item) }}>{item}</li>
        ))}
      </ul>)
  }


  return (
    <div className="tags-add-container">
      <div className="tags-container">
        <h3>{label}:</h3>
        <div className="tags-addted">
          {tags.map((item, index) => (
            <span
              key={index}
              className="tag"
              onClick={() => { onRemoveTags(item) }}
            >{item}<em></em></span>))}
        </div>
      </div>
      <div className="tags-add-input">
        <div className="tags-add-hint">
          <h3>{text}</h3>
          <div className="tags-add-hint-text">
            {textSecond}
          </div>
        </div>
        <div className={`${showPopup ? 'active' : ''} input-box tags-search`}>
          <input
            className="input-decorate"
            type="text"
            placeholder={placeholder}
            ref={inputRef}
            value={term}
            onChange={filterOptions}
            onBlur={() => { setShowPopup(false) }}
            onFocus={() => { setShowPopup(true) }}
          />
          <i></i>
          {renderOptions()}

        </div>

      </div>
    </div>
  )
}


const EditionTags = ({ obj }) => {

  return <Field
    name={obj.name}
    obj={obj}
    component={TempateInput}
  />;
}

export default EditionTags
