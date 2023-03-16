
import {
  
  ADD_TO_BAG, CART_EMPTY,
} from "./actionTypes";

const iniState = {
  
  cartData:[],
};
export const authReducer = (state = iniState, { type, payload }) => {
  switch (type) {
 
    case ADD_TO_BAG:
      return {
        ...state,
        cartData: [...state.cartData, payload],
      };
    case CART_EMPTY:{
      return {
        ...state,
        cartData:[],
      }
    }

    default:
      return state;
  }
};
