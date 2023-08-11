// localStorage.removeItem('account');

let sessionAccount = localStorage.getItem('account') && JSON.parse(localStorage.getItem('account'));

let accounInfo = sessionAccount ? sessionAccount : {
  uid: '',
};

export const accountReducer = (state=accounInfo, action) => {
  switch(action.type){
    case 'SET_INFO_ACCOUNT':
      // console.log('a', accounInfo)
      return {...state, ...action.payload,}
    default: 
      return state
  }
}