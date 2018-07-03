

export default function checkDomain(QUERY) {

   const API_URL = `http://localhost:3000/api?domain=${QUERY}`
   return fetch(API_URL)
}



