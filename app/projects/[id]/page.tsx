import { CaseStudy } from "@/components/projects";
import { projects } from "@/data/projects";
import { buildMetadata, seoConfig } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));
  if (!project) {
    return buildMetadata({ title: "Project Not Found" });
  }
  const description =
    project.details.Headline ||
    project.details.description?.column1 ||
    undefined;
  return buildMetadata({
    title: project.title,
    description:
      description ?? `Case study: ${project.title}. ${project.details.role}.`,
    path: `/projects/${id}`,
    image: project.img,
    openGraphType: "article",
  });
}

function projectJsonLd(project: (typeof projects)[0], id: string) {
  const url = `${seoConfig.baseUrl}/projects/${id}`;
  const image = project.img.startsWith("http")
    ? project.img
    : `${seoConfig.baseUrl}${project.img}`;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description:
      project.details.Headline ||
      project.details.description?.column1 ||
      undefined,
    url,
    image,
    author: {
      "@type": "Organization",
      name: seoConfig.siteName,
      url: seoConfig.baseUrl,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;

  const project = projects.find((p) => p.id === Number(id));
  if (!project) {
    return notFound();
  }

  const jsonLd = projectJsonLd(project, id);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudy project={project} />
    </>
  );
}
