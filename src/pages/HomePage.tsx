import BannerImage from "../components/BannerImage";
import ContentSection from "../components/content/ContentSection";
import PhotoGrid from "../components/content/PhotoGrid";
import SponsorGrid from "../components/content/SponsorGrid";
import SizedBox from "../components/utils/SizedBox";
import TextParagraph from "../components/content/TextParagraph";
import DecoratedList from "../components/content/DecoratedList";
import SectionImage from "../components/content/SectionImage";

export default function HomePage() {
  return (
    <>
      <BannerImage imagePath={"/graphics/CenterBanner.png"} />

      {/* Introduction Section */}
      <ContentSection
        title={"About Our Team"}
        subtitle={"Celebrating 20 years of competition!"}
        content={
          <>
            <TextParagraph text="Team 1277: The Robotomies, is the FIRST Robotics Competition (FRC) Team out of Groton, MA. We are a high school competitive robotics team participating in the FIRST programs designed to teach students hands-on, real-world engineering and business skills by creating a custom robot to play that season's game every year." />

            <TextParagraph
              text="FIRST - For the Inspiration and Recognition of Science and Technology."
              emphasis={true}
            />

            <TextParagraph text="We are a non-profit, student-led organization that relies on funding from companies like you to bring valuable robotics experience to our team and help build the next generation of engineers." />

            <SectionImage
              imagePath="/pictures/2025/2025_WPI-Team-Picture.jpg"
              caption="Team picture taken after the 2025 WPI Competition."
            />

            <SizedBox height={40} />
          </>
        }
      />
      <ContentSection
        title={"Sponsor Benefits"}
        subtitle={"Exposure, Outreach, Inspiration"}
        content={
          <>
            <DecoratedList
              items={[
                {
                  title: "Bring More Kids into STEM",
                  description:
                    "By supporting the team, your company brings real world STEM experience to kids in the community",
                },
                {
                  title: "Company Exposure",
                  description:
                    "Your company will be recognized on our website, social media, and at competitions by thousands of people in and outside of the team.",
                },
                {
                  title: "Advertising at Competitions",
                  description:
                    "Your company name will be announced at competitions and outreach events, providing visibility to a wide audience. Your logo will be displayed on our team shirts, robot, merchandise.",
                },
              ]}
            />

            <SizedBox height={40} />
          </>
        }
      />
      <ContentSection
        title={"Volunteer"}
        subtitle={"Mentor, Coach, Inspire"}
        content={
          <>
            <DecoratedList
              items={[
                {
                  title: "Bring Your Knowledge to the Team",
                  description:
                    "We are always in search of adult mentors that have a passion for robotics with or without technical backgrounds",
                },
                {
                  title: "Empower Young Leaders",
                  description: "Your skill and input will inspire and shape future engineers",
                },
                {
                  title: "Community Outreach",
                  description:
                    "Your financial support enables students to have access to technology and gives them the opportunity to participate in competitions where they can showcase their hard work.",
                },
              ]}
            />
            <SizedBox height={40} />
          </>
        }
      />
      <PhotoGrid
        imagePaths={["/pictures/2025/2025_Mentors-Group-Picture.jpg", "/pictures/2023/2023_WPI-Team-Picture.jpg"]}
      />
      <SponsorGrid
        imagePaths={[
          "/sponsors/BAE_Logo.png",
          "/sponsors/RTX_Raytheon_Technologies_logo.webp",
          "/sponsors/HPE_Logo.png",
          "/sponsors/GDEF_Logo.png",
          "/sponsors/national-carpet-flooring-logo.png",
        ]}
        link={["https://www.baesystems.com/en/home"]}
      />
    </>
  );
}
