import Navbar from '../../components/Navbar';
import HeroSection from '../home/section/HeroSection';
import LearningOutcomes from '../home/section/LearningOutcomes';
import '../../App.css';
import StepByStep from './section/StepByStep';
import CTASection from './section/CTASection';
import ProgramJourney from './section/ProgramJourney';
import SalesTimeline from './section/SalesTimeline';
import BYOPRoadmap from './section/BYOPRoadmap';
import Footer from '../../components/Footer';

function Home() {
    return (
        <div className="app">
            <Navbar/>
            <main>
                <HeroSection />
                <StepByStep />
                <CTASection />
                <LearningOutcomes />
                <ProgramJourney />
                {/* <CurriculumTimeline /> */}
                {/* <NewAgeAcademics /> */}
                <SalesTimeline />
                <BYOPRoadmap  />
                {/* <RoadmapZigZag /> */}
                
                <Footer/>
            </main>
        </div>
    );
}

export default Home;
