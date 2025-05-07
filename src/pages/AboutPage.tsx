import BannerImage from "../components/common/BannerImage";
import ContentSection from "../components/content/ContentSection";
import PhotoGrid from "../components/content/PhotoGrid";
import SponsorGrid from "../components/content/SponsorGrid";
import SizedBox from "../components/utils/SizedBox";
import TextParagraph from "../components/content/TextParagraph";
import DecoratedList from "../components/content/DecoratedList";
import SectionImage from "../components/content/SectionImage";
import LinkImage from "../components/content/LinkImage";
import SideBySideSection from "../components/content/SideBySideSection";
import HighlightSection from "../components/content/HighlightSection";
import LinkButton from "../components/content/LinkButton";
import ImageCarousel from "../components/content/ImageCarousel";
import GoFundMe from "../components/other/GoFundMe";

export default function AboutPage() {
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
        title={"2025 Season"}
        subtitle={"Making Waves on the Reefscape"}
        content={
          <>
            <TextParagraph
              text="We just finished our 2025 competition season. View more information about our success this year on the [2025: Dive](/seasons/2025) page."
              centered={true}
            />
            <ImageCarousel
              autoScroll={true}
              autoScrollTimeMS={3000}
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
              ]}
            />{" "}
          </>
        }
      />

      <ContentSection
        title={"Help Support the Robotomies"}
        subtitle="Join us in our mission to inspire students!"
        content={
          <>
            <TextParagraph
              text="We use funding to get to competitions and support robot-building expanses. We greatly appreciate any support you can provide."
              centered={true}
            />
            <GoFundMe />
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

      <HighlightSection
        content={
          <SideBySideSection
            leftContent={
              <ContentSection
                title={"Learn More"}
                subtitle="Follow us on social media!"
                content={
                  <>
                    <TextParagraph text="Follow the robotomies on instagram and facbeook. We recommend checking out our Instagram and Facebook pages for the latest updates. We regularly post about our events, competitions, and team activities. On the instagram we also share lots of pictures and videos from our competitions." />
                    <LinkButton
                      url={"https://www.instagram.com/robotomies1277/"}
                      icon="/socials/instagram.png"
                      textContent={"Instagram"}
                      invertIcon={true}
                      uncolored={true}
                      disableShadow={true}
                    />
                    <SizedBox height={10} />
                    <LinkButton
                      url={"https://www.facebook.com/team1277"}
                      icon="/socials/facebook.png"
                      textContent={"Facebook"}
                      invertIcon={true}
                      uncolored={true}
                      disableShadow={true}
                    />
                  </>
                }
              />
            }
            rightContent={
              <>
                <SectionImage
                  imagePath="/pictures/2025/2025_Practice-Field-Robot.png"
                  caption="Image of our 2025 season robot on the practice field at WPI."
                />
              </>
            }
            gap={20}
          />
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

      <SideBySideSection
        leftContent={
          <ContentSection
            preheading="We proudly support"
            title={"Students First"}
            content={
              <>
                <TextParagraph text="Students First is an organization dedicated to ensuring that student education and autonomy are prioritized in robotics teams. The organization embraces FIRST's values while advocating for a balance between mentor involvement and student learning, empowering students to develop technical skills and take leadership roles in their robotics journey." />
                <LinkImage
                  imagePath="/graphics/StudentsFirst.webp"
                  url="https://studentsfirst.tech/"
                  altText="[Students First Link]"
                  widthPercent={100}
                  heightPercent={100}
                  roundCorners={true}
                />
                <SizedBox height={40} />
              </>
            }
          />
        }
        rightContent={
          <PhotoGrid
            imagePaths={["/pictures/2025/2025_Mentors-Group-Picture.jpg", "/pictures/2023/2023_WPI-Team-Picture.jpg"]}
          />
        }
      />

      <SizedBox height={40} />

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
    </>
  );
}
