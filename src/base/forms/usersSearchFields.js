
import {interests} from "base/interests"
import {goals} from "base/goals"
import {zodiac} from "base/zodiac"
import {orientation} from "base/orientation"
import {typeWork} from "base/typeWork"
export const usersSearchFields = {

  gender: { 
    type:"switch" ,
    name: "gender", 
    label: "Пол", 
    options: [
      {name:'<div class="man-ico"></div>',value:"man"},
      {name:'<div class="woman-ico"></div>', value:"woman"},
    ],
    wrapClass: "input-box col-2 col-xs-6" ,
  },
  rangeBerth: { 
    type:"range" ,
    name: "rangeBerth", 
    label: "Выберите возраст", 
    range: [18, 75],
    wrapClass: "input-box box-range col-2 col-xs-6" ,
  },
  city: { 
    type:"city", 
    name: "city", 
    label:"Город", 
    placeholder:"Выбрать город",
    wrapClass: "col-3 search-select-box input-box col-xs-12",
  },

  goals: { 
    type:"choiseTags" ,
    name: "goals", 
    label: "Выберите Цели", 
    options: goals,
    wrapClass: "col-8 input-box col-xs-12",
  },
  interests: { 
    type:"choiseTags" ,
    name: "interests", 
    label: "Интересы", 
    options: interests,
    wrapClass: "col-3 input-box col-xs-12",
  },
  zodiac: { 
    type:"select", 
    name: "zodiac",  
    label: "Зодиак",
    placeholder:"Выбрать зодиак",
    wrapClass: "col-3 search-select-box input-box col-xs-12",
    options: zodiac
  },
  work: { 
    type:"select", 
    name: "work",  
    label: "Работа",
    placeholder:"Выбрать работу",
    wrapClass: "col-3 search-select-box input-box col-xs-12",
    options: typeWork
  },
  orientation: { 
    type:"select", 
    name: "orientation",  
    placeholder:"Выбрать ориентацию",
    label: "Ориентация",
    wrapClass: "col-3 search-select-box input-box col-xs-12",
    options: orientation
  },


}