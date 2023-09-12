// localStorage.removeItem('account');

let sessionAccount = false;// localStorage.getItem('account') && JSON.parse(localStorage.getItem('account'));

let accounInfo = sessionAccount ? sessionAccount : {
  uid: '',
  loaded: true
};

export const accountReducer = (state=accounInfo, action) => {
  switch(action.type){
    case 'SET_INFO_ACCOUNT':
      // console.log('a', accounInfo)
      return {...state, ...action.payload,}
    case 'EXIT_ACCOUNT':
      // console.log('a', accounInfo)
      return {  uid: '', loaded: true}
    default: 
      return state
  }
}