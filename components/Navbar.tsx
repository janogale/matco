import { Navbar } from "flowbite-react";
import Image from "next/image";
import logo from "../public/logo.png";
import jacLogo from "../public/images/jac.png";
import suzukiLogo from "../public/images/suzuki.png";

export default function NavbarTop() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="max-w-6xl mx-auto bg-[#90c340] shadow absolute z-50 left-0 right-0 "
    >
      <Navbar.Brand href="/">
        <Image src={logo} width={85} className="overflow-hidden hover:cursor-pointer hover:opacity-75 mr-3 h-20 bg-white p-2 rounded-md shadow-md" alt="Matco Logo" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          MATCO
        </span> */}
      </Navbar.Brand>

      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-lg text-[#fff]">
          Home
        </Navbar.Link>
        <Navbar.Link href="/cars" className="text-lg text-[#fff]">
          Cars
        </Navbar.Link>
        <Navbar.Link href="/services" className="text-lg text-[#fff]">
          Services
        </Navbar.Link>
        <Navbar.Link href="/aftersale" className="text-lg text-[#fff]">
          After Sale
        </Navbar.Link>
        <Navbar.Link href="/finance" className="text-lg text-[#fff]">
          Finance
        </Navbar.Link>
        <Navbar.Link href="/contact" className="text-lg text-[#fff]">
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
  );
}
