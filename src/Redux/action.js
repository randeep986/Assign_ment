import {
  ADD_TO_BAG,
} from "./actionTypes";


export const add_to_bag = ( payload) => {
  return {
    type: ADD_TO_BAG,
    payload,
  };
};


