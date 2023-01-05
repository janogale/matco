import About from "../../components/about/About";
import Cover from "../../components/about/Cover";
import Container from "../../components/ui/Container";
import VisionAndMission from "../../components/about/VisionAndMission";

export default function AboutPage() {
  return (
    <main>
      <section className="section space-y-16">
        <Cover />
        <Container>
          <div className="md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-800">
            <div className="w-full space-y-10">
              <About />
              <VisionAndMission />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
