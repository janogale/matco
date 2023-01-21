import About from "../../components/about/About";
import Cover from "../../components/about/Cover";
import Container from "../../components/ui/Container";
import VisionAndMission from "../../components/about/VisionAndMission";

export default function AboutPage() {
  return (
    <section>
      <Container>
        <Cover />
        <About />
        <VisionAndMission />
      </Container>
    </section>
  );
}
