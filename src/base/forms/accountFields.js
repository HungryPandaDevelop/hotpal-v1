import {interests} from "base/interests"
import {goals} from "base/goals"
import {zodiac} from "base/zodiac"
import {orientation} from "base/orientation"
import {typeWork} from "base/typeWork"

export const accountFields = {

  name: { 
    type:"text" ,
    name: "name", 
    label: "Имя", 
    placeholder: "Имя", 
    wrapClass: "input-box" ,
  },
  dateBerth: { 
    type:"date" ,
    name: "dateBerth", 
    label: "Дата рождения", 
    placeholder: "Дата рождения", 
    wrapClass: "input-box" ,
    validate: ['required'],
  },
  gender: { 
    type:"switch" ,
    name: "gender", 
    label: "Пол", 
    options: [
      {name:'<div class="man-ico"></div>',value:"man"},
      {name:'<div class="woman-ico"></div>', value:"woman"},
    ],
    wrapClass: "input-box" ,
  },
  goals: { 
    type:"tags" ,
    name: "goals", 
    label: "Цели", 
    placeholder: "Цели", 
    text: "Добавьте ваши цели.", 
    textSecond: "Данные цели будут использоваться, как приглашения, для большего совпадения пар.", 
    options: goals,
  },
  currentLocation: { 
    type:"coords" ,
    name: "currentLocation", 
    label: "Tекущие расположение", 
    wrapClass: "input-box" ,
  },
  interests: { 
    type:"tags" ,
    subType: "lite",
    name: "interests", 
    label: "Интересы", 
    placeholder: "Интересы", 
    options: interests,
    text: "Добавьте ваши интересы.", 
    textSecond: "Введите ваши интересы вручную.",
    className: "special" 
  },
  work: { 
    type:"select", 
    name: "work",  
    placeholder:"Выбрать работу",
    options: typeWork
  },
  zodiac: { 
    type:"select", 
    name: "zodiac",  
    placeholder:"Выбрать зодиак",
    options: zodiac
  },
  tripPoint: { 
    type:"select", 
    name: "tripPoint",  
    placeholder:"Выбрать цель",
    options: [
      {label:"Отдых", value:"type1"}, 
      {label:"Командировка", value:"type2"}, 
      {label:"Загар", value:"type3"}, 
      {label:"Кураж", value:"type4"}, 
    ]
  },
  orientation: { 
    type:"select", 
    name: "orientation",  
    placeholder:"Выбрать ориентацию",
    options: orientation
  },
  description: { 
    type:"textarea" ,
    name: "description", 
    label: "О себе:", 
    placeholder: "Описание", 
    wrapClass: "input-box " ,
  },

  imgsAccount: {
    type: "dropzoneAccount", 
    name: "imgsAccount", 
    label:"Фото профиля", 
    labelSecond:"(Изображение формата jpg,png не менее 150x150 px, не более 8Мб)", 
    typeFile: "img", 
    typeUpload:".png, .jpg, .jpeg", 
    maxSize: 5242880, 
    textEmpty: "На данный момент фоно не выбрано",
    wrapClass: "col-12 input-photo-container account-item",
  },
}