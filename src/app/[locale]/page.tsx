import { setRequestLocale } from "next-intl/server";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { CV } from "@/components/sections/cv";
import { Hero } from "@/components/sections/hero";
import { Membership } from "@/components/sections/membership";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Roles } from "@/components/sections/roles";
import { Tools } from "@/components/sections/tools";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Membership />
      <Projects />
      <CV />
      <Tools />
      <Roles />
      <Contact />
    </>
  );
}
