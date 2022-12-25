export default function AboutPage() {
  return (
    <main>
      <section className="section space-y-16">
        <div className="cover relative">
          <img
            src="https://suzuki.ae/assets/images/recall/recall-cover.png"
            alt="cover"
            className="w-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25">
            <div className="md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-800 flex items-end h-full pb-8 md:pb-16 xxl:pb-32">
              <h1 className="leading-none md:leading-12">
                <span className="text-4xl md:text-6xl lg:text-8xl uppercase block text-white opacity-50 md:opacity-25">
                  OUR
                </span>
                <span className="text-3xl md:text-5xl lg:text-6xl uppercase block text-white">
                  COMMITMENT
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-800">
          <div className="w-full space-y-10">
            <div className="content text-lg">
              <p>
                Al Rostamani Trading Company (ARTC), a member of Al Rostamani
                Group which is one of the largest and oldest business
                conglomerates in the United Arab Emirates. Founded in 1957 with
                the late Mr. Abdullah Hassan Al Rostamani as Chairman, the group
                has grown steadfastly and conscientiously over the last 50 years
                with the guiding principles of commitment, care and vision with
                genuine concern for the community.
              </p>
              <p>
                ARTC is the sole authorized distributor of Suzuki automobiles in
                the UAE which is headquartered in Dubai, was founded in the year
                2002 and is now well established and respected in the market.
                Today, ARTC has representation across the UAE with Sales,
                Service and Parts outlets able to serve its customers throughout
                the country.
              </p>
              <p>
                Suzuki offers a wide range of product lines to satisfy the needs
                of most new car buyers in terms of quality, safety and value for
                money. It also efficiently caters to the transportation needs of
                the business sector as if offers a full range of commercial
                fleet vehicles suitable for many practical and economical
                purposes. ARTC takes pride in offering its customers the best
                possible solutions in Sales, Service and Parts supply.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="relative overflow-hidden">
                <img
                  src="https://suzuki.ae/assets/images/commitment/box1.png"
                  alt="box"
                  className="h-full hover:scale-105 transform transition ease-out duration-500 w-full"
                />
                <div className="absolute top-0 left-0 p-3">
                  <div className="text-white text-3xl text-shadow-overlay">
                    PARTNERSHIP
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="https://suzuki.ae/assets/images/commitment/box4.png"
                  alt="box"
                  className="h-full hover:scale-105 transform transition ease-out duration-500 w-full"
                />
                <div className="absolute bottom-0 left-0 p-3">
                  <div className="text-white text-3xl text-shadow-overlay">
                    COLLABORATION
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="https://suzuki.ae/assets/images/commitment/box3.png"
                  alt="box"
                  className="h-full hover:scale-105 transform transition ease-out duration-500 w-full"
                />
                <div className="absolute bottom-0 left-0 p-3">
                  <div className="text-white text-3xl text-shadow-overlay">
                  PERFORMANCE
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="https://suzuki.ae/assets/images/commitment/box4.png"
                  alt="box"
                  className="h-full hover:scale-105 transform transition ease-out duration-500 w-full"
                />
                <div className="absolute bottom-0 left-0 p-3">
                  <div className="text-white text-3xl text-shadow-overlay">
                  SUPPORT
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
