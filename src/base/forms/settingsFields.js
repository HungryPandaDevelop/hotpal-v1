

export const settingsPrivateData = {

  email: { 
    name: "email", 
    label: "E-mail", 
    placeholder: "e-mail", 
    type:"text",
    disabled: true,
    wrapClass: "col-6",
  },
  phone: { 
    name: "phone", 
    label: "Телефон", 
    placeholder: "+7(   )    -  -", 
    type:"phone",
    wrapClass: "col-6",
  },
}

export const settingsPassword = {

  checkPassword: { 
    name: "checkPassword", 
    label: "Введите пароль",
    type:"password",
    wrapClass: "col-4 input-box",
  },
  changePassword: { 
    name: "changePassword", 
    type:"password",
    label: "Новый пароль",
    wrapClass: "col-4 input-box",
  },
  checkChangePassword: { 
    name: "checkChangePassword", 
    type:"password",
    label: "Подтвердить пароль",
    wrapClass: "col-4 input-box",
  },
}

export const settingsPrivacy= {

  invites: { 
    type:"select", 
    name: "invites",  
    label:"Кто может отправлять мне приглашения",
    placeholder:"Выбрать ориентацию",
    wrapClass: "col-6 input-box",
    options: [
      {label:"тип 1", value:"type1"}, 
      {label:"тип 2", value:"type2"}, 
      {label:"тип 3", value:"type3"}, 
      {label:"тип 4", value:"type4"}, 
    ]
  },
  likes: { 
    type:"select", 
    name: "likes",  
    label:"Кто может лайкать меня",
    placeholder:"Выбрать ориентацию",
    wrapClass: "col-6 input-box",
    options: [
      {label:"тип 1", value:"type1"}, 
      {label:"тип 2", value:"type2"}, 
      {label:"тип 3", value:"type3"}, 
      {label:"тип 4", value:"type4"}, 
    ]
  },
  history: { 
    type:"select", 
    name: "history",  
    label:"Кто может видеть историю моих поисков",
    placeholder:"Выбрать ориентацию",
    wrapClass: "col-6 input-box",
    options: [
      {label:"тип 1", value:"type1"}, 
      {label:"тип 2", value:"type2"}, 
      {label:"тип 3", value:"type3"}, 
      {label:"тип 4", value:"type4"}, 
    ]
  },
  messages: { 
    type:"select", 
    name: "messages",  
    label:"Кто может отправлять мне личные сообщения",
    placeholder:"Выбрать ориентацию",
    wrapClass: "col-6 input-box",
    options: [
      {label:"тип 1", value:"type1"}, 
      {label:"тип 2", value:"type2"}, 
      {label:"тип 3", value:"type3"}, 
      {label:"тип 4", value:"type4"}, 
    ]
  },
  founds: { 
    type:"select", 
    name: "founds",  
    label:"Кто может видеть мой профиль",
    placeholder:"Выбрать ориентацию",
    wrapClass: "col-6 input-box",
    options: [
      {label:"тип 1", value:"type1"}, 
      {label:"тип 2", value:"type2"}, 
      {label:"тип 3", value:"type3"}, 
      {label:"тип 4", value:"type4"}, 
    ]
  },
  goals: { 
    type:"select", 
    name: "goals", 
    label:"Кто может видеть мои цели", 
    placeholder:"Выбрать ориентацию",
    wrapClass: "col-6 input-box",
    options: [
      {label:"тип 1", value:"type1"}, 
      {label:"тип 2", value:"type2"}, 
      {label:"тип 3", value:"type3"}, 
      {label:"тип 4", value:"type4"}, 
    ]
  },


}