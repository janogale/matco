import { Navbar } from "flowbite-react";
import Image from "next/image";
import logo from "../public/matcologo.jpg";
import jacLogo from "../public/images/jac.png";
import suzukiLogo from "../public/images/suzuki.png";

export default function NavbarTop() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="max-w-6xl mx-auto bg-gray-50 shadow absolute z-50 left-0 right-0 "
    >
      <Navbar.Brand href="/">
        <Image
          src={logo}
          width={80}
          className="mr-3 h-16 rounded"
          alt="Matco Logo"
        />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          MATCO
        </span> */}
      </Navbar.Brand>

      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-lg" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/cars" className="text-lg">
          Cars
        </Navbar.Link>
        <Navbar.Link href="/finance" className="text-lg">
          Finance
        </Navbar.Link>
        <Navbar.Link href="/services" className="text-lg">
          Services
        </Navbar.Link>
        <Navbar.Link href="/show-room" className="text-lg">
          Show Room
        </Navbar.Link>
        <Navbar.Link href="/contact" className="text-lg">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
      <div className="flex md:order-2 gap-4">
        <div
          className="overflow-hidden hover:cursor-pointer hover:opacity-75 p-2 rounded-md shadow-md"
          title="JAC Motors"
        >
          <Image src={jacLogo} width={80} alt="JAC Logo" className="h-16" />
        </div>
        <div
          className="overflow-hidden hover:cursor-pointer hover:opacity-75 p-2 rounded-md shadow-md"
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
