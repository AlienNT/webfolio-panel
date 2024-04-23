export default {
  API_URL: import.meta.env.VITE_API_URL && import.meta.env.MODE !== 'development' ?
    import.meta.env.VITE_API_URL :
    'http://localhost:5000/aliennt/api'
}