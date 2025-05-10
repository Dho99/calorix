import Hero from "./components/hero"
import FeatureOne from "./components/feature-one"
import FAQ from "./components/faq"
import About from "./components/about"

export default function Page(){
    return (   
        <div className="lg:px-15 px-10">
            <Hero />
            <About />
            <FeatureOne />
            <FAQ />
        </div>
    )
}