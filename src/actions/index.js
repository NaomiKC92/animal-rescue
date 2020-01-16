export const isLoading = isLoading => ({
  type: 'IS_LOADING',
  isLoading: !isLoading
})

export const hasErrored = (errorMsg) => ({
  type: 'HAS_ERRORED',
  errorMsg
})

export const showAnimals = (animals) => ({
  type: 'SHOW_ANIMALS',
  animals
})

export const showDonations = (donations) => ({
  type: 'SHOW_DONATIONS',
  donations
})