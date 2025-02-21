// import React from 'react'

// function Login() {
//     const handleSubmit = async(e) => {
//       e.preventDefault()
//       const response = await fetch(`http://localhost:5000/api/auth/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5ZmQyYzMxZjliY2IxM2UyOGI4OTNkIn0sImlhdCI6MTczODU1OTYxN30._8zOXlIq1RsZou4r2DwsDADt1G3sDIPe0MTUMeu88pQ"
//         },
//         body: JSON.stringify({ email,password}) // Ensure valid JSON format

//       });
//       const json = await response.json()
//       console.log(json)
//     }
    
//   return (
//     <div>
// <form onSubmit={handleSubmit}>
//   <div className="mb-3">
//     <label htmlFor="email" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="password" className="form-label">Password</label>
//     <input type="password" className="form-control" name='password' id="password"/>
//   </div>

//   <button type="submit" className="btn btn-primary" >Submit</button>
// </form>    </div>
//   )
// }

// export default Login
