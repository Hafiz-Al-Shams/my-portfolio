import About from "../../components/About";
import Banner from "../../components/Banner";
import ContactMe from "../../components/ContactMe";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";


const Home = () => {
    return (
        <div>

            <section id="banner">
                <Banner />
            </section>

            <section id="skills">
                <Skills />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="contact">
                <ContactMe></ContactMe>
            </section>

        </div>
    );
};

export default Home;