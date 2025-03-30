import BannerImage from "../components/BannerImage";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <BannerImage imagePath={"/pictures/CenterBanner.png"} />
      <ContentSection
        title={"About Our Team"}
        subtitle={"Celebrating 20 years of competition!"}
        content={
          <>
            {/* Introduction */}
            <p>
              Team 1277: The Robotomies, is the FIRST Robotics Competition (FRC) Team out of Groton, MA. We are a high
              school competitive robotics team participating in the FIRST programs designed to teach students hands-on,
              real-world engineering and business skills by creating a custom robot to play that season's game every
              year.
            </p>
            <em>FIRST - For the Inspiration and Recognition of Science and Technology.</em>
            <p>
              We are a non-profit, student-led organization that relies on funding from companies like you to bring
              valuable robotics experience to our team and help build the next generation of engineers.
            </p>
          </>
        }
      />
      <ContentSection
        title={"Sponsor Benefits"}
        subtitle={"Exposure, Outreach, Inspiration"}
        content={
          <ul>
            <li>
              <h3>Bring More Kids into STEM</h3>
              <p>By supporting the team, your company brings real world STEM experience to kids in the community</p>
            </li>
            <li>
              <h3>Company Exposure</h3>
              <p>
                Your company will be recognized on our website, social media, and at competitions by thousands of people
                in and outside of the team.
              </p>
            </li>
            <li>
              <h3>Advertising at Competitions</h3>
              <p>
                Your company name will be announced at competitions and outreach events, providing visibility to a wide
                audience. Your logo will be displayed on our team shirts, robot, merchandise.
              </p>
            </li>
          </ul>
        }
      />
      <ContentSection
        title={"Volunteer"}
        subtitle={"Mentor, Coach, Inspire"}
        content={
          <ul>
            <li>
              <h3>Bring Your Knowledge to the Team</h3>
              <p>
                We are always in search of adult mentors that have a passion for robotics with or without technical
                backgrounds
              </p>
            </li>
            <li>
              <h3>Empower Young Leaders</h3>
              <p>Your skill and input will inspire and shape future engineers</p>
            </li>
            <li>
              <h3>Community Outreach</h3>
              <p>
                Your financial support enables students to have access to technology and gives them the opportunity to
                participate in competitions where they can showcase their hard work.
              </p>
            </li>
          </ul>
        }
      />
      <Footer />
    </div>
  );
}
