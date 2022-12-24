import Image from "next/image";

import twitterIcon from "../public/icons/twitter.svg";
import facebookIcon from "../public/icons/facebook.svg";
import instagramIcon from "../public/icons/instagram.svg";
import youtubeIcon from "../public/icons/youtube.svg";

const footerLinks = {
  solutions: [
    { name: "Inspection", href: "#" },
    { name: "Accessories", href: "#" },
    { name: "Servicing", href: "#" },
    { name: "Maintenance", href: "#" },
  ],
  models: [
    { name: "Swift", href: "#" },
    { name: "Vitara", href: "#" },
    { name: "Jimny", href: "#" },
    { name: "S-presso", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Mission", href: "#" },
    { name: "Partners", href: "#" },
  ],
  support: [
    { name: "Installment", href: "#" },
    { name: "After Sale", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: facebookIcon,
    },
    {
      name: "Instagram",
      href: "#",
      icon: instagramIcon,
    },
    {
      name: "Twitter",
      href: "#",
      icon: twitterIcon,
    },
    {
      name: "Youtube",
      href: "#",
      icon: youtubeIcon,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img className="h-16" src="/logo.png" alt="MATCO Motors" />
            <p className="text-base text-gray-500">
              Making the world a better place through affordable, modern, and
              latest automobiles
            </p>
            <div className="flex space-x-6">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only ">{item.name}</span>
                  <span className="h-4">
                    <Image
                      src={item.icon}
                      width={25}
                      height={25}
                      alt={item.name}
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  Solutions
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerLinks.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerLinks.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerLinks.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Models</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerLinks.models.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2022 MATCO, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
