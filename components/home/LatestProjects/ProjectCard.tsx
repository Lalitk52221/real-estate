import Image from "next/image";
import { MapPin } from "lucide-react";
import Button from "@/components/ui/Button";

interface Props {
  project: {
    title: string;
    image: string;
    location: string;
    price: string;
    status: string;
  };
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
          {project.status}
        </span>

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-slate-500">
          <MapPin size={18} />
          {project.location}
        </div>

        <div className="mt-5 flex items-center justify-between">

          <div>
            <p className="text-sm text-slate-500">
              Starting From
            </p>

            <h4 className="text-xl font-bold text-blue-600">
              {project.price}
            </h4>
          </div>

          <Button>
            Explore
          </Button>

        </div>

      </div>

    </div>
  );
}