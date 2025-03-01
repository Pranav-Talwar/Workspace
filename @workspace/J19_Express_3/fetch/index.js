const axios = require('axios');

// async function main(){
//    await fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// }
async function maine(){
    const response = await axios.post("https://www.toptal.com/developers/postbin/1706261117587-5522551864851"  )   
    .then(data => console.log(response.data))
 }
    // main()
    maine()