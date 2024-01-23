const ListedHouseCard = ({ roomsDetails }) => {
  const { name, number, picture } = roomsDetails || {};

  return (
    <div>
      <div className="card shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{number}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedHouseCard;
