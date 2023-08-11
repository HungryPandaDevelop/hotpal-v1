
let globalState = {
  likes: [],
  rooms: []
};

export const globalReducer = (state=globalState, action) => {
  switch(action.type){
    case 'SET_LIKES':
      return {...state, ...action.payload,}
    case 'SET_ROOMS':
      return {...state, ...action.payload,}
    default: 
      return state
  }
}