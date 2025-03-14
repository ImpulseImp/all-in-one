import Image from "next/image";
import headphonesImg from "@/public/images/product-modal/headphone.png";
import weight from "@/public/images/product-modal/weight.png";
import heart from "@/public/images/product-modal/heart.png";
function ProductModal() {
  return (
    // Main Container
    <div className="flex min-h-screen items-center justify-center bg-slate-100 font-sans">
      {/* Card Container */}
      <div className="flex flex-col items-center justify-center space-y-6 rounded-xl bg-white p-4 shadow-2xl md:flex-row md:space-y-0 md:space-x-4 md:py-8">
        {/* Image */}
        <div>
          <Image src={headphonesImg} alt="headphones image" className="w-60" />
        </div>
        {/* Content */}
        <div className="flex flex-col space-y-4 text-center font-sans text-black md:text-left">
          {/* Label Container*/}
          <div>
            <div className="inline-block rounded-full bg-black px-3 py-1 text-sm text-white">
              free shipping
            </div>
          </div>

          {/* Title */}
          <div className="space-y-3">
            <div className="mb-4 max-w-sm text-2xl font-medium">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </div>
            <p className="line-through">$799</p>
            <p className="text-5xl">$599</p>
            <p className="mb-4 text-sm font-light text-gray-400">
              The offer is valid until April 3 or as long as stock lasts!
            </p>
          </div>
          {/* Button group */}
          <div className="group">
            <button className="w-full rounded-lg border-b-8 border-b-blue-700 bg-blue-700 text-white transition-all duration-150 group-hover:border-t-8 group-hover:border-b-0 group-hover:border-t-blue-700 group-hover:bg-blue-700 group-hover:shadow-lg">
              <div className="rounded-lg bg-blue-500 p-2 group-hover:bg-blue-600">
                Add to cart
              </div>
            </button>
          </div>
          {/* In Stock Animation */}
          <div>
            {/* circle */}
            <div className="group flex items-center space-x-2">
              <div className="h-4 w-4 rounded-full bg-green-400 group-hover:animate-ping"></div>
              <p className="text-sm">50+ pcs. in stock.</p>
            </div>
          </div>
          {/* Buttons container */}
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <button className="flex items-center justify-center space-x-3 rounded-lg border-2 border-gray-300 px-5 py-3 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg">
              <Image src={weight} alt="weight img" />
              <span>Add to cart</span>
            </button>
            <button className="flex items-center justify-center space-x-3 rounded-lg border-2 border-gray-300 px-5 py-3 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg">
              <Image src={heart} alt="weight img" />
              <span>Add to wishlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductModal;
