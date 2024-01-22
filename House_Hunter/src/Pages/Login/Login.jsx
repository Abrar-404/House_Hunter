import { Link } from 'react-router-dom';
import '../../Components/Styles/register.css';
import '../../Components/Styles/registerbtn.css';

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm  bg-transparent shadow-lg">
            <div>
              <div></div>
              <div className="form-container">
                <form className="card-body form">
                  <p className="title">Login</p>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black font-bold">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered border-slate-400"
                      required
                      name="email"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black font-bold">
                        Password
                      </span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered border-slate-400"
                      required
                      name="password"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button class="bittu">
                      <span class="bittu-content">Login </span>
                    </button>
                  </div>
                  <div>
                    <p className="sign-up-label">
                      Don't have an account?
                      <Link to="/register">
                        <span className="sign-up-link">Sign up</span>
                      </Link>
                    </p>
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
