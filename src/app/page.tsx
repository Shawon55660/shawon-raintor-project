import About from "@/components/AboutSectrion/About";
import Bannar from "@/components/bannar/Bannar";
import Contact from "@/components/contactSection/Contact";
import Footer from "@/components/footer/Footer";

import SkillSet from "@/components/skillSetsection/SkillSet";
import WorkProcess from "@/components/workProcessSection/WorkProcess";


export default function Home() {
  return (
  <div>

    {/* bannar section start here it's first section in our website  */}
      <Bannar></Bannar>
      {/* bannar section end here  */}

      {/* skill section start here after the bannar section it's our second section in this website  */}
      <SkillSet></SkillSet>
      {/* skill section end  */}

      {/* about section start here in this website what are doing all content here  */}
      <About></About>
      {/* about section end here  */}

      {/* work process section start here  */}
      <WorkProcess></WorkProcess>
      {/* work process section end here  */}
      {/* contact section start here anyone try to contat with us   */}
      <Contact></Contact>
      {/* contact section end here  */}
      {/* footer section start here  */}
      <Footer></Footer>
      {/* footer section end here  */}

  
     
    </div>
  );
}
