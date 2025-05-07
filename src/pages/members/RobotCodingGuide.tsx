import ContentSection from "../../components/content/ContentSection";
import TextParagraph from "../../components/content/TextParagraph";
import SizedBox from "../../components/utils/SizedBox";
import LinkButton from "../../components/content/LinkButton";

export default function RobotCodingGuide() {
  return (
    <>
      <ContentSection
        preheading="Programming Resources"
        title="Robot Coding Guide"
        subtitle="Essential resources for FRC robot programming"
        content={
          <>
            <TextParagraph text="Programming the robot is one of the most critical aspects of our team's success. This guide provides essential resources for getting started with FRC programming and working with the WPILib framework." />

            <h3>Recommended Programming Resources</h3>

            <TextParagraph text="#1: Getting started with Java for FRC" bold removeMargin />
            <TextParagraph text="This comprehensive guide walks you through the basics of Java programming for FIRST Robotics Competition. It covers everything you need to know for programming your robot." />
            <LinkButton
              url="http://wpilib.screenstepslive.com/s/4485/m/13809"
              textContent="WPILib ScreenSteps Java Guide"
            />
            <SizedBox height={20} />

            <TextParagraph text="#2: WPILibJ Javadoc Documentation" bold removeMargin />
            <TextParagraph text="The official Java documentation for the WPILib library. This is an essential reference for understanding the methods and classes available for robot control." />
            <LinkButton
              url="http://first.wpi.edu/FRC/roborio/release/docs/java/"
              textContent="WPILibJ Javadoc"
              outline
            />
            <SizedBox height={20} />

            <TextParagraph text="#3: Command-Based Programming Guide" bold removeMargin />
            <TextParagraph text="Learn the Command-Based programming paradigm, which is the recommended approach for organizing robot code in a clean, maintainable way." />
            <LinkButton
              url="http://wpilib.screenstepslive.com/s/4485/m/13809/c/88893"
              textContent="Command-Based Programming Guide"
            />
            <SizedBox height={20} />

            <TextParagraph text="#4: Creating and Running Robot Programs" bold removeMargin />
            <TextParagraph text="A guide to creating, deploying, and running robot programs on the RoboRIO controller." />
            <LinkButton
              url="http://wpilib.screenstepslive.com/s/4485/m/13809/c/57246"
              textContent="Robot Programs Guide"
              outline
            />
            <SizedBox height={20} />

            <TextParagraph text="#5: Required Software Downloads" bold removeMargin />
            <TextParagraph text="Download the necessary software components for FRC robot programming, including the development environment and drivers." />
            <LinkButton
              url="http://ni.com/download/cds/view/p/id/5773/lang/en"
              textContent="FRC Software Download"
              icon="/icons/star.png"
              invertIcon
            />
            <SizedBox height={40} />

            <h3>Programming Workflow Tips</h3>
            <TextParagraph text="1. Always test your code in simulation before deploying to the robot when possible." />
            <TextParagraph text="2. Use version control (like GitHub) to track changes and collaborate with other programmers." />
            <TextParagraph text="3. Document your code with comments to help others understand your implementation." />
            <TextParagraph text="4. Break down complex tasks into smaller, manageable subsystems and commands." />
            <TextParagraph text="5. Communicate with the mechanical and electrical teams to understand the physical constraints of the robot." />
            <SizedBox height={20} />

            <TextParagraph
              text="Need help? Don't hesitate to ask one of our programming mentors or senior team members!"
              centered
            />
            <SizedBox height={40} />
          </>
        }
      />
    </>
  );
}
