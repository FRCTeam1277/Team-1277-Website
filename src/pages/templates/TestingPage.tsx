import BannerImage from "../../components/BannerImage";
import ContentSection from "../../components/content/ContentSection";
import PhotoGrid from "../../components/content/PhotoGrid";
import SideBySideSection from "../../components/content/SideBySideSection";
import SponsorGrid from "../../components/content/SponsorGrid";
import TextParagraph from "../../components/content/TextParagraph";
import SizedBox from "../../components/utils/SizedBox";

export default function TestingPage() {
  return (
    <>
      <BannerImage imagePath={"/graphics/CenterBanner.png"} />
      <SizedBox height={40} />
      <ContentSection
        title={"About Our Team"}
        subtitle={"Celebrating 20 years of competition!"}
        content={
          <>
            <TextParagraph text="Team 1277: The Robotomies, is the FIRST Robotics Competition (FRC) Team out of Groton, MA. We are a high school competitive robotics team participating in the FIRST programs designed to teach students hands-on, real-world engineering and business skills by creating a custom robot to play that season's game every year." />
          </>
        }
      />
      <SideBySideSection
        leftContent={
          <ContentSection title="Left Section" content={<TextParagraph text={"Content for the left side."} />} />
        }
        rightContent={
          <ContentSection title="Right Section" content={<TextParagraph text={"Content for the right side."} />} />
        }
      />

      <SideBySideSection
        leftContent={
          <ContentSection title="Team Info" content={<TextParagraph text={"Information about the team"} />} />
        }
        rightContent={
          <PhotoGrid
            imagePaths={["/pictures/2025/2025_Mentors-Group-Picture.jpg", "/pictures/2023/2023_WPI-Team-Picture.jpg"]}
          />
        }
      />

      <SideBySideSection
        leftContent={
          <SponsorGrid
            items={[
              { imagePath: "/sponsors/BAE_Logo.png", link: "https://www.baesystems.com/en-us/home" },
              { imagePath: "/sponsors/RTX_Raytheon_Technologies_logo.webp", link: "https://www.rtx.com/" },
              { imagePath: "/sponsors/HPE_Logo.png", link: "https://www.hpe.com/us/en/home.html" },
              { imagePath: "/sponsors/GDEF_Logo.png", link: "https://www.gdefinc.org/" },
              {
                imagePath: "/sponsors/national-carpet-flooring-logo.png",
                link: "https://www.nationalcarpetandflooring.com/",
              },
            ]}
          />
        }
        rightContent={
          <ContentSection title="Sponsors" content={<TextParagraph text={"We are greatful for our sponsors."} />} />
        }
        gap={60} // Optional custom gap between sections
      />
    </>
  );
}
