const API_URL = 'https://dummyjson.com/users'

const fetchApi = () => fetch(API_URL).then((res) => res.json())

export default fetchApi
