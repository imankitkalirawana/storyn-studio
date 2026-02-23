import ContactForm from "@/components/contact";
import Header from "@/components/contact/header";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Storyn Studio. Let's build something meaningful together—UI/UX, brand identity, and product strategy.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div>
      <Header />
      <ContactForm />
    </div>
  );
}
