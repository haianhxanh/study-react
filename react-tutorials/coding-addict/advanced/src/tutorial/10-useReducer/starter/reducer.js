import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import { data } from "../../../data";

// reducer - controlling entire state
// 1st param: state (before the update), 2nd param: action
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    // copy current state, return new one
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  throw new Error(`No matching ${action.type} - action type`);
};

export default reducer;
