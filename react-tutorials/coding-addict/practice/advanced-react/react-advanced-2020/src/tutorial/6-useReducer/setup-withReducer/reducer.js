// state is the one right before update
// action is what we are trying to do
// whatever action we dispatch will go to reducer, hence we always need to return a state from reducer, otherwise, we will get an error

export const reducer = (state, action) => {
  // console.log(state);
  // this points to the action that is being dispatched
  if (action.type === "ADD_ITEM") {
    const newItems = [...state.people, action.payload];
    // copy the state right before update, then we decide what value we would like to change
    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "please enter value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
    };
  }
  // return state;
  // throwing an error helps us keep track of if-else statement
  throw new Error("no matching action type");
};
