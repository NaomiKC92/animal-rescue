export const showAnimalsReducer = (state=[], action) => {
  switch (action.type) {
    case 'SHOW_ANIMALS':
      return action.animals.map(animal => {
        return {...animal}
      });
    default: 
      return state;
  }
}