import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Categories from "@/components/sections/Categories";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <section id="products">
          <FeaturedProducts />
        </section>
        <section id="categories">
          <Categories />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
