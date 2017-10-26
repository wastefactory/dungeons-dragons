import axios from 'axios'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export default {
  get (url) {
    return instance.get(url)
      .then(response => response.data)
      .catch(error => { console.log(error) })
  }
}
