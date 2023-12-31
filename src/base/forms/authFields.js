
export const regFields = {
  name: { 
    name: "name", 
    label: "Имя", 
    placeholder: "Введите имя", 
    type:"text" , 
    wrapClass: "input-box col-6",
    validate: ['required','minLength'],
  },
  email: { 
    name: "email", 
    label: "Почта", 
    placeholder: "Почта", 
    type:"text" , 
    validate: ['required','minLength','mailCheck'],
    wrapClass:"input-box  col-6",
  },

  dateBerth: { 
    name: "dateBerth", 
    label: "Дата рождения", 
    placeholder: "Дата рождения", 
    type:"date" , 
    wrapClass:"input-box col-6",
    // validate: ['required'],
  },
  city: { 
    name: "city", 
    label: "Город", 
    placeholder: "Выбрать город", 
    type:"city" , 
    wrapClass:"input-box  col-6",
  },
  gender: { 
    type:"switch" ,
    name: "gender", 
    label: "Пол", 
    options: [
      {name:'<div class="man-ico"></div>',value:"man"},
      {name:'<div class="woman-ico"></div>', value:"woman"},
    ],
    wrapClass:"input-box  col-6",
  },
  password: { 
    name: "password", 
    label: "Пароль",
    placeholder: "Пароль",
    type:"password", 
    validate: ['required','minLengthPass'],
    wrapClass: "input-box  col-6",
  },
};

export const regFieldsPhone = {
  phone: { 
    name: "phone", 
    type:"phone" , 
    wrapClass: "input-box col-12",
  },
};

export const regFieldVertification = {
  vert: { 
    name: "vert", 
    type:"text" , 
    wrapClass: "input-box col-12",
  },
};


export const authFields = {
  email: { 
    name: "email", 
    label: "Почта", 
    placeholder: "Введите почту", 
    type:"text" , 
    validate: ['required','minLength','mailCheck'],
    wrapClass: "input-box  col-12",
  },
  password: { 
    name: "password", 
    label: "Пароль",
    placeholder: "Пароль",
    type:"password", 
    validate: ['required','minLength','checkRus'],
    wrapClass: "input-box  col-12",
  },
};

export const getPass = {
  email: { 
    name: "email", 
    label: "Почта", 
    placeholder: "Введите почту", 
    type:"text" , 
    validate: ['required','minLength','mailCheck'],
    wrapClass: "input-box  col-12",
  },
};

export const settingsPassword = {

  checkPassword: { 
    name: "checkPassword", 
    label: "Введите пароль",
    type:"password",
    wrapClass: "col-12 input-box",
  },
  changePassword: { 
    name: "changePassword", 
    type:"password",
    label: "Новый пароль",
    wrapClass: "col-12 input-box",
  },
  checkChangePassword: { 
    name: "checkChangePassword", 
    type:"password",
    label: "Подтвердить пароль",
    wrapClass: "col-12 input-box",
  },
}