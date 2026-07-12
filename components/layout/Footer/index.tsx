import Link from "next/link";
import Container from "../Container";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container>

        <div className="grid gap-10 py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-2xl font-bold">
              RealEstate
            </h2>

            <p className="mt-5 text-slate-400">
              Buy, Sell and Rent verified properties across Gurugram
              with complete transparency.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li><Link href="/">Home</Link></li>

              <li><Link href="/buy">Buy</Link></li>

              <li><Link href="/rent">Rent</Link></li>

              <li><Link href="/sell">Sell</Link></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Services
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>Property Buying</li>

              <li>Property Selling</li>

              <li>Property Rental</li>

              <li>Legal Assistance</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>📍 Dev Nagar, Rithoj, Gurugram</li>

              <li>📞 +91 98765 43210</li>

              <li>✉ info@realestate.com</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-slate-800 py-6 text-center text-slate-500">

          © 2026 RealEstate. All Rights Reserved.

        </div>

      </Container>
    </footer>
  );
}