import '../../Components/Styles/housecard.css';

const RentedHouse = ({ rentHouse }) => {
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
  } = rentHouse || {};

  return (
    <div>
      <div class="cardush">
        <img className="w-[350px] h-[500px]" src={picture} alt="" />
        <div class="cardush__content">
          <p class="cardush__title">{name}</p>
          <div className="mt-2">
            <label htmlFor="Address">Address</label>
            <p class="cardush__description  text-center">{address}</p>
          </div>
          <div className=" mt-2">
            <label htmlFor="City">City</label>
            <p class="cardush__description">{city}</p>
          </div>
          <div className="flex justify-between mx-auto mt-2">
            <div className="">
              <label htmlFor="Bedroom">Bedroom No.</label>
              <p class="cardush__description  text-center">{bedrooms}</p>
            </div>
            <div className="">
              <label htmlFor="bathroom">Bathroom</label>
              <p class="cardush__description  text-center">{bathroom}</p>
            </div>
            <div className="">
              <label htmlFor="room_size">Room Size</label>
              <p class="cardush__description  text-center">{room}</p>
            </div>
          </div>
          <div className="flex justify-between mx-auto mt-2">
            <div className="">
              <label htmlFor="available_date">Available date.</label>
              <p class="cardush__description  text-center">{available}</p>
            </div>
            <div className="">
              <label htmlFor="rent">Rent per month</label>
              <p class="cardush__description text-center">{rent}</p>
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="number text-center">Phone Number</label>
            <p class="cardush__description ">{number}</p>
          </div>
          <div className="mt-2">
            <label htmlFor="description text-center">Description</label>
            <p class="cardush__description ">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentedHouse;
