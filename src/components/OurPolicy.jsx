import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sm sm:text-sm md:text-base text-gray-700">
        <div>
          <img className="w-12 m-auto mb-5" src={assets.exchange_icon} alt="" />
          <p>Easy Exchange Policy</p>
          <p>We offer hassle free exchange policy</p>
        </div>
        <div>
          <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5" />
          <p className="font-semibold">7 Days Return Policy</p>
          <p className="text-gray-400">we provide 7 days free return policy</p>
        </div>
        <div>
          <img src={assets.support_img} alt="" className="w-12 m-auto mb-5" />
          <p className="font-semibold">Best customer support</p>
          <p className="text-gray-400">We provide 24/7 free support</p>
        </div>
      </div>
    </>
  );
};

export default OurPolicy;