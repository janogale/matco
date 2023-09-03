import Image from "next/image";
import Container from "../../components/ui/Container";
import ImageBanner from "../../public/images/models/dzire/cover.png";

const services = [
  { service: "Transparent Anti-Rust Treatment with 5 years warranty" }, 
  { service: "Paint Protection with 5 years warranty" },
  { service: "Vkool Window Tint with 5 years warranty" },
  { service: "Performance Services (Engine Flush & Fuel Treatment)" },
  { service: "Paintless Dent & Removal Smart Repairs" },
  { service: "Genuine Accessories & After Market Accessories" },
  { service: "Second & Third Year Agency Repair Insurance Policy" },
  { service: "Insurance Plans" },
];

export default function ServicesPage() {
  return (
    <Container>
      <section className="section space-y-16 xxl:space-y-24">
      <div className="cover relative">
        <div className="w-full overflow-hidden flex items-center justify-end">
          <div className="rounded-lg overflow-hidden w-full h-96 min-h-96">
            <Image
              src={ImageBanner}
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
                  Our 
                </span>
                <span className="text-3xl md:text-5xl lg:text-8xl uppercase block text-white">
                Services
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="prose prose-lg prose-indigo mx-auto my-12 text-gray-500">
        <p>
        Different Value Added Services with descriptions and pictures to be published on this page.
        </p>
        <p>Value Added Services such as:</p>
        <ul className="list-disc pl-6">
          {services.map((s) => (
            <li key={s.service}>{s.service}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col prose prose-lg prose-indigo mx-auto mt-12 text-gray-500">
         <p>Repaired with precision, we bring back your Suzuki/JAC to same as new standards and ready to take the roads again with pride.</p>
         <p>We help you with getting Agency Body Repairs from Insurance companies for 2nd and 3rd Year through our partner Insurance brokers at competitive rates.</p>
        </div>
      </section>
    </Container>
  );
}
