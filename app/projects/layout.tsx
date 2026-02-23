import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Explore our work—UI/UX design, brand identity, and product strategy. Case studies from Cargex, Prvaha, Aspira, Calmify, and more.",
  path: "/projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
