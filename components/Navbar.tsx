import { Navbar } from "flowbite-react";
import Image from "next/image";
import logo from "../public/logo.png";
import jacLogo from "../public/images/jac.png";
import suzukiLogo from "../public/images/suzuki.png";
import Container from "./ui/Container";
import { useEffect, useState } from "react";

export default function NavbarTop() {
  const [scrolled, setScrolled] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Set the background to blue when scrolled to a certain position (e.g., 100 pixels)
    setScrolled(scrollY > 100);
  };

  useEffect(() => {
    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <Container>
      <Navbar
      fluid={true}
      rounded={true}
      className={`max-w-6xl mx-auto ${
        scrolled ? 'bg-[rgb(2,132,199)] shadow' : 'bg-transparent'
      } fixed w-full z-50 transition-all`}
    >
      <Navbar.Brand href="/">
        <Image src={logo} width={85} className="overflow-hidden hover:cursor-pointer hover:opacity-75 mr-3 h-20 bg-white p-2 rounded-md shadow-md" alt="Matco Logo" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          MATCO
        </span> */} 
      </Navbar.Brand>

      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-lg text-[#ffffff]">
          Home
        </Navbar.Link>
        <Navbar.Link href="/services" className="text-lg text-[#ffffff]">
          Services
        </Navbar.Link>
        <Navbar.Link href="/aftersale" className="text-lg text-[#ffffff]">
          After Sale
        </Navbar.Link>
        <Navbar.Link href="/finance" className="text-lg text-[#ffffff]">
          Finance
        </Navbar.Link>
        <Navbar.Link href="/contact" className="text-lg text-[#ffffff]">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
      <div className="flex md:order-2 gap-4">
        <div
          className="overflow-hidden hover:cursor-pointer hover:opacity-75 p-2 bg-white rounded-md shadow-md"
          title="JAC Motors"
        >
          <Image src={jacLogo} width={80} alt="JAC Logo" className="h-16" />
        </div>
        <div
          className="overflow-hidden hover:cursor-pointer hover:opacity-75 p-2 bg-white rounded-md shadow-md"
          title="Suzuki Motors"
        >
          <Image
            src={suzukiLogo}
            width={80}
            alt="Suzuki Logo"
            className="h-16"
          />
        </div>
        <Navbar.Toggle />
      </div>
    </Navbar>
    </Container>
  );
}
