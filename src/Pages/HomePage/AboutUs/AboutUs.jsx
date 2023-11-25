import img from "../../../assets/aerial-view-business-team.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="hero min-h-[50vh] bg-orange-500">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="w-1/2 rounded-lg " />
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-white">About Us</h1>
            <p className="py-6 font-medium text-white text-xl">
              Welcome to our cutting-edge Asset Management System, where
              efficiency meets organization. Seamlessly control, track, and
              optimize your valuable assets with our intuitive platform. From
              computers to furniture, our system empowers your business by
              providing a centralized hub for comprehensive asset management.
              Imagine a workspace where every asset is effortlessly cataloged,
              and insights are just a click away. Our integrated technology
              ensures a streamlined experience, offering features like QR code
              scanning, location tracking, and insightful analytics. Take charge
              of your assets, enhance collaboration, and propel your business
              forward with the confidence that comes from complete control.
              Welcome to a new era of asset management—simple, powerful, and
              tailored to elevate your business success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
