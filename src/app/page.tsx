import GetInTouchForm from "@/components/home-page/get-in-touch";
import HeroSections from "@/components/home-page/hero-section";
import ProjectsSection from "@/components/home-page/project-sections";
import SkillSeactions from "@/components/home-page/skill-sections";
import PortfoiloFooter from "@/components/layout/footer";
import PortfoiloHeader from "@/components/layout/header";
import ProjectGrid from "@/components/project-lists/project-grid";
import { HeroParallax } from "@/components/project-lists/project-parallax";

export default function Home() {


   return (
      <>
         <PortfoiloHeader />
         <HeroSections />
         <SkillSeactions />
         <ProjectGrid />
         {/* <ProjectsSection /> */}
         <GetInTouchForm />
         <PortfoiloFooter />
      </>
   );
}
