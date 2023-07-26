import React from "react";
import Image from "next/image";
import Container from "../../components/ui/Container";
import cover from "../../public/images/explore/suzuki-bg.jpg";
import GetQouteForm from "../../components/getqoutform/GetQoutForm";

const page = () => {
  return (
    <Container>
      <div className="cover relative">
        <div className="w-full overflow-hidden flex items-center justify-end">
          <Image
            className="w-full h-auto group text-center bg-white hover:cursor-pointer hover:opacity-75 hover:scale-105 transform transition ease-out duration-500 cursor-pointer"
            src={cover}
            alt="banner image"
            width={1500}
            height={500}
          />
          <div className="absolute inset-0 bg-black bg-opacity-25">
            <div className="md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-800 flex items-center h-full xxl:pb-48">
              <h1 className="font-semibold leading-none md:leading-12 ml-16">
                <span className="text-4xl md:text-6xl lg:text-6xl uppercase block text-white opacity-50 md:opacity-25 -ml-16">
                  Book
                </span>
                <span className="text-3xl md:text-5xl lg:text-8xl uppercase block text-white">
                  A service
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="md:max-w-screen-xl mx-auto mt-10 px-5 xxl:px-0 text-gray-800">
        <div className="w-full space-y-10">
          <div className="content text-lg">
            <h2 className="text-3xl font-semibold uppercase text-sky-600 mt-12 mb-5">
              Servicing
            </h2>
            <div className="prose prose-lg prose-indigo mt-5 text-gray-500">
              <p>
                Help us making your journey and Suzuki/JAC Service Experience a
                memorable one.
              </p>
              <p>
                Book an Appointment for all your servicing needs, including
                Express maintenance & get
              </p>
              <ul className="list-disc mt-5">
                <li>Priority Privileged Services</li>
                <li>
                  Extra 5% discount on Published Menu Pricing if booked between
                  Tuesday to Thursday for Periodic Maintenance Services
                </li>
                <li>Saturday Appointments (Cut off time Wednesday 5 pm)</li>
                <li>Free End of Warranty Inspection</li>
                <li>Recall / Product Update Check done in Advance</li>
              </ul>
              <div className="font-semibold mt-10">
                To know more details please drop a{" "}
                <a
                  href="https://wa.me/+252636390000"
                  target="_blank"
                  className="border-b border-gray-400 pb-1 hover:text-red-500"
                  rel="noreferrer"
                >
                  WhatsApp message
                </a>{" "}
                or Call Suzuki Service Hotline Number:
                <a
                  href="callto:+252636390000"
                  target="_blank"
                  className="border-b border-gray-400 pb-1 hover:text-red-500"
                  rel="noreferrer"
                >
                  +252 (63) 6390000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:max-w-screen-xl mx-auto mt-10 px-5 xxl:px-0">
        <div className="text-3xl font-semibold uppercase text-sky-600 mb-5">
          <div>Request Service booking</div>
        </div>
        <div className="shadow rounded-md p-5 mt-5 bg-gray-50">
          <GetQouteForm />
        </div>
      </div>
      <div className="prose prose-xl prose-indigo mt-5 text-gray-700">
        <ul className="list-disc mt-5">
          <li>
          This is only a Service Booking Request and Suzuki Service Team will call you to confirm if your requested date and time slot is available.
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default page;
