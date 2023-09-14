
let globalState = {
  likes: [],
  rooms: [],
  roomUserInfo: {}
};

export const globalReducer = (state=globalState, action) => {
  switch(action.type){
    case 'SET_LIKES':
      return {...state, ...action.payload,}
    case 'SET_ROOMS':
      return {...state, ...action.payload,}
    case 'SET_CURRENT_ROOM':
      return {...state, ...action.payload,}
    default: 
      return state
  }
}