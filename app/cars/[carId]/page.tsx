export default function Page({ params }: any) {
  console.log(params);
  return (
    <section>
      <div>
        <h1>This is Car {params.carId}</h1>

        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
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
            <div className="bg-red-600 p-2">
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

            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3">
              <div className="lg:flex">
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <h1 className="text-xl font-bold ">TITLE</h1>
                  <p className="text-xl font-normal text-gray-800 text-justify  ">
                    How to use sticky note for problem solving How to use sticky
                    note for problem solving How to use sticky note for problem
                    solving How to use sticky note for problem solving How to
                    use sticky note for problem solving How to use sticky note
                    for problem solving How to use sticky note for problem
                    solving How to use sticky note for problem solving How to
                    use sticky note for problem solving How to use sticky note
                    for problem solving How to use sticky note for problem
                    solving
                  </p>
                </div>
              </div>

              <div className="">
                <div className="">
                  <div className="lg:flex gap-4 mb-4">
                    <img
                      className="object-contain w-full h-56 rounded-lg lg:w-100"
                      src="/images/1.png"
                      alt=""
                    />
                    <img
                      className="object-cover w-full h-56 rounded-lg lg:w-100"
                      src="/images/1.png"
                      alt=""
                    />
                  </div>
                  <div className="lg:flex gap-4 mb-4">
                    <img
                      className="object-cover w-full h-56 rounded-lg lg:w-100"
                      src="/images/1.png"
                      alt=""
                    />

                    <img
                      className="object-cover w-full h-56 rounded-lg lg:w-100"
                      src="/images/1.png"
                      alt=""
                    />
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
