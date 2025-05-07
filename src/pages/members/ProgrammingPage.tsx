import ContentSection from "../../components/content/ContentSection";
import LinkButton from "../../components/content/LinkButton";
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

            <LinkButton url="/members/programming/java-resources" textContent="Resources for learning Java" uncolored />
            <SizedBox height={20} />

            <LinkButton url="/members/programming/software-tools" textContent="Software Tools" uncolored />
            <SizedBox height={20} />

            <LinkButton url="/members/programming/robot-coding-guide" textContent="Programming the Robot" uncolored />
            <SizedBox height={20} />
          </>
        }
      />
    </>
  );
}
