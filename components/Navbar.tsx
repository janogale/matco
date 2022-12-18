import { Navbar, Button } from "flowbite-react";
import Image from "next/image";
import logo from "../public/logo.png";

export default function NavbarTop() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="max-w-6xl mx-auto bg-white shadow"
    >
      <Navbar.Brand href="/">
        <Image src={logo} width={120} className="mr-3 h-16" alt="Matco Logo" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          MATCO
        </span> */}
      </Navbar.Brand>

      <Navbar.Collapse>
        <Navbar.Link href="/navbars" className="text-lg" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="text-lg">
          Cars
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="text-lg">
          Services
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="text-lg">
          Show Room
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="text-lg">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
      <div className="flex md:order-2 gap-4">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
