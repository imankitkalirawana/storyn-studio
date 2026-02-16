import { CaseStudy } from "@/components/projects";
import { projects } from "@/components/homepage/work-list";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log("projects", projects);

  const project = projects.find((p) => p.id === Number(id));
  if (!project) {
    return notFound();
  }
  return <CaseStudy project={project} />;
}
