import About from "../../components/about/About";
import Cover from "../../components/about/Cover";
import Heading from '../../components/ui/Heading'
import Container from "../../components/ui/Container";
import VisionAndMission from "../../components/about/VisionAndMission";

export default function AboutPage() {
  return (
    <section>
      <Container>
        <div className='mt-10'></div>
      <Cover />
        <Heading className="text-4xl mt-10">
          About us
        </Heading>
        <div className="md:max-w-screen-xl xxl:px-0 text-gray-800">
          <div className="w-full space-y-10">
            <div className="mb-20 mt-5">
              <About />
            </div>
            <div>
              <VisionAndMission />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
