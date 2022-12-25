export default function Page({ params }: any) {
  console.log(params);
  return (
    <section>
      <div>
        <h1>This is Car {params.carId}</h1>

        <section className="bg-white">
          <div className=" px-6 py-10 mx-auto">
            <div className="mx-auto my-8">
              <div className="overflow-hidden rounded-lg lg:grid lg:grid-cols-2 lg:gap-4 justify-center">
                <div className="px-6  pb-12 sm:px-16 sm:pt-16 lg:py-6 lg:pr-0 xl:py-2 xl:px-20">
                  <div className="text-center justify-center">
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mt-20 ml-14">
                      <span className="block">Ready to Drive?</span>
                      <span className="block">Book your Free Test Drive</span>
                    </h2>
                  </div>
                </div>
                <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1 relative">
                  <img
                    className="right-0 bottom-20 absolute object-cover object-left-top "
                    src="/images/models/vitara/1.webp"
                    alt="MATCO Motors Vitara"
                  />
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
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
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
                    className="object-cover w-full h-56 col-span-2 rounded"
                    src="/images/details/1.jpg"
                    alt=""
                  />
                  <img
                    className="object-cover w-full h-48 rounded"
                    src="/images/details/2.jpg"
                    alt=""
                  />
                  <img
                    className="object-cover w-full h-48 rounded"
                    src="/images/details/3.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* outside section */}
            <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
              <div className="max-w-xl mb-2 md:mx-auto sm:text-center lg:max-w-2xl md:mb-2"></div>
              <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
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
                <div className="flex flex-col justify-center">
                  <div className="bg-gray-300 p-2 w-full mb-4">
                    <p className="text-xl font-bold text-gray-500">OUTSIDE</p>
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
              </div>
            </div>

            {/* security section */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
              <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
                <div className="flex flex-col justify-center">
                  <div className="bg-gray-300 p-2 w-full mb-4">
                    <p className="text-xl font-bold text-gray-500">SECURITY</p>
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
                    className="object-cover w-full h-56 col-span-2 rounded"
                    src="/images/details/1.jpg"
                    alt=""
                  />
                  <img
                    className="object-cover w-full h-48 rounded"
                    src="/images/models/jac/1.webp"
                    alt=""
                  />
                  <img
                    className="object-cover w-full h-48 rounded"
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
