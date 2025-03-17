import Image from "next/image";
import img1 from "@/public/images/image-gallery/image1.jpg";
import img2 from "@/public/images/image-gallery/image2.jpg";
import img3 from "@/public/images/image-gallery/image3.jpg";
import img4 from "@/public/images/image-gallery/image4.jpg";
import img5 from "@/public/images/image-gallery/image5.jpg";
import img6 from "@/public/images/image-gallery/image6.jpg";
import bookMark from "@/public/images/image-gallery/bookmark.svg";
function ImageGallery() {
  return (
    // Main Container
    <div className="flex min-h-screen items-center justify-center bg-cyan-50 text-black">
      {/* Card Container */}
      <div className="m-3 space-y-10 rounded-3xl bg-white p-6 shadow-2xl md:p-40">
        {/*  Menu Container*/}
        <div className="flex flex-col items-center justify-center space-y-3 md:mb-24 md:flex-row md:justify-end md:space-y-0 md:space-x-8">
          {/* Element 1 */}
          <div className="group">
            <a href="#">Vector</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100"></div>
          </div>
          {/* Element 2 */}
          <div className="group">
            <a href="#">Illustrations</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100"></div>
          </div>
          {/* Element 3 */}
          <div className="group">
            <a href="#">Images</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100"></div>
          </div>
          {/* Element 4 */}
          <div className="group">
            <a href="#">Icons</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100"></div>
          </div>
        </div>
        {/* Search Container */}
        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
          {/* Input & Search Icon */}
          <div className="flex justify-between border-b text-gray-300">
            <input
              type="text"
              className="ml-6 text-gray-400 placeholder:font-thin focus:outline-none md:w-80"
              placeholder="Search"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>
          </div>
          {/* Upload Button */}
          <button className="rounded-md border border-black bg-black px-14 py-3 text-lg font-normal text-white shadow-2xl duration-200 hover:bg-white hover:text-black">
            Upload
          </button>
        </div>
        {/* Grid Container */}
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {/* <!-- Image 1 --> */}
          <div className="group relative">
            <Image src={img1} alt="" className="w-72" />
            <div className="absolute right-0 bottom-0 left-0 bg-black/[.4] p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <Image src={bookMark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Image 2 --> */}
          <div className="group relative">
            <Image src={img2} alt="" className="w-72" />
            <div className="absolute right-0 bottom-0 left-0 bg-black/[.4] p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <Image src={bookMark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Image 3 --> */}
          <div className="group relative">
            <Image src={img3} alt="" className="w-72" />
            <div className="absolute right-0 bottom-0 left-0 bg-black/[.4] p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <Image src={bookMark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Image 4 --> */}
          <div className="group relative">
            <Image src={img4} alt="" className="w-72" />
            <div className="absolute right-0 bottom-0 left-0 bg-black/[.4] p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <Image src={bookMark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Image 5 --> */}
          <div className="group relative">
            <Image src={img5} alt="" className="w-72" />
            <div className="absolute right-0 bottom-0 left-0 bg-black/[.4] p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <Image src={bookMark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Image 6 --> */}
          <div className="group relative">
            <Image src={img6} alt="" className="w-72" />
            <div className="absolute right-0 bottom-0 left-0 bg-black/[.4] p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <Image src={bookMark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImageGallery;
