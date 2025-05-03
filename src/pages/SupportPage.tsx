import BannerImage from "../components/BannerImage";
import ContentSection from "../components/content/ContentSection";
import TextParagraph from "../components/content/TextParagraph";
import SectionImage from "../components/content/SectionImage";
import SizedBox from "../components/utils/SizedBox";

export default function SupportPage() {
  return (
    <>
      <BannerImage
        imagePath={"https://www.robotomies.com/wp-content/uploads/2025/03/cropped-robot_2025-cinematic.png"}
      />
      <ContentSection
        title={"Support the Robotomies!"}
        subtitle={"Your support keeps the team going."}
        content={
          <>
            <TextParagraph
              text="We are the Groton-Dunstable Regional High School's Robotics team – The Robotomies, and we compete annually
              in the International FIRST Robotics Competition."
            />
            <TextParagraph
              text="Since the team's establishment in 2003, we feel we have been severely limited from advancing in the
              competition due to a lack of funding compared to other teams which often have a budget that exceeds ours
              many times over. Despite this, we still give our best efforts to create robots we are proud of."
            />
            <TextParagraph
              text="This season we are committed to improving our placement by implementing a 3-year plan. This 3-year plan is
              centered around establishing multiple committees of members from the robotics club which each tackles one
              non-robotics aspect of the club; fundraising, events, and recruitment. To reach our fundraising goal, we
              need your help!"
            />
            <TextParagraph text="Funding Needed" bold={true} primary={true} centered={true} />
            <TextParagraph
              text="We need your donations to obtain the resources needed to get to districts and regionals. We are trying to
              get $10,000 in corporate sponsorships and $10,000 in private donations this year. Any money left over will
              be carried over to the next season. The goal is that by the end of these 3 years, we will have qualified
              and attended districts at least once and achieved a top-ten finish."
            />
            <TextParagraph
              text="With proper funding, we can increase the quality and variety of parts, allowing us to build more creative
              and effective robots. Your contributions will also help us purchase the necessary machinery to create more
              unique and intricate designs for our robot to establish a competitive edge. With proper funding, we will
              learn more, gain the skills needed to go out into the world and make Groton-Dunstable proud."
            />
            <TextParagraph
              text="More funding will better our performance, and that will increase our presence. If we are doing well, we
              become more talked about, more appreciated, and more appealing to join. With more people on our team, we
              can do more – not just relating to the construction of the robot, but also relating to spreading the love
              for engineering. For example, in May of 2022, our team went to the Groton-Dunstable Middle School to show
              off the robot to get the incoming high schoolers interested in engineering. So many of these kids said
              that they wanted to join the robotics club because of that demonstration. With a bigger team, we can do
              more than just a simple demonstration. We can expand what we are currently capable of and make a positive
              impact on the world. If we can get the funds we need, we can get the ball rolling. We can make this idea
              of a bigger impact become more than just an idea. All we ask is you donate to this fundraiser, and we can
              take care of the rest."
            />
            <SectionImage
              imagePath="https://i0.wp.com/www.robotomies.com/wp-content/uploads/2025/03/team_wpi_25.jpg?resize=632%2C438&ssl=1"
              caption="Photo taken after our WPI Competition on March 23, 2025."
            />
            <TextParagraph
              text="Team 1277 was founded in 2004, under the name 'Musketeers.' Over almost 20 years and a couple of name
              changes, the team has grown, changed, and transformed into the Robotomies. We wouldn't be where we are
              without our generous sponsorships and donations from all our amazing supporters. When you support our
              team, you're not just helping a team build and compete with robots- you're helping kids gain experience
              that will later help further their careers."
            />
            <TextParagraph
              text={`FIRST brings so many opportunities not only during high school, but beyond. Simply being on a FRC team 
                offers many scholarships for college. Hear it from one of our '22 seniors, Susanna Majkut: "One school offered 
                me 2.5k a year just for being on the team. Knowing that being a FIRST alum can make my college more affordable 
                is so rewarding!"`}
            />
            <TextParagraph
              text={`GD '19 graduate Tom Cote, who comes back every year to mentor current students, has gone above and beyond 
                with the knowledge and experience he gained on the team. "Just talking about the things I did on this robotics team 
                got me an electrical engineering internship right out of high school," Tom says. Now, as a junior in college, 
                Tom is a Systems Integration and Test Engineering intern. He works on electro-optical and infrared systems for 
                defense and space application.`}
            />
            <TextParagraph
              text="Not only do students learn important mechanical, electrical, and technological skills, but collaboration,
              hard work, and problem solving. When attending competitions, students must converse with other teams about
              game strategy- giving them a chance to improve their social skills as well."
            />
            <TextParagraph
              text="When you support our team, you support not only our current season, but our futures. The Robotomies, team
              1277, would like to thank all of its sponsors over the years for their generosity."
            />
            <TextParagraph text="Thank you!" />

            <SizedBox height={40} />
          </>
        }
      />
    </>
  );
}
