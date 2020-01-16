export const fetchAnimalData = () => {
  return fetch('http://localhost:3001/api/v1/rescue-animals')
  .then(res => {
    if (!res.ok) {
      throw Error('Error getting information')
    }
    return res.json();
  });
}

export const fetchDonationData = () => {
  return fetch('http://localhost:3001/api/v1/donations')
  .then(res => {
    if (!res.ok) {
      throw Error('Error getting information')
    }
    return res.json();
  });
};