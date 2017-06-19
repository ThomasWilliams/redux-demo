import { combineReducers } from 'redux';
import { actionTypes } from './actions';

const clickHandler = (state = { count: 0, color: '' }, action) => {
  switch (action.type) {

    case actionTypes.CLICK:
      const count = state.count + action.amount;
      return { ...state, count };

    case actionTypes.CHANGE_COLOR:
      return { ...state, color: action.color };

    default:
      return state;
  }
};

// const swipeHandler = (state = { foo: 'bar', swipeDirection: 'left' }, action) => {
//   switch (action.type) {
//     case actionTypes.SWIPE:
//       state.swipeDirection = action.swipeDirection;
//       // return Object.assign({}, state, { swipeDirection: action.swipeDirection })
//       return {
//         ...state,
//         swipeDirection: action.swipeDirection
//       };
//     default:
//       return state;
//   }
// };

export default combineReducers({ clickHandler });
