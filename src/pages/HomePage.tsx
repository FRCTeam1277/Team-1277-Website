import BannerImage from "../components/BannerImage";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <BannerImage imagePath={"/pictures/MainBanner.png"} />
      <ContentSection
        title={"Robotomies"}
        subtitle={"Celebrating 20 years of competition!"}
        content={
          <>
            <p>
              Team 1277 was founded in 2004, under the name ‘Musketeers.’ Over almost 20 years and a couple of name
              changes, the team has grown, changed, and transformed into the Robotomies. We wouldn’t be where we are
              without our generous sponsorships and donations from all our amazing supporters. When you support our
              team, you’re not just helping a team build and compete with robots- you’re helping kids gain experience
              that will later help further their careers.
            </p>
            <p>
              FIRST brings so many opportunities not only during high school, but beyond. Simply being on a FRC team
              offers many scholarships for college. Hear it from one of our ‘22 seniors, Susanna Majkut: “One school
              offered me 2.5k a year just for being on the team. Knowing that being a FIRST alum can make my college
              more affordable is so rewarding!”
            </p>
            <img
              src="https://i0.wp.com/www.robotomies.com/wp-content/uploads/2025/03/team_wpi_25.jpg?resize=632%2C438&ssl=1"
              alt="Team Picture"
            />
            <figcaption>Photo taken after our WPI Competition on March 23, 2025.</figcaption>
            <p>
              GD ‘19 graduate Tom Cote, who comes back every year to mentor current students, has gone above and beyond
              with the knowledge and experience he gained on the team. “Just talking about the things I did on this
              robotics team got me an electrical engineering internship right out of high school,” Tom says. Now, as a
              junior in college, Tom is a Systems Integration and Test Engineering intern. He works on electro-optical
              and infrared systems for defense and space application.
            </p>
            <p>
              Not only do students learn important mechanical, electrical, and technological skills, but collaboration,
              hard work, and problem solving. When attending competitions, students must converse with other teams about
              game strategy- giving them a chance to improve their social skills as well.
            </p>
            <p>
              When you support our team, you support not only our current season, but our futures. The Robotomies, team
              1277, would like to thank all of its sponsors over the years for their generosity.
            </p>
            <p>Thank you!</p>
          </>
        }
      />
      <Footer />
    </div>
  );
}
