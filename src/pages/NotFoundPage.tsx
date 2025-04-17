import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";

export default function NotFoundPage() {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <NotFound />
        <Footer />
      </div>
    </>
  );
}
