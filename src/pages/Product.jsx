import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productsData, setProductsData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductsData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductsData(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductsData();
  }, [products, productId]);

  console.log(productId);
  return productsData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ..........Products Data....... */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ..........Products Image......... */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productsData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              ></img>
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/*.......... Products info......... */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 ">{productsData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productsData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productsData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productsData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productsData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            Add to Cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original product</p>
            <p>Cash on Delivery is Avaible in this Product</p>
            <p>Easy Return and Exchange Policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/*............ Description and review Section........... */}
      <div className="mt-20">
        <div className="flex ">
          <b className="border py-3 px-5 text-sm">Description</b>
          <p className="border py-3 px-5 text-sm">Review(122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600">
          <p>
            An E-commerce website is an online platform that facilities the
            buying and selling of product or servise over the internet. it
            serves as a visual marketplace where business and indivisual can
            showcase their products,interact with customers and conduct
            transactions without the need for physical presence.E-commerce
            website have gained immense popularity due to their
            convience,accescibility and the global reach they offer
          </p>
          <p>
            E-commerce website typically display products or servicing along the
            detailed descriptions,images,prices,and anyavaible
            variations(e.g.sizes,colors) each productusaually has its own
            dedicated with relevent information
          </p>
        </div>
      </div>
      {/* display related products */}
      <RelatedProducts category={productsData.category} subCategory={productsData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;