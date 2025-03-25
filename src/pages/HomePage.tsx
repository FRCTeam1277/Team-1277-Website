import BannerImage from "../components/BannerImage";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <BannerImage imagePath={"/pictures/MainBanner.png"} />
    </div>
  );
}
