/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";

const Login = () => {
  return (
    <div classNameName="container">
      <Head>
        <title>Login</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  Login
                </h5>
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="nome@exemplo.com"
                    />
                    <label htmlFor="floatingInput">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Senha"
                    />
                    <label htmlFor="floatingPassword">Senha</label>
                  </div>

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberPasswordCheck"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="rememberPasswordCheck"
                    >
                      Lembre de mim
                    </label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <br></br>
                  <div className="d-grid">
                    <Link href="/register">
                      <div className="btn btn-registrar text-uppercase fw-bold">
                        Registre-se
                      </div>
                    </Link>
                  </div>
                  <hr className="my-4" />
                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-google btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      <i className="fab fa-google me-2"></i> Sign in with Google
                    </button>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-facebook btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      <i className="fab fa-facebook-f me-2"></i> Sign in with
                      Facebook
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
