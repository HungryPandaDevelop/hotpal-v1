

export const hotelsSearchFields = {
  city: { 
    type:"region", 
    name: "city", 
    label:"Город", 
    placeholder:"Выбрать город",
    wrapClass: "col-3 col-xs-12 input-box",
  },
  // dateIn: { 
  //   type:"date" ,
  //   name: "dateIn", 
  //   label: "Дата заезда", 
  //   wrapClass: "input-box col-3 col-xs-12" ,
  // },
  // dateOut: { 
  //   type:"date" ,
  //   name: "dateOut", 
  //   label: "Дата выезда", 
  //   wrapClass: "input-box col-3 col-xs-12" ,
  // },
  dateRange: { 
    type:"dateRange" ,
    name: "dateRange", 
    label: "Даты", 
    wrapClass: "input-box col-3 col-xs-12" ,
  },
  personCount: { 
    type:"select" ,
    name: "personCount", 
    label: "Количество персон", 
    placeholder:"Выбрать количество",
    wrapClass: "input-box col-3 col-xs-12" ,
    options: [
      {label:"1 гость", value: 1}, 
      {label:"2 гостя", value: 2}, 
      {label:"3 гостя", value: 3}, 
      {label:"4 гость", value: 4}, 
      {label:"5 гостей", value: 5}, 
      {label:"6 гостей", value: 6}, 
    ]
  },

  // raiting: { 
  //   type:"text" ,
  //   name: "raiting", 
  //   label: "Рейтинг места", 
  //   wrapClass: "input-box col-3 col-xs-12" ,
  // },


}