import GetInTouchForm from "@/components/home-page/get-in-touch";
import HeroSections from "@/components/home-page/hero-section";
import SkillSeactions from "@/components/home-page/skill-sections";
import PortfoiloFooter from "@/components/layout/footer";
import PortfoiloHeader from "@/components/layout/header";
import ProjectGrid from "@/components/project-lists/project-grid";

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
