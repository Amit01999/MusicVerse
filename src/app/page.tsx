import FeaturedCourses from '@/components/FeaturedCourses';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Instructors from '@/components/Instructors';
import Page2 from '@/components/Page2';
import Page3 from '@/components/Page3';
import Page4 from '@/components/Page4';
import MusicSchoolTestimonials from '@/components/TestimonialCards';
import UpcomingWebinars from '@/components/UpcomingWebinars';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <div className="hidden lg:block">
        <Page2></Page2>
        <Page3></Page3>
        <Page4></Page4>
      </div>

      <Instructors />
      <Footer />
    </main>
  );
}
