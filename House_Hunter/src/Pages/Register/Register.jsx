import { Link } from 'react-router-dom';
import '../../Components/Styles/register.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useState } from 'react';
import '../../Components/Styles/registerbtn.css';
import axios from 'axios';

const Register = () => {
  const [value, setValue] = useState();


  const handleRegister = async e => {
    e.preventDefault();
    const form = e.target;

    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const number = form.number.value;

    const formData = {
      username: username,
      email: email,
      password: password,
      number: number,
    };

    try {
      const response = await axios.post(
        'http://localhost:5000/register',
        formData
      );
      console.log(response.data);
      // You can handle success, redirect, show a message, etc.
    } catch (error) {
      console.error('Error registering user', error.response.data);
      // Handle errors: display an error message, log, etc.
    }
  };

  return (
    <div>
      <div className="hero min-h-screen mt-20">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm  bg-transparent shadow-lg">
            <div>
              <div></div>
              <div className="form-container">
                <form className="card-body form" onSubmit={handleRegister}>
                  <p className="title">Register</p>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black font-bold">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="input input-bordered border-slate-400"
                      required
                      name="username"
                    />
                  </div>

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
                        Phone
                      </span>
                    </label>
                    <PhoneInput
                      defaultCountry="BD"
                      value={value}
                      name="number"
                      className="input input-bordered border-slate-400"
                      onChange={setValue}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black font-bold">
                        Role
                      </span>
                    </label>
                    <select className="select select-info  w-full max-w-xs">
                      <option disabled selected>
                        Select Role
                      </option>
                      <option>House Owner</option>
                      <option>House Renter</option>
                    </select>
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
                      <span class="bittu-content">Register </span>
                    </button>
                  </div>
                  <div>
                    <p className="sign-up-label">
                      Don't have an account?
                      <Link to="/login">
                        <span className="sign-up-link">Login</span>
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

export default Register;
