import Image from "next/image";

interface Props {
  testimonial: {
    name: string;
    role: string;
    image: string;
    review: string;
  };
}

export default function TestimonialCard({
  testimonial,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <p className="italic text-slate-600">
        "{testimonial.review}"
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={60}
          height={60}
          className="rounded-full"
        />

        <div>
          <h4 className="font-bold">
            {testimonial.name}
          </h4>

          <p className="text-sm text-slate-500">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}