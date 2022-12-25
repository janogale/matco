import Image from "next/image";
import Box1 from "../../public/images/about/box1.png";
import Box2 from "../../public/images/about/box2.png";
import Box3 from "../../public/images/about/box3.png";
import Box4 from "../../public/images/about/box4.png";

export default function About() {
  return (
    <>
      <div className="content text-lg">
        <p className="mb-5">
          Al Rostamani Trading Company (ARTC), a member of Al Rostamani Group
          which is one of the largest and oldest business conglomerates in the
          United Arab Emirates. Founded in 1957 with the late Mr. Abdullah
          Hassan Al Rostamani as Chairman, the group has grown steadfastly and
          conscientiously over the last 50 years with the guiding principles of
          commitment, care and vision with genuine concern for the community.
        </p>
        <p className="mb-5">
          ARTC is the sole authorized distributor of Suzuki automobiles in the
          UAE which is headquartered in Dubai, was founded in the year 2002 and
          is now well established and respected in the market. Today, ARTC has
          representation across the UAE with Sales, Service and Parts outlets
          able to serve its customers throughout the country.
        </p>
        <p className="mb-5">
          Suzuki offers a wide range of product lines to satisfy the needs of
          most new car buyers in terms of quality, safety and value for money.
          It also efficiently caters to the transportation needs of the business
          sector as if offers a full range of commercial fleet vehicles suitable
          for many practical and economical purposes. ARTC takes pride in
          offering its customers the best possible solutions in Sales, Service
          and Parts supply.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="relative overflow-hidden">
          <Image
            src={Box1}
            alt="box"
            width={200}
            height={200}
            className="h-full hover:scale-105 transform transition ease-out duration-500 w-full"
          />
          <div className="absolute top-0 left-0 p-3">
            <div className="text-white text-3xl text-shadow-overlay">
              PARTNERSHIP
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={Box2}
            alt="box"
            width={200}
            height={200}
            className="h-full hover:scale-105 transform transition ease-out duration-500 w-full"
          />
          <div className="absolute bottom-0 left-0 p-3">
            <div className="text-white text-3xl text-shadow-overlay">
              COLLABORATION
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={Box3}
            alt="box"
            width={200}
            height={200}
            className="h-full hover:scale-105 transform transition ease-out duration-500 w-full"
          />
          <div className="absolute bottom-0 left-0 p-3">
            <div className="text-white text-3xl text-shadow-overlay">
              PERFORMANCE
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={Box4}
            alt="box"
            width={200}
            height={200}
            className="h-full hover:scale-105 transform transition ease-out duration-500 w-full"
          />
          <div className="absolute bottom-0 left-0 p-3">
            <div className="text-white text-3xl text-shadow-overlay">
              SUPPORT
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
