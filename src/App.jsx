import Header from './components/Header'
import Hero from './components/Hero'
import TrustRibbon from './components/TrustRibbon'
import Courses from './components/Courses'
import Features from './components/Features'
import Results from './components/Results'
import Faculty from './components/Faculty'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-20">
                <Hero />
                <TrustRibbon />
                <Courses />
                <Features />
                <Results />
                <Faculty />
                <Testimonials />
                <CTA />
                <Footer />
            </main>
        </div>
    )
}

export default App
