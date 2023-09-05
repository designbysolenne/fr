import Contact from "@/app/components/Contact";
import Jumbotron from "@/app/components/Jumbotron";
import Services from "@/app/components/Services";
import Portfolio from "@/app/components/Portfolio";
import Testimonials from "@/app/components/Testimonials";

export default function Home() {
  return (
    <div>
        <Jumbotron/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
    </div>
  )
}
