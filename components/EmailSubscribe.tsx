import Image from "next/image";
import foodImage from "@/public/images/email-subscribe/image.jpg";

function EmailSubscribe() {
  return (
    // Background Container
    <div className="flex h-screen items-center justify-center bg-zinc-800 font-serif">
      {/* Card */}
      <div className="mx-6 max-w-sm rounded-2xl bg-zinc-900 p-2 md:max-w-full">
        {/* Flex Container */}
        <div className="flex flex-col items-center justify-center md:flex-row">
          <Image
            src={foodImage}
            alt="food image"
            className="h-80 rounded-xl duration-200 hover:scale-105 md:h-74 md:w-60 md:rounded-l-xl md:rounded-r-none"
          />
          {/* Content */}
          <div className="p-6 md:p-12">
            <h1 className="text-center text-xl font-medium text-white md:text-left">
              Get diet and fitness tips in your inbox
            </h1>
            <p className="my-4 max-w-xs text-center text-sm leading-5 tracking-wide text-white md:text-left">
              Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter.
            </p>
            <div className="mt-5 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-3">
              <input
                type="text"
                className="w-full rounded-sm border border-zinc-600 p-2 px-4 text-center text-sm text-white placeholder:text-xs focus:outline-0 placeholder:md:text-left"
                placeholder="Enter your email address "
              />
              <button className="rounded-sm bg-lime-500 px-6 py-2 text-black duration-300 hover:bg-lime-700 hover:text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmailSubscribe;
