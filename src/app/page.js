import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicTestimonialCard from "@/components/MusicTestimonialCard";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicTestimonialCard/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
      
    </main>
  );
}
