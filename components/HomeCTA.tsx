export default function HomeCTA() {
  return (
    <div className="mx-auto bg-[rgb(2,132,199)] mt-20 my-8">
      <div className="overflow-hidden rounded-lg  shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1 relative">
          <img
            className="right-0 bottom-20 absolute object-cover object-left-top "
            src="/images/models/vitara/1.webp"
            alt="MATCO Motors Vitara"
          />
        </div>
        <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div className="lg:self-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to Drive?</span>
              <span className="block">Book your Free Test Drive</span>
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
