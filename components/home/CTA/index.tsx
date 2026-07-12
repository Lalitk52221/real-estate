import Link from "next/link";
import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="bg-linear-to-r from-blue-700 to-blue-900 py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center text-white">

          <h2 className="text-5xl font-bold">
            Ready To Find Your Dream Property?
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Buy, Sell and Rent verified properties with complete legal
            assistance and expert guidance.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/properties"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              Browse Properties
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-700"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </Container>
    </section>
  );
}