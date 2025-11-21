import Hero from "@/components/homepage/hero/hero";
import { Project } from "@/components/homepage/projects/projects";
import { History } from "@/components/homepage/history/history";
import { Archi } from "@/components/homepage/architecture/archi";
import FAQ from "@/components/micro-components/Faq";
import { faqItems } from "@/content/faqData";
import { BlogCuisine } from "@/components/homepage/blog/BlogCuisine";

export default function Home() {
  return (
    <>
      <Hero />
      <Project />
      <History />
      <Archi />
      <BlogCuisine />
      <FAQ items={faqItems} />
    </>
  );
}
