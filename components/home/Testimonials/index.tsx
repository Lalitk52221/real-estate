import Container from "@/components/layout/Container";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonials";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-15">
      <Container>

        <div className="mb-14 text-center">
          <h2 className="text-5xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              testimonial={item}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}