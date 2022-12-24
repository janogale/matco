export default function Page({ params }: any) {
  console.log(params);
  return (
    <section>
      <div>
        <h1>This is Car {params.carId}</h1>

        <section className="bg-white">
          <div className=" px-6 py-10 mx-auto">
            <div className="mx-auto bg-gray-50 my-8">
              <div className="overflow-hidden rounded-lg lg:grid lg:grid-cols-2 lg:gap-4">
                <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1 relative">
                  <img
                    className="right-0 bottom-20 absolute object-cover object-left-top "
                    src="/images/models/vitara/1.webp"
                    alt="MATCO Motors Vitara"
                  />
                </div>
                <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                  <div className="lg:self-center">
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                      <span className="block">Ready to Drive?</span>
                      <span className="block">Book your Free Test Drive</span>
                    </h2>

                    <a
                      href="tel:0636390004"
                      className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-bold text-green-600 shadow hover:bg-indigo-50"
                    >
                      Call Us For Booking Vehicle
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-red-600 p-2 w-full">
              <div className="flex ml-40 ">
                <a
                  href="#"
                  className="text-white mr-4 font-semibold text-xl cursor-pointer hover:underline"
                >
                  INTERIOR
                </a>
                <a
                  href="#"
                  className="text-white mr-4 font-semibold text-xl cursor-pointer hover:underline"
                >
                  OUTSIDE
                </a>
                <a
                  href="#"
                  className="text-white mr-4 font-semibold text-xl cursor-pointer hover:underline"
                >
                  SECURITY
                </a>
                <a
                  href="#"
                  className="text-white mr-4 font-semibold text-xl cursor-pointer hover:underline"
                >
                  SPECIFICATIONS
                </a>
              </div>
            </div>
            {/* interior section */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
              <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
                <div className="flex flex-col justify-center">
                  <div className="bg-gray-300 p-2 w-full mb-4">
                    <p className="text-xl font-bold text-gray-500">INTERIOR</p>
                  </div>
                  <div className="flex">
                    <div>
                      <h6 className="mb-2 font-semibold leading-5">TITLE</h6>
                      <p className="text-md text-gray-900 text-justify">
                        Skate ipsum dolor sit amet, alley oop vert mute-air
                        Colby Carter flail 180 berm. Half-cab camel back ollie
                        transition ledge Wes Humpston 1080. Skate ipsum dolor
                        sit amet, alley oop vert mute-air Colby Carter flail 180
                        berm. Half-cab camel back ollie transition ledge Wes
                        Humpston 1080. Skate ipsum dolor sit amet, alley oop
                        vert mute-air Colby Carter flail 180 berm. Half-cab
                        camel back ollie transition ledge Wes Humpston 1080.
                        Skate ipsum dolor sit amet, alley oop vert mute-air
                        Colby Carter flail 180 berm. Half-cab camel back ollie
                        transition ledge Wes Humpston 1080. Skate ipsum dolor
                        sit amet, alley oop vert mute-air Colby Carter flail 180
                        berm. Half-cab camel back ollie transition ledge Wes
                        Humpston 1080. Skate ipsum dolor sit amet, alley oop
                        vert mute-air Colby Carter flail 180 berm. Half-cab
                        camel back ollie transition ledge Wes Humpston 1080.
                        transition ledge Wes Humpston 1080. Skate ipsum dolor
                        sit amet, alley oop vert mute-air Colby Carter flail 180
                        berm. Half-cab camel back ollie transition ledge Wes
                        Humpston 1080. Skate ipsum dolor sit amet, alley oop
                        vert mute-air Colby Carter flail 180 berm. Half-cab
                        camel back ollie transition ledge Wes Humpston 1080.
                      </p>
                      <hr className="w-full my-6 border-gray-300" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <img
                    className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                    src="/images/models/jac/2.webp"
                    alt=""
                  />
                  <img
                    className="object-cover w-full h-48 rounded shadow-lg"
                    src="/images/models/jac/1.webp"
                    alt=""
                  />
                  <img
                    className="object-cover w-full h-48 rounded shadow-lg"
                    src="/images/models/jac/1.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* outside section */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div className="bg-gray-300 p-2">
                  <p className="text-xl font-bold text-gray-500">OUTSIDE</p>
                </div>
              </div>
              <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
                <div className="flex flex-col justify-center">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                        <svg
                          className="w-8 h-8 text-deep-purple-accent-400"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 font-semibold leading-5">
                        They urge you to put down
                      </h6>
                      <p className="text-sm text-gray-900">
                        Skate ipsum dolor sit amet, alley oop vert mute-air
                        Colby Carter flail 180 berm. Half-cab camel back ollie
                        transition ledge Wes Humpston 1080.
                      </p>
                      <hr className="w-full my-6 border-gray-300" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                        <svg
                          className="w-8 h-8 text-deep-purple-accent-400"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 font-semibold leading-5">
                        The powerless in a world
                      </h6>
                      <p className="text-sm text-gray-900">
                        The first mate and his Skipper too will do their very
                        best to make the others comfortable in their tropic
                        island nest. Michael Knight a young loner.
                      </p>
                      <hr className="w-full my-6 border-gray-300" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                        <svg
                          className="w-8 h-8 text-deep-purple-accent-400"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 font-semibold leading-5">
                        Tell them I hate them
                      </h6>
                      <p className="text-sm text-gray-900">
                        Chase ball of string eat plants, meow, and throw up
                        because I ate plants going to catch the red dot today
                        going to catch the red dot today. I could pee on this if
                        I had the energy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <img
                    className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                    src="/images/models/jac/2.webp"
                    alt=""
                  />
                  <img
                    className="object-cover w-full h-48 rounded shadow-lg"
                    src="/images/models/jac/1.webp"
                    alt=""
                  />
                  <img
                    className="object-cover w-full h-48 rounded shadow-lg"
                    src="/images/models/jac/1.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
