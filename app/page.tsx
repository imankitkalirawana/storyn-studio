import Home from "@/components/homepage";
import { Navigation } from "@/components/navbar";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Home",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Navigation />
      <Home />
    </>
  );
}
