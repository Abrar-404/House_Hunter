import axios from 'axios';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import '../../Components/Styles/register.css';
import '../../Components/Styles/registerbtn.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState('');
  const navigate = useNavigate();
  const { getUserData } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { email, password } = data;
    const loginUser = { email, password };

    axios
      .post(`https://househunter-five.vercel.app/login`, loginUser)
      .then(res => {
        const token = res.data;
        localStorage.setItem('token', token);
        if (localStorage.getItem('token')) {
          reset();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Welcome to HouseHunter',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/dashboard');
          getUserData();
        }
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm  bg-transparent shadow-lg">
            <div>
              <div></div>
              <div className="form-container">
                <form
                  className="card-body form"
                  onSubmit={handleSubmit(onSubmit)}
                >
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
                      {...register('email')}
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
                      {...register('password')}
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
