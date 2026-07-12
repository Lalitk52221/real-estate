
import Container from "../Container";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 shadow-lg items-center justify-between">
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
