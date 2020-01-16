export const donations = (state=[], action) => {
  switch(action.type) {
    case 'SHOW_DONATIONS':
      return [...action.donations];
    default: 
      return state;
  }
}