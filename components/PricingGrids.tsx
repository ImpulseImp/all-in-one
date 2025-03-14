function PricingGrids() {
  return (
    //Background Container
    <div className="flex min-h-screen items-center justify-center bg-blue-950 font-sans text-white">
      {/* Cards Container */}
      <div className="mt-10 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        {/* Card 1*/}
        <div className="rounded-xl bg-slate-700 text-white">
          {/* upper card container */}
          <div className="mx-2 mt-2 flex flex-col items-center justify-center rounded-t-xl bg-blue-950 p-8">
            <div className="mb-10 uppercase">basic</div>
            <span className="mb-2 font-serif text-5xl">100GB</span>
            <p className="mb-4 font-light">$1.99/month</p>
            <a
              href="#"
              className="my-6 inline-block rounded-lg border border-violet-600 px-10 py-3 text-center duration-200 hover:border-violet-800 hover:bg-violet-800"
            >
              Purchase
            </a>
          </div>
          {/* Border */}
          <div className="border-t border-slate-700"></div>
          {/* lower card container */}
          <div className="mx-2 mb-2 bg-blue-950 p-4">
            {/* List Container */}
            <div className="space-y-2">
              {/* List Item 1 */}
              <div className="flex justify-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm">100 GB of storage</span>
              </div>
              {/* List Item 2 */}
              <div className="flex justify-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm">Option to add members</span>
              </div>
              {/* List Item 3 */}
              <div className="flex justify-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm">Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="rounded-xl bg-slate-700 text-white">
          {/* upper card container */}
          <div className="mx-2 mt-2 flex flex-col items-center justify-center rounded-t-xl bg-blue-950 p-8">
            <div className="mb-10 uppercase">basic</div>
            <span className="mb-2 font-serif text-5xl">100GB</span>
            <p className="mb-4 font-light">$1.99/month</p>
            <a
              href="#"
              className="my-6 inline-block rounded-lg border border-violet-600 px-10 py-3 text-center duration-200 hover:border-violet-800 hover:bg-violet-800"
            >
              Purchase
            </a>
          </div>
          {/* Border */}
          <div className="border-t border-slate-700"></div>
          {/* lower card container */}
          <div className="mx-2 mb-2 bg-blue-950 p-4">
            {/* List Container */}
            <div className="space-y-2">
              {/* List Item 1 */}
              <div className="flex justify-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm">100 GB of storage</span>
              </div>
              {/* List Item 2 */}
              <div className="flex justify-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm">Option to add members</span>
              </div>
              {/* List Item 3 */}
              <div className="flex justify-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm">Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="rounded-xl bg-slate-700 text-white">
          {/* upper card container */}
          <div className="mx-2 mt-2 flex flex-col items-center justify-center rounded-t-xl bg-blue-950 p-8">
            <div className="mb-10 uppercase">basic</div>
            <span className="mb-2 font-serif text-5xl">100GB</span>
            <p className="mb-4 font-light">$1.99/month</p>
            <a
              href="#"
              className="my-6 inline-block rounded-lg border border-violet-600 px-10 py-3 text-center duration-200 hover:border-violet-800 hover:bg-violet-800"
            >
              Purchase
            </a>
          </div>
          {/* Border */}
          <div className="border-t border-slate-700"></div>
          {/* lower card container */}
          <div className="mx-2 mb-2 bg-blue-950 p-4">
            {/* List Container */}
            <div className="space-y-2">
              {/* List Item 1 */}
              <div className="flex justify-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm">100 GB of storage</span>
              </div>
              {/* List Item 2 */}
              <div className="flex justify-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm">Option to add members</span>
              </div>
              {/* List Item 3 */}
              <div className="flex justify-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm">Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PricingGrids;
