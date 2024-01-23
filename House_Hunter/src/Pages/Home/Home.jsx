import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import ListedHouseFilter from '../ListedHouse/ListedHouseFilter';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ListedHouseFilter></ListedHouseFilter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
