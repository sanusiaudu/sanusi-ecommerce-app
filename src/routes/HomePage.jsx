
import Socials from "../components/Socials"; 
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection"
import BestSellingProducts from "../components/BestSellingProducts";
import BestService from "../components/BestService";
import FeaturedPost from "../components/FeaturedPost";
import Testimonial from "../components/Testimonial";
import CartBackground from "../components/CartBackground"
import Footer from "../components/Footer"

function HomePage() {
  return (
    <>
        <Socials />
        <NavBar />
        <HeroSection />
        <BestSellingProducts />
        <BestService />
        <FeaturedPost />
        <Testimonial />
        <CartBackground />
        <Footer />
    </>
  );
}

export default HomePage;