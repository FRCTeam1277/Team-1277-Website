import ContentSection from "../../components/content/ContentSection";
import TextParagraph from "../../components/content/TextParagraph";
import LinkImage from "../../components/content/LinkImage";
import SizedBox from "../../components/utils/SizedBox";

export default function MentorSignup() {
  return (
    <>
      <ContentSection
        title="Mentor Signup"
        content={
          <>
            <TextParagraph text="If you’re interested in becoming a mentor, please [contact](/contact) Mr. Rocheleau or one of our co-lead mentors first and then follow these steps:" />

            <TextParagraph text="#1: [The Robotomies Constitution](https://docs.google.com/document/d/1h1VoZEj-YWYsKdde1ih7DhJr8uqJVym99CVg50NmnkM/edit?usp=sharing) – Read me first! Yes, it’s a large document, but it includes extremely important information about job descriptions and expectations that you MUST know!" />

            <TextParagraph text="#2: [2024 Application Form](https://docs.google.com/forms/d/e/1FAIpQLSeUeh7zUnum1IP6wGOgRgcxOLldEFmD6nuPTwuuoYL2fJhGQg/viewform?usp=sf_link) Everyone must fill this out, even if you were a member last year!" />

            <TextParagraph text="#3 [Sign up with FIRST](https://www.firstinspires.org/) Sign up or log into your existing account and join team 1277. Again, if you were a member last year, go ahead and complete this step. Be sure to accept the “consent and release.”" />

            <TextParagraph text="#4 Complete a [CORI Form](https://core-docs.s3.amazonaws.com/documents/asset/uploaded_file/1457245/CORI_Form.pdf) This form is required by law to be completed by any adult working with minors. It is a simple criminal background check. You must bring the form in person along with a government-issued photo ID to any main office in the district (including the HS). Please note that you only need to complete the fields with an asterisk (*)." />

            <TextParagraph text="#5 Complete the [Safety Quiz](https://docs.google.com/forms/d/e/1FAIpQLSdVHyPgM6zGZa3kmMuxYWoDZYY1Ik9wWfo18Rc0sA9Lbgum2w/viewform?usp=sf_link) You must pass this quiz with a 100% in order to be allowed to use the machines. Take the quiz as many times as needed." />
            <TextParagraph text="[Link to materials including videos](https://drive.google.com/drive/folders/1qb45LRm1kzH7hDBpKChAoadLOx00Nh34?usp=sharing)." />
            <TextParagraph text="Read the [FIRST Safety Manual](https://www.firstinspires.org/robotics/frc/safety)." />

            <TextParagraph text="#6: Complete the [Equity, Diversity, and Inclusion Training](https://www.firstinspires.org/resource-library/training-equity-diversity-inclusion) on the FIRST website. (Voluntary.)" />
            <LinkImage
              url="https://i0.wp.com/www.robotomies.com/wp-content/uploads/2021/07/first-equitydiversityinclusion-badge.png?resize=148%2C143&ssl=1"
              imagePath="https://i0.wp.com/www.robotomies.com/wp-content/uploads/2021/07/first-equitydiversityinclusion-badge.png?ssl=1"
              altText="FIRST Equity, Diversity, and Inclusion Training Completed Badge"
              widthPercent={70}
            />

            <SizedBox height={40} />

            <h3>Additional Resources for Mentors</h3>
            <TextParagraph text="[Driver Background Check](https://www.robotomies.com/wp-content/uploads/2023/03/DriverApproval.pdf) (for mentors who will be driving students to events)" />
          </>
        }
      />
    </>
  );
}
