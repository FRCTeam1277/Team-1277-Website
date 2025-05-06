import ContentSection from "../../components/content/ContentSection";
import TextParagraph from "../../components/content/TextParagraph";
import LinkImage from "../../components/content/LinkImage";
import SizedBox from "../../components/utils/SizedBox";

export default function StudentSignup() {
  return (
    <>
      <ContentSection
        preheading="Welcome to the Team"
        title="Student Signup"
        subtitle="Don't forget any important steps!"
        content={
          <>
            <TextParagraph text="Thank you for your interest in the Robotomies! Here you will find important information regarding joining the team." />

            <TextParagraph text="#1: [The Robotomies Constitution](https://docs.google.com/document/d/1h1VoZEj-YWYsKdde1ih7DhJr8uqJVym99CVg50NmnkM/edit?usp=sharing) – Read me first! Yes, it’s a large document, but it includes extremely important information about job descriptions and expectations that you MUST know!" />

            <TextParagraph text="#2: [2026 Application Form](https://docs.google.com/forms/d/e/1FAIpQLSeUeh7zUnum1IP6wGOgRgcxOLldEFmD6nuPTwuuoYL2fJhGQg/viewform?usp=sf_link) Everyone must fill this out, even if you were a member last year!" />

            <TextParagraph text="AFTER YOU HAVE BEEN ACCEPTED AS A MEMBER:" bold primary />

            <TextParagraph text="#3: [Join the Slack group chat](/members) Keep up with real time communications. Click on 'Members' tab above and enter the password to access the page. Ask any member for the password." />

            <TextParagraph text="#4: [Parental Permission and Waiver Form](https://drive.google.com/file/d/0B_iTdFGUdb7DU3BuTE1GV2lXSkk/view?usp=sharing&resourcekey=0-DYsY2CWZTcZ347VtcS9E_w) AFTER you have been notified of your acceptance to the team, print this out and have your parent/guardian sign it." />

            <TextParagraph text="#5: [Sign up with FIRST](https://www.firstinspires.org/) Sign up or log into your existing account and join team 1277. NOTE: This is a multi-step process. Once you join team 1277, your membership will need to be approved. Once that is complete, your parent/guardian must log into their own account and sign the 'Consent and Release' form. Instructions can be found on the FIRST website." />

            <TextParagraph
              text="Send this [‘beta’ invitation link to your parents](https://my.firstinspires.org/JoinTeam/Welcome/8aac63df-8711-11ef-8c4f-00505699b848) or have them scan this QR code:"
              removeMargin
            />
            <LinkImage
              url="https://i0.wp.com/www.robotomies.com/wp-content/uploads/2024/10/firstlink.png?ssl=1"
              imagePath="https://i0.wp.com/www.robotomies.com/wp-content/uploads/2024/10/firstlink.png?ssl=1"
              altText="FIRST Beta Invite QR Code"
              widthPercent={80}
              roundCorners={false}
            />
            <SizedBox height={20} />
            <TextParagraph
              text="Updated for 2025! This should, theoretically, make it easier to get your parents to sign up and approve your participation in FIRST."
              centered
            />

            <TextParagraph text="#6: Complete the [Safety Quiz](https://docs.google.com/forms/d/e/1FAIpQLSdVHyPgM6zGZa3kmMuxYWoDZYY1Ik9wWfo18Rc0sA9Lbgum2w/viewform?usp=sf_link) You must pass this quiz with a 100% in order to be allowed to use the machines. Take the quiz as many times as needed. If you’ve already taken it and scored 100% in the past, you do not need to do it again." />
            <TextParagraph text="[Link to materials including videos](https://drive.google.com/drive/folders/1qb45LRm1kzH7hDBpKChAoadLOx00Nh34?usp=sharing)." />
            <TextParagraph text="Read the [FIRST Safety Manual](https://www.firstinspires.org/robotics/frc/safety)." />

            <TextParagraph text="#7: Pay your GDRHS Activity Fee. All students who participate in extracurricular activities must pay the $100 fee. This covers you for ALL activities you may be interested in joining (not just Robotomies). Make the check payable to GDRHS and submit it to the main office." />

            <TextParagraph text="#8: Optional: Complete the [Equity, Diversity, and Inclusion Training](https://www.firstinspires.org/resource-library/training-equity-diversity-inclusion) on the FIRST website." />
            <LinkImage
              url="https://www.firstinspires.org/resource-library/training-equity-diversity-inclusion"
              imagePath="https://i0.wp.com/www.robotomies.com/wp-content/uploads/2021/07/first-equitydiversityinclusion-badge.png?ssl=1"
              altText="FIRST Equity, Diversity, and Inclusion Training Completed Badge"
              widthPercent={70}
            />
            <SizedBox height={40} />
          </>
        }
      />
    </>
  );
}
