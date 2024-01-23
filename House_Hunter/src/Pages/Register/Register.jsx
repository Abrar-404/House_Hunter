import { Link, useNavigate } from 'react-router-dom';
import '../../Components/Styles/register.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useState } from 'react';
import '../../Components/Styles/registerbtn.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const Register = () => {
  const [value, setValue] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState('');
  const navigate = useNavigate();

  // const handleRegister = async e => {
  //   e.preventDefault();
  //   const form = e.target;

  //   const username = form.username.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const number = form.number.value;

  //   const formData = {
  //     username: username,
  //     email: email,
  //     password: password,
  //     number: number,
  //   };

  //   try {
  //     const response = await axios.post(
  //       'http://localhost:5000/register',
  //       formData
  //     );
  //     console.log(response.data);
  //     // You can handle success, redirect, show a message, etc.
  //   } catch (error) {
  //     console.error('Error registering user', error.response.data);
  //     // Handle errors: display an error message, log, etc.
  //   }
  // };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { name, email, password, role, number } = data;
    console.log(data);
    const registerUser = { name, email, password, role, number };
    console.log(registerUser);

    axios.post('http://localhost:5000/signup', registerUser).then(res => {
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your account created successful',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/login');
      }
    });
  };

  return (
    <div>
      <div className="hero min-h-screen mt-20">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm  bg-transparent shadow-lg">
            <div>
              <div></div>
              <div className="form-container">
                <form
                  className="card-body form"
                  onSubmit={handleSubmit(onSubmit)}
                >
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
                      name="name"
                      {...register('name')}
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
                      {...register('email')}
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
                      {...register('number')}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black font-bold">
                        Role
                      </span>
                    </label>
                    {/* <select className="select select-info  w-full max-w-xs">
                      <option disabled selected>
                        Select Role
                      </option>
                      <option>House Owner</option>
                      <option>House Renter</option>
                    </select> */}

                    <select
                      className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-green-500"
                      {...register('role')}
                      required
                    >
                      <option value="owner">House Owner</option>
                      <option value="renter">House Renter</option>
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
                      {...register('password')}
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
