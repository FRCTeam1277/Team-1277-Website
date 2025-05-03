import BannerImage from "../../components/BannerImage";
import ContentSection from "../../components/content/ContentSection";
import ImageCarousel from "../../components/content/ImageCarousel";
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

      {/* Basic Image Carousel Example */}
      <ContentSection
        title="Image Carousel"
        subtitle="Showcase of our competition robot"
        content={
          <>
            <TextParagraph text="Our 2025 robot in action during competition. Here's a gallery showing different angles and features." />
            <ImageCarousel
              images={[
                {
                  path: "/pictures/2025/2025_Robot-Near-Reef.jpg",
                  caption: "Robot positioned near the reef during the 2025 competition",
                },
                {
                  path: "/pictures/2025/2025_Robot-Low-Perspective.jpg",
                  caption: "Low angle perspective of our robot's mechanical systems",
                },
                {
                  path: "/pictures/2025/2025_Hanging-Robot.jpg",
                  caption: "Robot hanging from the cage structure at the end of the match",
                },
                {
                  path: "/pictures/2025/2025_Driver-Station-POV.jpg",
                  caption: "View from the driver station during competition",
                },
                {
                  path: "/pictures/2025/2025_WPI-Robot.png",
                  caption: "Our robot at the WPI competition",
                },
              ]}
            />
          </>
        }
      />

      {/* Auto-scrolling Example */}
      <ContentSection
        title="Auto-scrolling Gallery"
        subtitle="Team photos (with 5 second interval)"
        content={
          <>
            <TextParagraph text="This carousel automatically advances through images every 5 seconds. The auto-scroll will stop if you manually navigate using the arrows or dots." />
            <ImageCarousel
              images={[
                {
                  path: "/pictures/2025/2025_WPI-Team-Picture.jpg",
                  caption: "Team picture at the 2025 WPI event",
                },
                {
                  path: "/pictures/2025/2025_Mentors-Group-Picture.jpg",
                  caption: "Our mentors at the 2025 competition",
                },
                {
                  path: "/pictures/2023/2023_WPI-Team-Picture.jpg",
                  caption: "Team picture from the 2023 WPI competition",
                },
                {
                  path: "/pictures/2024/2024_Team-Picture.jpg",
                  caption: "Team picture from the 2024 season",
                },
              ]}
              autoScroll={true}
              autoScrollTime={5000}
            />
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
