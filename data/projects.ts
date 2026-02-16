export type Project = {
  id: number;
  title: string;
  category: string;
  img: string;
  height: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Cargex | LCL Shipping & Logistics SaaS Platform",
    category: "Saas Dashboard",
    img: "/assets/projects/cargex.png",
    height: "h-72",
  },
  {
    id: 2,
    title: "Prvaha Brand identity",
    category: "Brand Identity",
    img: "/assets/projects/prvaha-branding.png",
    height: "h-72",
  },
  {
    id: 3,
    title: "Praha- Hospital Management System",
    category: "HMS Dashbaord",
    img: "/assets/projects/prvaha.png",
    height: "h-64",
  },
  {
    id: 4,
    title: "Aspira",
    category: "UI/UX",
    img: "/assets/projects/aspira.png",
    height: "h-60 md:h-64",
  },
  {
    id: 5,
    title: "Calmify",
    category: "UI/UX",
    img: "/assets/projects/calmify.png",
    height: "h-96 md:h-64",
  },
  {
    id: 6,
    title: "Fundflux",
    category: "Web Design",
    img: "/assets/projects/fundflux.png",
    height: "h-72",
  },
  {
    id: 7,
    title: "Sundrop Brand Identity",
    category: "Brand Identity",
    img: "/assets/projects/sundrop.png",
    height: "h-72",
  },
  {
    id: 8,
    title: "Talentrix",
    category: "Brand Identity",
    img: "/assets/projects/talentrix.png",
    height: "h-64",
  },
];
