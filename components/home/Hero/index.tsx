import Container from "@/components/layout/Container";
import HeroContent from "./HeroContent";
import SearchBox from "./SearchBox";

export default function Hero() {
  return (
    <section
  className="
    relative
    min-h-140
    bg-cover
    bg-center
    bg-[url('/images/hero.jpg')]
"
>
      <div className="absolute inset-0 bg-slate-900/55"></div>

      <Container>

        <div className="relative flex h-100 items-center">

          <HeroContent />

        </div>

        <SearchBox />

      </Container>
    </section>
  );
}