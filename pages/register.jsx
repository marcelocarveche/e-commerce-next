const Register = () => {
  return (
    <div className="container">
      <h1>Register</h1>
      <form className="form-horizontal center" action="" method="POST">
        <fieldset>
          <div id="legend">
            <legend className="">Register</legend>
          </div>
          <div className="control-group">
            {/* <!-- Username --> */}
            <label className="control-label" htmlFor="username">
              Username
            </label>
            <div className="controls">
              <input
                type="text"
                id="username"
                name="username"
                placeholder=""
                className="input-xlarge"
              />
              <p className="help-block">
                Username can contain any letters or numbers, without spaces
              </p>
            </div>
          </div>

          <div className="control-group">
            {/* <!-- E-mail --> */}
            <label className="control-label" htmlFor="email">
              E-mail
            </label>
            <div className="controls">
              <input
                type="text"
                id="email"
                name="email"
                placeholder=""
                className="input-xlarge"
              />
              <p className="help-block">Please provide your E-mail</p>
            </div>
          </div>

          <div className="control-group">
            {/* <!-- Password--> */}
            <label className="control-label" htmlFor="password">
              Password
            </label>
            <div className="controls">
              <input
                type="password"
                id="password"
                name="password"
                placeholder=""
                className="input-xlarge"
              />
              <p className="help-block">
                Password should be at least 4 characters
              </p>
            </div>
          </div>

          <div className="control-group">
            {/* <!-- Password --> */}
            <label className="control-label" htmlFor="password_confirm">
              Password (Confirm)
            </label>
            <div className="controls">
              <input
                type="password"
                id="password_confirm"
                name="password_confirm"
                placeholder=""
                className="input-xlarge"
              />
              <p className="help-block">Please confirm password</p>
            </div>
          </div>

          <div className="control-group">
            {/* <!-- Button --> */}
            <div className="controls">
              <button className="btn btn-success">Register</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
