import ContentSection from "../../components/content/ContentSection";
import LinkImage from "../../components/content/LinkImage";
import TextParagraph from "../../components/content/TextParagraph";
import SizedBox from "../../components/utils/SizedBox";

export default function ProgrammingPage() {
  return (
    <>
      <ContentSection
        title={"Programming"}
        subtitle="The most important group."
        preheading="Software Supreme"
        content={
          <>
            <TextParagraph text="Welcome! Looking forward to become a programmer? Excellent choice, good luck winning competition without any programmers." />

            <TextParagraph text="The programming team is responsible for writing the code that runs on the robot. This includes everything from basic movement to advanced autonomous routines. The programming team also works closely with the electrical team to ensure that all sensors and motors are properly integrated into the robot." />

            <TextParagraph text="[Resources for learning Java](/java-resources)" centered bold removeMargin />
            <LinkImage
              url="/java-resources"
              imagePath="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              altText="Java Resources"
              widthPercent={30}
              roundCorners
            />
            <SizedBox height={20} />

            <TextParagraph text="[Software Tools](/software-tools)" centered bold removeMargin />
            <LinkImage
              url="/software-tools"
              imagePath="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              altText="Software Tools"
              widthPercent={30}
              roundCorners
            />
            <SizedBox height={20} />

            <TextParagraph text="[Programming the Robot](/robot-coding-guide)" centered bold removeMargin />
            <LinkImage
              url="/robot-coding-guide"
              imagePath="https://upload.wikimedia.org/wikipedia/en/7/70/Terminator1984movieposter.jpg"
              altText="Robot Coding Guide"
              widthPercent={100}
              roundCorners
            />
            <SizedBox height={20} />
          </>
        }
      />
    </>
  );
}
