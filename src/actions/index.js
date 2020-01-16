export const isLoading = (loadingMsg) => ({
  type: 'IS_LOADING',
  loadingMsg
})

export const hasErrored = (errorMsg) => ({
  type: 'HAS_ERRORED',
  errorMsg
})