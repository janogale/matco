export default function HomeCTA() {
    return (
      <div className="mx-auto bg-red-700 mt-20 my-8">
        <div className="overflow-hidden rounded-lg  shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1 relative order-2">
            <img
              className="right-0 bottom-20 absolute object-cover object-left-top "
              src="/images/models/jac/ext-3.jpg"
              alt="MATCO Motors N-Series"
            />
          </div>
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="font-bold tracking-tight text-white">
                <span className="block text-3xl sm:text-4xl">Picture Gallery</span>
                <span className="block text-xl sm:text-2xl mt-2">Discover the N-Series and envision it for your business. From outside to inside.</span>
              </h2>
  
              <a
                href="tel:0636390004"
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-bold text-sky-600 shadow hover:bg-indigo-50"
              >
                Call Us For Booking Vehicle
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  