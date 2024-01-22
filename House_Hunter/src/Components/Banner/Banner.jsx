import BannerImg from '../../assets/Banner.png';
import '../Styles/bannertext.css'

const Banner = () => {
  return (
    <div>
      <div className="flex-col flex justify-evenly items-center md:flex-col md:text-center text-center lg:text-left gap-10 lg:flex-row mx-auto mt-32">
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold focus-in-expand">
          Find The Refine <br />
          <span className="text-[#134761] text-7xl font-extrabold">
            Houses With
          </span>{' '}
          Us
        </h1>
        <img className="w-[480px] h-[400px]" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
