import bannerImg from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[80vh] "
        style={{
          backgroundImage: ` url(${bannerImg})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-80"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-xl font-semibold ">
              Streamline Your Assets, Empower Your Business
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
