import BannerImage from "../../components/BannerImage";
import ContentSection from "../../components/content/ContentSection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SizedBox from "../../components/utils/SizedBox";

export default function Season2025Page() {
  return (
    <div className="page-container">
      <Navbar />
      <BannerImage imagePath={"/pictures/2025/2025_Banner.png"} />
      <ContentSection
        title={"2025 Competition Season"}
        subtitle={"Making Waves on the Reefscape"}
        content={
          <>
            <p>
              Beneath the ocean’s surface lies our planet’s most complex ecosystems, full of life and potential for
              exploration and learning, where each inhabitant has a role to play in building a thriving environment.
              Teams use their STEM and collaboration skills to explore life beneath the surface of the ocean.
            </p>
            <em>
              Along the way, we uncover the potential in each of us to strengthen our community and innovate for a
              better world with healthy oceans.
            </em>
            <p>
              Two alliances of three robots each work to score PVC pipes (called Coral) and playground balls (called
              Algae) into goals. At the end of the match, robots move to a truss structure called the Barge and climb
              metal Cages to earn additional points.
            </p>
            <img src="/pictures/2025/2025_Dive_Banner.jpg" alt="" />
            <SizedBox height={40} />
          </>
        }
      />
      <ContentSection
        title={"Events"}
        subtitle={"Competitions and Events that we attended in the 2025 season"}
        centerText={true}
        content={
          <>
            <p className="primary">Come see us at Battle Cry at WPI, on June 6, 7 and 8!</p>
            <p>
              <a href="https://frc-events.firstinspires.org/2025/NHSAL">Salem HS</a>: Friday, February 28 to Sunday,
              March 2, 2025 (Week 1)
            </p>
            <p>
              <b>
                <a href="https://firstnh.wixsite.com/firstnh/gsd-team-information">Event Info</a>
              </b>
              <br />
              NE FIRST will stream match play to <a href="http://nefirst.org/livestream">nefirst.org/livestream</a>.
              Northern events will stream to BLUE links. Southern events will stream to RED links. Third events for a
              week will stream to PURPLE links.
            </p>
            <p>
              <a href="https://frc-events.firstinspires.org/2025/MAWOR">WPI</a>: Friday, March 21 to Sunday, March 23,
              2025 (Week 4)
            </p>
            <p>
              Full list of New England Competitions can be found{" "}
              <a href="https://frc-events.firstinspires.org/2025/Events/EventList?filter=NE">here</a>.
            </p>
            <img src="/pictures/2025/2025_WPI-Team-Picture.jpg" alt="" />
            <figcaption>
              Proud to have finished qualifiers in 8th place becoming Alliance Captains for Alliance 5. WPI Competition,
              March 23, 2025.
            </figcaption>
            <SizedBox height={40} />
          </>
        }
      />
      <Footer />
    </div>
  );
}
