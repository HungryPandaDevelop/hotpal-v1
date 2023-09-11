

export const hotelsSearchFields = {
  city: { 
    type:"city", 
    name: "city", 
    label:"Город", 
    placeholder:"Выбрать город",
    wrapClass: "col-3 col-xs-12 input-box",
  },
  dateIn: { 
    type:"date" ,
    name: "dateIn", 
    label: "Дата заезда", 
    wrapClass: "input-box col-3 col-xs-12" ,
  },
  dateOut: { 
    type:"date" ,
    name: "dateOut", 
    label: "Дата выезда", 
    wrapClass: "input-box col-3 col-xs-12" ,
  },
  personCount: { 
    type:"text" ,
    name: "personCount", 
    label: "Количество персон", 
    wrapClass: "input-box col-3 col-xs-12" ,
  },
  typeGo: { 
    type:"switch" ,
    name: "typeGo", 
    label: "Искать", 
    options: [
      {name:'по работе',value:"work"},
      {name:'отдых', value:"rest"},
    ],
    wrapClass: "input-box col-3 col-xs-12" ,
  },
  roomCount: { 
    type:"text" ,
    name: "roomCount", 
    label: "Количество комнат", 
    wrapClass: "input-box col-3 col-xs-12" ,
  },
  raiting: { 
    type:"text" ,
    name: "raiting", 
    label: "Рейтинг места", 
    wrapClass: "input-box col-3 col-xs-12" ,
  },


}