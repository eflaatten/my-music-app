import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [credentials, setCredentials] = useState({username: "", password: ""}) 
  
  return (
    <div className="login-form">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <button onClick={handleLogin} type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
