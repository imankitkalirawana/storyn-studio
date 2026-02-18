import { CaseStudy } from "@/components/projects";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find((p) => p.id === Number(id));
  if (!project) {
    return notFound();
  }
  return <CaseStudy project={project} />;
}
