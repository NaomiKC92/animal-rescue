export const isLoadingReducer = (state='', action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.loadingMessage
    default: 
      return state;
  }
}