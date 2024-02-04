import React from 'react'
import "./Login.css"

const checkLogin = () => {
  window.location.href = "/classes";
}

const Login = () => {
  return (
    <>
      <div class="gradient"></div>
      <div className='containerLogin'>
        <h4>Welcome to MARS!</h4>
        <div class="login">
          <h4>Login</h4>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Username" aria-label="Recipient's username"
              aria-describedby="basic-addon2" />
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control" placeholder="Password" aria-label="Recipient's username"
              aria-describedby="basic-addon2" />
          </div>
          <button onClick={checkLogin} type="button" class="btn btn-primary">Login</button>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
    </>
  )
}

export default Login