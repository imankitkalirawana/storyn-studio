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
    title: "Vogue Editorial",
    category: "Fashion",
    img: "/assets/projects/cargex.png",
    height: "h-64 md:h-80",
  },
  {
    id: 2,
    title: "Neo Tokyo",
    category: "Art Direction",
    img: "https://images.unsplash.com/photo-1627589161730-0d90bea5a656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY3liZXJwdW5rJTIwcG9ydHJhaXQlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzcwMDMwMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    height: "h-80 md:h-96",
  },
  {
    id: 3,
    title: "Pastel Dreams",
    category: "3D Design",
    img: "https://images.unsplash.com/photo-1751646563987-d5720fb773cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwc2hhcGVzJTIwY29sb3JmdWwlMjBwYXN0ZWx8ZW58MXx8fHwxNzcwMDMwMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    height: "h-72 md:h-80",
  },
  {
    id: 4,
    title: "Eco Packaging",
    category: "Branding",
    img: "https://images.unsplash.com/photo-1761125802333-d145773f4461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwcGFja2FnaW5nJTIwZGVzaWduJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzcwMDMwMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    height: "h-60 md:h-72",
  },
  {
    id: 5,
    title: "Modern Arch",
    category: "Photography",
    img: "https://images.unsplash.com/photo-1665043548178-8e606eca11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmFsJTIwZGVzaWduJTIwbWluaW1hbHxlbnwxfHx8fDE3NzAwMzAxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    height: "h-96 md:h-[30rem]",
  },
  {
    id: 6,
    title: "Typo Bold",
    category: "Graphic Design",
    img: "https://images.unsplash.com/photo-1762354766808-92f8ad416174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2xkJTIwdHlwb2dyYXBoeSUyMHBvc3RlciUyMGRlc2lnbnxlbnwxfHx8fDE3NzAwMzAxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    height: "h-80 md:h-[26rem]",
  },
  {
    id: 7,
    title: "Lumina App",
    category: "Mobile Design",
    img: "https://images.unsplash.com/photo-1760597371674-c5a412f2ae01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwdWklMjBkZXNpZ24lMjBtb2JpbGUlMjBhcHAlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzAwMjU5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    height: "h-72",
  },
  {
    id: 8,
    title: "Flux Web",
    category: "Web Design",
    img: "https://images.unsplash.com/photo-1659841064804-5f507b1b488a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBsYW5kaW5nJTIwcGFnZSUyMGJyaWdodCUyMGdyYWRpZW50fGVufDF8fHx8MTc3MDAyNTkxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    height: "h-64",
  },
];
