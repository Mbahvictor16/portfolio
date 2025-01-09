import Intro from "@/components/mainContent/Intro";
import AboutMe from "@/components/mainContent/AboutMe";
import Skills from "@/components/mainContent/Skills";
import Experience from "@/components/mainContent/Experience";
import Contact from "@/components/mainContent/Contact";

export default function MainContent() {
    return (
        <main className="w-10/12 mx-auto pb-16">
            <Intro />
            <AboutMe />
            <Skills />
            <Experience />
            <Contact />
        </main>
    )
}