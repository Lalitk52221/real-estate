import Container from "@/components/layout/Container";
import { stats } from "./stats";

export default function Statistics() {
  return (
    <section className="bg-blue-700 py-24 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                  <Icon size={30} />
                </div>

                <h2 className="mt-6 text-5xl font-bold">
                  {item.number}
                </h2>

                <p className="mt-2 text-white/80">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}