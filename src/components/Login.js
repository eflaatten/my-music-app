import React from 'react'

const Login = ({ handleLogin }) => {
  
  return (
    <div className="login-form">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" required/>
        <input type="password" placeholder="Password" required/>
        <button onClick={handleLogin} type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
