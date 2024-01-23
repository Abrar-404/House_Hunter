import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditTableRooms = () => {
  const roomDetails = useLoaderData();

  const {
    name,
    number,
    rent,
    available,
    address,
    picture,
    city,
    bedrooms,
    bathroom,
    room,
    description,
    _id,
  } = roomDetails || {};

  const handleUpdate = e => {
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

    const allData = {
      name,
      number,
      rent,
      available,
      address,
      picture,
      city,
      bedrooms,
      bathroom,
      room,
      description,
      _id,
    };

    console.log(allData);

    fetch(`http://localhost:5000/addhouse/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(allData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            icon: 'success',
            title: 'Updated Succefully',
            width: 600,
            padding: '3em',
            color: 'White',
            background: '#134761',
            backdrop: `
            rgba(0,0,123,0.4)
            top
            no-repeat
          `,
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
              Edit Your{' '}
              <span className="text-[#134761] font-extrabold">Houses</span>!
            </h1>
          </div>
          <div className="card w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleUpdate} className="card-body">
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
                  defaultValue={name}
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
                  defaultValue={address}
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
                    defaultValue={city}
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
                    defaultValue={bedrooms}
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
                    defaultValue={bathroom}
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
                    defaultValue={room}
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
                  defaultValue={picture}
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
                    defaultValue={available}
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
                    defaultValue={rent}
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
                    defaultValue={number}
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
                    defaultValue={description}
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTableRooms;
