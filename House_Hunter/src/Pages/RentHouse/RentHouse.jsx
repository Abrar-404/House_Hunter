import Swal from 'sweetalert2';
import useAxiosSecure from './../../Hooks/useAxiosSecure';
import '../../Components/Styles/register.css';

const RentHouse = () => {
  const axiosSecure = useAxiosSecure();

  const handleFormData = e => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const address = form.address.value;
    const city = form.city.value;
    const bedrooms = form.bedrooms.value;
    const bathroom = form.bathroom.value;
    const room = form.room.value;
    const picture = form.picture.value;
    const available = form.available.value;
    const rent = form.rent.value;
    const number = form.number.value;
    const description = form.description.value;
    const email = form.email.value;

    const allData = {
      name,
      address,
      city,
      bedrooms,
      bathroom,
      room,
      picture,
      available,
      rent,
      number,
      description,
      email,
    };

    axiosSecure.post('/renthouse', allData).then(res => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: `Bingo!`,
          text: ` ${name} added to the cart.`,
          // imageUrl: `${img}`,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        });
      }
    });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-10">
          <div className="text-center mt-32">
            <h1 className="text-5xl font-bold">
              Rent Your{' '}
              <span className="text-[#134761] font-extrabold">Houses</span>!
            </h1>
          </div>
          <div className="card w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleFormData} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Address"
                  className="input input-bordered"
                  required
                  name="address"
                />
              </div>

              <div className="flex lg:flex-row items-center mx-auto md:flex-col flex-col gap-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">City</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your City name"
                    className="input input-bordered"
                    required
                    name="city"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Bedrooms</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Bedrooms No."
                    className="input input-bordered"
                    required
                    name="bedrooms"
                  />
                </div>
              </div>

              <div className="flex lg:flex-row items-center mx-auto md:flex-col flex-col gap-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">Bathroom</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Bathroom No."
                    className="input input-bordered"
                    required
                    name="bathroom"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Room Size</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Rooms Sizes"
                    className="input input-bordered"
                    required
                    name="room"
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Picture</span>
                </label>
                <input
                  type="text"
                  placeholder="Rooms Sizes"
                  className="input input-bordered"
                  required
                  name="picture"
                />
              </div>

              <div className="flex lg:flex-row items-center mx-auto md:flex-col flex-col gap-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">
                      Availability Date
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Available From"
                    className="input input-bordered"
                    required
                    name="available"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Rent Per Month</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Rent per month"
                    className="input input-bordered"
                    required
                    name="rent"
                  />
                </div>
              </div>

              <div className="flex lg:flex-row items-center mx-auto md:flex-col flex-col gap-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="input input-bordered"
                    required
                    name="number"
                    pattern="^\+880\d{10}$"
                    title="Please enter a valid Bangladesh phone number starting with +880"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Description of house"
                    className="input input-bordered"
                    required
                    name="description"
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button class="bittu">
                  <span class="bittu-content">Submit </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentHouse;
