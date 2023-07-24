import React from 'react';
import Link from 'next/link';
import { TbCircleCaretDown } from 'react-icons/tb';
import { FaCalendarTimes, FaScrewdriver, FaCarCrash } from 'react-icons/fa';

const Sidebar = () => {
  const pages = [
    { name: 'Accessories Configurator', icon: FaCarCrash, path: '/accessories' },
    { name: 'Test Drive', icon: TbCircleCaretDown, path: '/test-drive' },
    { name: 'Genuine Parts', icon: FaScrewdriver, path: '/genuine-parts' },
    { name: 'Book a Service', icon: FaCalendarTimes, path: '/services' },
  ];

  return (
    <div className="hidden md:flex fixed top-1/2 right-0 transform -translate-y-1/2 h-full max-h-56 z-50 text-black w-20 flex-col justify-center items-center space-y-4">
      {pages.map((page, index) => (
        <Link href={page.path} key={index} className='border rounded-lg'>
          <div className="group cursor-pointer p-2 rounded-lg transition hover:bg-red-600 shadow">
            {React.createElement(page.icon, { className: 'text-3xl hover:text-white' })}
            <span className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity absolute -left-16 bg-white border px-2 py-1 rounded-lg text-sm whitespace-nowrap">
              {page.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
