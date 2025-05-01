import BannerImage from "../../components/BannerImage";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function PageTemplate() {
  return (
    <div className="page-container">
      <Navbar />

      {/* Modify the banner */}
      <BannerImage imagePath={"/pictures/CenterBanner.png"} />

      {/* Add Content Here */}

      <Footer />
    </div>
  );
}
