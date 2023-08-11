
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
    wrapClass: "input-box col-2" ,
  },
  rangeBerth: { 
    type:"range" ,
    name: "rangeBerth", 
    label: "Дата рождения", 
    range: [18, 75],
    wrapClass: "input-box col-3" ,
  },
  city: { 
    type:"city", 
    name: "city", 
    label:"Город", 
    placeholder:"Выбрать город",
    wrapClass: "col-3 input-box",
  },

  goals: { 
    type:"choiseTags" ,
    name: "goals", 
    label: "Цели", 
    options: goals,
    wrapClass: "col-6 input-box",
  },
  interests: { 
    type:"choiseTags" ,
    name: "interests", 
    label: "Интересы", 
    options: interests,
    wrapClass: "col-6 input-box",
  },
  zodiac: { 
    type:"select", 
    name: "zodiac",  
    label: "Зодиак",
    placeholder:"Выбрать зодиак",
    wrapClass: "col-4 input-box",
    options: zodiac
  },
  work: { 
    type:"select", 
    name: "work",  
    label: "Работа",
    placeholder:"Выбрать работу",
    wrapClass: "col-4 input-box",
    options: typeWork
  },
  orientation: { 
    type:"select", 
    name: "orientation",  
    placeholder:"Выбрать ориентацию",
    label: "Ориентацию",
    wrapClass: "col-4 input-box",
    options: orientation
  },


}