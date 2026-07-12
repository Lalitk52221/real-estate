import Categories from "@/components/home/Categories";
import CTA from "@/components/home/CTA";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Hero from "@/components/home/Hero";
import LatestProjects from "@/components/home/LatestProjects";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Categories/>
      <FeaturedProperties/>
      <WhyChooseUs/>
      <LatestProjects/>
      <Statistics/>
      <Testimonials/>
      <CTA/>
      <Footer/>

    </>
  );
}
