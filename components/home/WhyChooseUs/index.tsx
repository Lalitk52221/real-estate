import Image from "next/image";

import Container from "@/components/layout/Container";

import { features } from "./features";
import FeatureCard from "./FeatureCard";

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-white">

      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              WHY CHOOSE US
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Trusted Real Estate Partner
            </h2>

            <p className="mt-6 text-lg text-slate-500">
              We help buyers and sellers make confident
              property decisions with verified listings,
              transparent pricing and expert guidance.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">

              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  {...feature}
                />
              ))}

            </div>

          </div>

          {/* Right */}

          <div>

            <Image
              src="/images/property1.jpg"
              alt="Why Choose Us"
              width={700}
              height={800}
              className="rounded-4xl object-cover shadow-2xl"
            />

          </div>

        </div>

      </Container>

    </section>
  );
}