import { Container } from "./styled";
import { Header } from "./Header";
import { Skills } from "./Skills";
import { skills, toLearn } from "./Skills/skillsList";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";


const PersonalHomepage = () => (
    <Container>
        <Header />
        <Skills
            title="My skillset includes 🛠️"
            skills={skills}
        />
        <Skills
            title="What I want to learn next 🚀"
            skills={toLearn}
        />
        <Portfolio />
        <Footer />
    </Container>
);

export default PersonalHomepage;