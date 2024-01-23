import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import ListedHouseFilter from '../ListedHouse/ListedHouseFilter';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mt-32">
        <h1 className="text-center mx-auto text-4xl font-bold">
          Listed <span className="text-[#134761] font-extrabold">Houses</span>
        </h1>
        <ListedHouseFilter></ListedHouseFilter>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
