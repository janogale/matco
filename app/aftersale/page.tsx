import React from 'react';

const page = () => {
  return (
    <section>
      <div className=" px-6 py-10 mx-auto">
        {/* why choose section */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
          <div className="grid max-w-screen-lg gap-8 lg:grid-cols-1 sm:mx-auto">
            <div className="container ">
              <div className="bg-gray-300 p-2 w-full mb-4">
                <p className="text-xl font-bold text-gray-500">
                  Why Choose CFAO Motors
                </p>
              </div>
              <div className="flex">
                <div>
                  <p className="text-md text-gray-900 text-justify">
                    <span className="font-bold text-gray-900">
                      Keeps your Suzuki running like a Suzuki.
                    </span>{' '}
                    <br />
                    There is service, and there is Suzuki Service – the service
                    that is there just for you and your Suzuki. And it can be
                    obtained only from your Suzuki dealer who is committed to
                    Suzuki Genuine quality.
                    <br />
                    <span className="font-bold text-gray-900">
                      {' '}
                      Suzuki service expertise
                    </span>
                    <br />
                    Every Suzuki model makes specific demands on service
                    expertise. Our employees are highly qualified to provide
                    this, and they are integrated into the Suzuki international
                    training scheme. You can rest assured: no-one knows your
                    Suzuki better than we do.
                  </p>
                  <hr className="w-full my-6 border-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warranty section */}

        {/* recall check section */}

        {/* special offers section */}
      </div>
    </section>
  );
};

export default page;
