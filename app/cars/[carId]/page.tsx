import React from 'react'
import Image from 'next/image';
import Container from '../../../components/ui/Container';
import cover1 from '../../../public/images/details/cover1.jpg';
import cover2 from '../../../public/images/details/cover2.jpg';
import image1 from '../../../public/images/details/11.jpg';
import image2 from '../../../public/images/details/12.jpg';
import image3 from '../../../public/images/details/13.jpg';
import features1 from '../../../public/images/details/features1.jpg';
import features2 from '../../../public/images/details/features2.jpg';
import features3 from '../../../public/images/details/features3.jpg';
import features4 from '../../../public/images/details/features4.jpg';

export default function CarDetailsPage(){
  return (
    <Container>
    <section className="vehicle-info section space-y-16 xxl:space-y-24 mt-3">
      <div>
      <Image
            className="w-full"
            src={cover1}
            alt="banner image"
            width={1500}
            height={500}
          />
      </div>
      <div className='md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-800'>
        <div className='content'>
          <div className='mb-5 text-3xl font-semibold capitalize'>PURPOSE IN THE MAKING</div>
          <p className='text-lg text-gray-800'>
          Like its predecessors, the new Jimny remains a small, lightweight 4WD vehicle. Its unique dimensions mean the Jimny can manoeuvre where larger vehicles don’t dare to go. Its light weight keeps it going strong over mud, through sand, and up steep slippery slopes where heavier vehicles tend to get stuck.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='order-2 lg:order-1 image-scale-effect-small'>
        <Image
            className="w-full"
            src={image2}
            alt="banner image"
            width={1500}
            height={500}
          />
        </div>
        <div className='order-3'>
        <Image
            className="w-full"
            src={image1}
            alt="banner image"
            width={1500}
            height={500}
          />
        </div>
      </div>
      <div className='md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-900'>
        <div className='px-5 text-left lg:px-0'>
          <div className='mb-5 text-3xl font-semibold capitalize'>POWERED BY PURPOSE</div>
          <p className='text-lg text-gray-800'>
            <span className='font-bold'>New 1.5l engine:</span>
            The new 1.5l engine generates strong torque over a wide rpm range for powerful off-road performance. Small and lightweight, it also delivers high fuel efficiency.
          </p>
          <p className='text-lg text-gray-800'>
            <span className='font-bold'>Brake LSD Traction control:</span>
            If two wheels diagonal from each other lose grip while you’re traveling over slippery surfaces, this feature is designed to automatically brake the slipping wheels and redistribute torque to the other two wheels.
          </p>
          <p className='text-lg text-gray-800'>
            <span className='font-bold'>Hill Descent Control:</span>
            Automatically apply the brakes with the push of a button to maintain a fixed decent speed while you concentrate on steering without using the brake pedal or clutch.
          </p>
        </div>
      </div>
      <div className='md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-900'>
        <div className='text-3xl text-gray-800 font-semibold capitalize'>OFF-ROAD PERFORMANCE</div>
        <div className='mt-3'>
          <div className='text-2xl font-semibold text-gray-800 capitalize'>RIGID LADDER FRAME CHASSIS</div>
          <p className='text-lg text-gray-800'>
          From the very first generation, the Jimny has always featured a ladder frame that offers a solid foundation for serious off-road performance.
          </p>
        </div>
        <div className='mt-3'>
          <div className='text-2xl font-semibold text-gray-800 capitalize'>RIGID LADDER FRAME CHASSIS</div>
          <p className='text-lg text-gray-800'>
          From the very first generation, the Jimny has always featured a ladder frame that offers a solid foundation for serious off-road performance.
          </p>
        </div>
        <div className='mt-3'>
          <div className='text-2xl font-semibold text-gray-800 capitalize'>3-LINK RIGID AXLE SUSPENSION WITH COIL SPRINGS</div>
          <p className='text-lg text-gray-800'>
          The new Jimny has full-width rigid axles in both the front and rear to ensure superior grip on diverse surfaces. When an obstacle pushes one wheel up, the axle presses the other wheel down.
          </p>
        </div>
        <div className='mt-3'>
          <div className='text-2xl font-semibold text-gray-800 capitalize'>4WD WITH LOW RANGE TRANSFER GEAR</div>
          <p className='text-lg text-gray-800'>
          Part-time 4WD allows switching between 4WD, for optimal off-road performance, and 2WD for better fuel economy and enhanced cornering on paved roads.
          </p>
        </div>
        <div className='mt-3'>
          <div className='text-2xl font-semibold text-gray-800 capitalize'>AMPLE BODY ANGLES AND CLEARANCE</div>
          <p className='text-lg text-gray-800'>The Jimny can climb over obstacles and steep hills without scraping its bumpers or underbody, thanks to an ample approach angle, ramp break over angle, departure angle, as well as plenty of ground clearance.
          </p>
        </div>
      </div>
      <div className='md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-900 content'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <div className='flex items-center w-full'>
        <div>
          <div className='text-3xl text-gray-800 font-semibold capitalize'>READY FOR ANYTHING</div>
          <p className='text-lg text-gray-800'>
          Expand your rear storage area by folding the back seats. Flat across, the expanded space allows crosswise storage of wide items. Screw holes provide support for optional accessories like luggage bars and utility hooks. Convenient pockets and trays keep your smartphone and gadgets within reach. USB and accessory sockets are close by to connect and power your devices.
          </p>
        </div>
      </div>
        <div className='image-scale-effect-small'>
        <Image
            className="max-w-full h-auto"
            src={image3}
            alt="banner image"
            width={1500}
            height={500}
          />
        </div>
      </div>
      </div>
      <div>
      <Image
            className="w-full"
            src={cover2}
            alt="banner image"
            width={1500}
            height={500}
          />
      </div>
      <div className='md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-900'>
        <div className='text-3xl md:text-5xl text-gray-800 font-semibold capitalize'>Features</div>
        <div className='grid grid-cols-1 lg:grid-cols-1'>
          <div>
            <div className='mt-4'>
            <p className='text-lg text-gray-800 font-semibold'>STEADY ON</p>
            <p className='text-lg text-gray-800'>
            The new Jimny comes with a range of protective advances to keep you safe out in the wild or in the city.
            </p>
            </div>
            <div className='mt-4'>
            <p className='text-lg text-gray-800 font-semibold'>BRAKE LSD TRACTION CONTROL</p>
            <p className='text-lg text-gray-800'>
            If two wheels diagonal from each other lose grip while you’re travelling over slippery surfaces, this feature is designed to automatically brake the slipping wheels and redistribute torque to the other two wheels.
            </p>
            </div>
            <div className='mt-4'>
            <p className='text-lg text-gray-800 font-semibold'>HILL HOLD CONTROL</p>
            <p className='text-lg text-gray-800'>
            This feature helps prevent backward rolling even on bumpy and uneven hills, so you can focus on controlling acceleration.
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        <div className='image-scale-effect-small'>
        <Image
            className="w-full h-full object-cover"
            src={features1}
            alt="banner image"
            width={1500}
            height={500}
          />
        </div>
        <div className='image-scale-effect-small'>
        <Image
            className="w-full h-full object-cover"
            src={features2}
            alt="banner image"
            width={1500}
            height={500}
          />
        </div>
        <div className='image-scale-effect-small'>
        <Image
            className="w-full h-full object-cover"
            src={features3}
            alt="banner image"
            width={1500}
            height={500}
          />
        </div>
        <div className='image-scale-effect-small'>
        <Image
            className="w-full h-full object-cover"
            src={features4}
            alt="banner image"
            width={1500}
            height={500}
          />
        </div>
      </div>
      <div className='md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-900 space-y-1'>
      <p>*All the informations provided are manufacturer’s data and may vary for each market.</p>
      <p>*The specifications are subject to change without prior notice.</p>
      </div>
    </section>
    </Container>
  )
}