import Categories from "@/components/home/Categories";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Hero from "@/components/home/Hero";
import LatestProjects from "@/components/home/LatestProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
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

    </>
  );
}
