export default function Page({ params }: any) {
  return (
    <section>
      <div>
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
                        <span className="font-bold text-gray-900">
                          Comfort and elegance in a functional cabin
                        </span>{' '}
                        <br />
                        Welcome to a world where elegance meets utility and
                        every inch of space is designed to optimize comfort and
                        convenience for the driver, as well as family members.
                        With contemporary interiors, technology to complement
                        the luxury and accessories to enhance your experience,
                        Ertiga is a place where the world will be more
                        beautiful.
                        <br />
                        <span className="font-bold text-gray-900">
                          {' '}
                          Easy to use luggage space{' '}
                        </span>
                        <br />
                        Effortlessly haul shopping bags, suitcases and more in
                        the spacious rear luggage area with a 50:50 split
                        luggage board. The large tailgate opening simplifies the
                        loading and unloading of everyone's personal effects.
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
                    src="/images/details/6.jpg"
                    alt=""
                  />
                  <img
                    className="object-cover w-full h-48 rounded shadow-lg"
                    src="/images/details/5.jpg"
                    alt=""
                  />
                  <img
                    className="object-cover w-full h-48 rounded shadow-lg"
                    src="/images/details/4.jpg"
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
                        An all-new exterior design with a taller and wider nose,
                        dynamic shoulder line, deeper curves, aerodynamic body
                        and refined chrome accents. The exterior of the new
                        Ertiga is elegant with a strong personality that clearly
                        differentiates it from other minivans; the lamps feature
                        a distinct three-dimensional design that complements the
                        large body with a long vertical LED light guide.
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
                      <h6 className="mb-2 font-semibold leading-5">
                        Enhanced security
                      </h6>
                      <p className="text-md text-gray-900 text-justify">
                        From the protective body to the airbags and intelligent
                        warnings, the Ertiga is fully designed to protect you,
                        your fellow travelers and your pedestrians. Suzuki's
                        advanced TECT (Total Effective Control Technology) body
                        makes extensive use of ultra-high-tensile steel to
                        increase stiffness, lower weight despite larger overall
                        dimensions, and more effectively absorb and disperse
                        energy from impact in the event of a collision. New load
                        paths under the engine compartment further mitigate
                        damage in high-speed frontal collisions.
                      </p>
                      <hr className="w-full my-6 border-gray-300" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <img
                    className="object-cover w-full h-56 col-span-2 rounded"
                    src="/images/details/7.jpg"
                    alt=""
                  />
                  <img
                    className="object-cover w-full h-48 rounded"
                    src="/images/details/8.jpg"
                    alt=""
                  />
                  <img
                    className="object-cover w-full h-48 rounded"
                    src="/images/details/9.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* specification section */}
            <div className="bg-red-500 P-8 py-2 M text-center">
              <span className="font-semibold text-xl">SPECIFICATIONS</span>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
              <div className="grid max-w-screen-lg gap-8 lg:grid-cols-1 sm:mx-auto">
                <div className="flex flex-col justify-center">
                  <div className="bg-gray-300 p-2 w-full mb-4">
                    <p className="text-xl font-bold text-gray-500">
                      SPECIFICATIONS
                    </p>
                  </div>
                  <div className="flex">
                    <div>
                      <div className="space-y-4">
                        <details
                          className="group [&_summary::-webkit-details-marker]:hidden"
                          open
                        >
                          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                            <h2 className="font-medium text-gray-900">
                              PERFORMANCE & FUEL CONSUMPTION
                            </h2>

                            <svg
                              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </summary>

                          <p className="px-4 mt-4 leading-relaxed text-gray-700">
                            The new Jimny's 1.5$ engine generates strong torque
                            over a wide rpm range for powerful off-road
                            performance. small and lightweight, it also delivers
                            high fuel efficiency and CO2 emissions from 146g/km.
                          </p>
                        </details>

                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                            <h2 className="font-medium text-gray-900">
                              STORAGE & UTILITY
                            </h2>

                            <svg
                              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </summary>

                          <p className="px-4 mt-4 leading-relaxed text-gray-700">
                            The new Jimny's 1.5$ engine generates strong torque
                            over a wide rpm range for powerful off-road
                            performance. small and lightweight, it also delivers
                            high fuel efficiency and CO2 emissions from 146g/km.
                          </p>
                        </details>
                        <details
                          className="group [&_summary::-webkit-details-marker]:hidden"
                          open
                        >
                          <summary className="flex  justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                            <h2 className="font-medium text-gray-900">
                              PERFORMANCE & FUEL CONSUMPTION
                            </h2>

                            <svg
                              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </summary>

                          <p className="px-4 mt-4 leading-relaxed text-gray-700">
                            The new Jimny's 1.5$ engine generates strong torque
                            over a wide rpm range for powerful off-road
                            performance. small and lightweight, it also delivers
                            high fuel efficiency and CO2 emissions from 146g/km.
                          </p>
                        </details>

                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                            <h2 className="font-medium text-gray-900">
                              STORAGE & UTILITY
                            </h2>

                            <svg
                              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </summary>

                          <p className="px-4 mt-4 leading-relaxed text-gray-700">
                            The new Jimny's 1.5$ engine generates strong torque
                            over a wide rpm range for powerful off-road
                            performance. small and lightweight, it also delivers
                            high fuel efficiency and CO2 emissions from 146g/km.
                          </p>
                        </details>
                        <details
                          className="group [&_summary::-webkit-details-marker]:hidden"
                          open
                        >
                          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                            <h2 className="font-medium text-gray-900">
                              PERFORMANCE & FUEL CONSUMPTION
                            </h2>

                            <svg
                              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </summary>

                          <p className="px-4 mt-4 leading-relaxed text-gray-700">
                            The new Jimny's 1.5$ engine generates strong torque
                            over a wide rpm range for powerful off-road
                            performance. small and lightweight, it also delivers
                            high fuel efficiency and CO2 emissions from 146g/km.
                          </p>
                        </details>

                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                            <h2 className="font-medium text-gray-900">
                              STORAGE & UTILITY
                            </h2>

                            <svg
                              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </summary>

                          <p className="px-4 mt-4 leading-relaxed text-gray-700">
                            The new Jimny's 1.5$ engine generates strong torque
                            over a wide rpm range for powerful off-road
                            performance. small and lightweight, it also delivers
                            high fuel efficiency and CO2 emissions from 146g/km.
                          </p>
                        </details>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
