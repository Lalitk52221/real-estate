import Container from "../Container";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-600 bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <NavLinks />

          <div className="flex items-center gap-4">
            <CTAButton />

            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
