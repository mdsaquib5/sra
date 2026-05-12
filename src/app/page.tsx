import About from "@/components/ui/About";
import Experience from "@/components/ui/Experience";
import Hero from "@/components/ui/Hero";
import Footer from "@/components/layout/Footer";
import Shorts from "@/components/ui/Shorts";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Experience />
            <Shorts />
            <Footer />
        </main>
    );
}
