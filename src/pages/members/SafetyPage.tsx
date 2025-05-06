import ContentSection from "../../components/content/ContentSection";
import TextParagraph from "../../components/content/TextParagraph";

export default function SafetyPage() {
  return (
    <>
      <ContentSection
        title={"Safety"}
        subtitle="Dead teams dont build robots."
        content={
          <>
            <TextParagraph text="The Robotomies take safety very seriously.  Colby Malsick, our 2025 Safety Captain, ensures all students are fully trained and conduct themselves according to best practices.  AJ Mahoney is our assistant safety captain-in-training." />

            <TextParagraph text="All students must read the [FIRST safety manual](https://www.firstinspires.org/robotics/frc/safety)" />

            <TextParagraph text="[Safety Checklist](http://chrome-extension//efaidnbmnnnibpcajpcglclefindmkaj/https://firstfrc.blob.core.windows.net/frc2025/Manual/2025FRCInspectionChecklist.pdf)" />

            <TextParagraph text="All students must complete the [Safety Quiz](https://docs.google.com/forms/d/e/1FAIpQLSdVHyPgM6zGZa3kmMuxYWoDZYY1Ik9wWfo18Rc0sA9Lbgum2w/viewform?usp=sf_link)" />

            <TextParagraph text="You must pass this quiz with a 100% in order to be allowed to use the machines.  Take the quiz as many times as needed." />

            <TextParagraph text="[Link to materials including videos](https://drive.google.com/drive/folders/1qb45LRm1kzH7hDBpKChAoadLOx00Nh34?usp=sharing)" />
          </>
        }
      />
    </>
  );
}
