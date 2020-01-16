export const fetchAnimalData = () => {
  return fetch('http://localhost:3001/api/v1/rescue-animals')
    .then(res => res.json())
}