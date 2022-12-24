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

            <div className="container grid grid-cols-2 gap-8 mt-8 md:mt-16 md:grid-cols-2">
              <div className="lg:flex ml-20">
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <p className="text-lg text-gray-800 text-justify  ">
                    <span className="text-black font-bold text-xl">TITLE</span>{' '}
                    <br />
                    <span className="text-sm">
                      {' '}
                      How to use sticky note for problem solving How to use
                      sticky note for problem solving How to use sticky note for
                      problem solving How to use sticky note for problem solving
                      How to use sticky note for problem solving How to use
                      sticky note for problem solving How to use sticky note for
                      problem solving How to use sticky note for problem solving
                      How to use sticky note for problem solving How to use
                      sticky note for problem solving How to use sticky note for
                      problem solving
                    </span>{' '}
                    <br />
                    <span className="text-md text-black font-medium">
                      How to use sticky
                    </span>{' '}
                    <br />
                    <span className="text-sm">
                      How to use sticky note for problem solving How to use
                      sticky note for problem solving How to use sticky note for
                      problem solving How to use sticky note for problem solving
                      How to use sticky note for problem solving How to use
                      sticky note for problem solving How to use sticky note for
                      problem solving How to use sticky note for problem solving
                      How to use sticky note for problem solving How to use
                      sticky note for problem solving How to use sticky note for
                      problem solving How to use sticky note for problem solving
                      How to use sticky note for problem solving How to use
                      sticky note for problem solving How to use sticky note for
                      problem solving How to use sticky note for problem solving
                      How to use sticky note for problem solving How to use
                      sticky note for problem solving How to use sticky note for
                      problem solving How to use sticky note for problem solving
                      How to use sticky note for problem solving How to use
                      sticky note for problem solving
                    </span>
                  </p>
                </div>
              </div>

              <div className=" w-full">
                <div className="grid-cols-3 p-2 space-y-2 bg-yellow-200 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
                  <div className="w-full rounded">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                      alt="image"
                    />
                  </div>
                  <div className="w-full col-span-2 row-span-2 rounded">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                      alt="image"
                    />
                  </div>
                  <div className="w-full rounded">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                      alt="image"
                    />
                  </div>
                  <div className="w-full rounded">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                      alt="image"
                    />
                  </div>
                  <div className="w-full rounded">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                      alt="image"
                    />
                  </div>
                  <div className="w-full rounded">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                      alt="image"
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
