import Socials from "../components/Socials";
import Navbar from "../components/NavBar";
import CardDisplay from "../components/CardDisplay";
import ProductDisplay from "../components/ProductDisplay";
import ShopProduct from "../components/ShopProduct";
import Sponsors from '../components/Sponsors'
import Footer from '../components/Footer'


function ShopPage() {
  return (
    <>
      <Socials />
      <Navbar />
      <CardDisplay />
      <ProductDisplay />
      <ShopProduct />
      <Sponsors />
      <Footer />
    </>
  )
}

export default ShopPage;