"use client"
import {motion} from "framer-motion"
import Container from "@/components/layout/Container";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

export default function LatestProjects() {
  return (
    <section className="bg-slate-50 py-15">

      <Container>

        <div className="mb-14 text-center">

          <motion.p 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="font-semibold uppercase tracking-[4px] text-blue-600">
            New Launches
          </motion.p>

          <motion.h2 
          initial={{ opacity: 0, y: 5}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay:0.2 }}
          className="mt-4 text-5xl font-bold">
            Latest Projects
          </motion.h2>

          <p className="mt-4 text-slate-500">
            Explore premium residential and commercial projects.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project,i) => (
            <motion.div
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay:i*0.3 }}
            key={i}>
            <ProjectCard
              key={project.id}
              project={project}
              />
              </motion.div>
          ))}

        </div>

      </Container>

    </section>
  );
}