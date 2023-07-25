import Image from "next/image";
import Container from "../../components/ui/Container";
import cover from "../../public/images/models/grant-vitara/grant-vitara.jpg";

export default function FinancePage() {
  return (
    <Container>
      <div className="cover relative">
        <div className="w-full overflow-hidden flex items-center justify-end">
          <div className="rounded-lg overflow-hidden w-full h-96 min-h-96">
            <Image
              src={cover}
              alt="cover"
              width={500}
              height={500}
              className="w-full h-auto group text-center rounded-md bg-white hover:cursor-pointer hover:opacity-75 hover:scale-105 transform transition ease-out duration-500 cursor-pointer"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-25">
            <div className="md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-800 flex items-center h-full xxl:pb-48">
              <h1 className="font-semibold leading-none md:leading-12 ml-16">
                <span className="text-4xl md:text-6xl lg:text-6xl uppercase block text-white opacity-50 md:opacity-25 -ml-16">
                  Our Finance
                </span>
                <span className="text-3xl md:text-5xl lg:text-8xl uppercase block text-white">
                  Installment
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="prose prose-lg prose-indigo mx-auto my-12 text-gray-500">
      <p>
        Buying a car is exciting! Whether it gives you that ultimate sense of
        freedom to take a sho&apos;t left whenever, or you simply want to travel
        from point A to point B, we have a Suzuki and JAC for every type of
        adventure.
      </p>
      <p>
        Visit our nearest office determine what your car&apos;s yearly
        instalment will be. or
      </p>
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
        or Call MATCO Service Hotline Number:
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
    </Container>
  );
}
