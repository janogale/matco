export default function Page({ params }: any) {
  console.log(params);
  return (
    <section>
      <div>
        <h1>This is Car {params.carId}</h1>

        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              From the blog
            </h1>

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
