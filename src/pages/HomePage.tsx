import BannerImage from "../components/BannerImage";
import ContentSection from "../components/ContentSection";
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
              We are the Groton-Dunstable Regional High School’s Robotics team – The Robotomies, and we compete annually
              in the International FIRST Robotics Competition.
            </p>
            <p>
              Since the team’s establishment in 2003, we feel we have been severely limited from advancing in the
              competition due to a lack of funding compared to other teams which often have a budget that exceeds ours
              many times over. Despite this, we still give our best efforts to create robots we are proud of.
            </p>
            <p>
              This season we are committed to improving our placement by implementing a 3-year plan. This 3-year plan is
              centered around establishing multiple committees of members from the robotics club which each tackles one
              non-robotics aspect of the club; fundraising, events, and recruitment. To reach our fundraising goal, we
              need your help!
            </p>
            <p>
              We need your donations to obtain the resources needed to get to districts and regionals. We are trying to
              get $10,000 in corporate sponsorships and $10,000 in private donations this year. Any money left over will
              be carried over to the next season. The goal is that by the end of these 3 years, we will have qualified
              and attended districts at least once and achieved a top-ten finish.
            </p>
            <p>
              With proper funding, we can increase the quality and variety of parts, allowing us to build more creative
              and effective robots. Your contributions will also help us purchase the necessary machinery to create more
              unique and intricate designs for our robot to establish a competitive edge. With proper funding, we will
              learn more, gain the skills needed to go out into the world and make Groton-Dunstable proud.
            </p>
            <p>
              More funding will better our performance, and that will increase our presence. If we are doing well, we
              become more talked about, more appreciated, and more appealing to join. With more people on our team, we
              can do more – not just relating to the construction of the robot, but also relating to spreading the love
              for engineering. For example, in May of 2022, our team went to the Groton-Dunstable Middle School to show
              off the robot to get the incoming high schoolers interested in engineering. So many of these kids said
              that they wanted to join the robotics club because of that demonstration. With a bigger team, we can do
              more than just a simple demonstration. We can expand what we are currently capable of and make a positive
              impact on the world. If we can get the funds we need, we can get the ball rolling. We can make this idea
              of a bigger impact become more than just an idea. All we ask is you donate to this fundraiser, and we can
              take care of the rest.
            </p>
          </>
        }
      />
    </div>
  );
}
