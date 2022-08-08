import '../styles/login.scss'


function Login() {
    return (
      <div className="row">
        <div className="col-4"></div>
        <div id="login_card" className="col-4">
          <form action="/auth/login" className="container text-align-center">
            <div className="mb-3 mt-3 text-align-left">
              <label htmlFor="email" className="form-label">Adresse mail:</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
            </div>
            <div className="mb-3 text-align-left">
              <label htmlFor="pwd" className="form-label">Mot de passe:</label>
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
            </div>
            <button type="submit" className="bg-color-secondary font-color-tertiary login-button login-button-border btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    )
}

export default Login
