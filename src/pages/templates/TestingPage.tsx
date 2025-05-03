import BannerImage from "../../components/BannerImage";
import ContentSection from "../../components/content/ContentSection";
import DecoratedList from "../../components/content/DecoratedList";
import ImageCarousel from "../../components/content/ImageCarousel";
import LinkButton from "../../components/content/LinkButton";
import LinkImage from "../../components/content/LinkImage";
import PhotoGrid from "../../components/content/PhotoGrid";
import SectionImage from "../../components/content/SectionImage";
import SideBySideSection from "../../components/content/SideBySideSection";
import SponsorGrid from "../../components/content/SponsorGrid";
import TextParagraph from "../../components/content/TextParagraph";
import SizedBox from "../../components/utils/SizedBox";

export default function TestingPage() {
  return (
    <>
      <BannerImage imagePath={"/graphics/CenterBanner.png"} />
      <SizedBox height={40} />

      {/* Introduction Section */}
      <ContentSection
        title={"Component Showcase"}
        subtitle={"Display of all available components"}
        content={
          <>
            <TextParagraph text="This page showcases all the components available for use in the Robotomies website. Use this as a reference when building new pages or updating existing ones." />
            <TextParagraph
              text="Each component is displayed with example usage and a brief description."
              emphasis={true}
            />
          </>
        }
      />

      {/* TextParagraph Examples */}
      <ContentSection
        title={"TextParagraph Component"}
        subtitle={"Various text styling options"}
        content={
          <>
            <TextParagraph text="This is a standard paragraph with default styling. TextParagraph is used for all text content on the site and provides consistent styling." />

            <TextParagraph text="This paragraph uses primary color styling" primary={true} />

            <TextParagraph text="This paragraph uses bold text styling" bold={true} />

            <TextParagraph text="This paragraph is centered on the page" centered={true} />

            <TextParagraph
              text="This paragraph uses emphasis styling and is highlighted with the primary color"
              emphasis={true}
            />

            <TextParagraph text="TextParagraph also supports [inline links](https://www.robotomies.com) that automatically convert to clickable elements. You can link to external websites, internal pages, or resources." />

            <SizedBox height={20} />
          </>
        }
      />

      {/* SectionImage Examples */}
      <ContentSection
        title={"SectionImage Component"}
        subtitle={"Display single images with captions"}
        content={
          <>
            <TextParagraph text="SectionImage is used to display a single image with an optional caption. Clicking on the image opens it in a new tab for a closer look." />

            <SectionImage
              imagePath="/pictures/2025/2025_WPI-Team-Picture.jpg"
              caption="Basic SectionImage with a caption: Team picture from the 2025 WPI Competition"
            />

            <SectionImage
              imagePath="/pictures/2025/2025_Robot-Near-Reef.jpg"
              caption="SectionImage with custom width (70%)"
              widthPercent={70}
            />

            <SectionImage
              imagePath="/pictures/2025/2025_Dive_Banner.jpg"
              caption="SectionImage with disabled click functionality"
              widthPercent={50}
              disableClick={true}
            />

            <SizedBox height={20} />
          </>
        }
      />

      {/* ImageCarousel Examples */}
      <ContentSection
        title={"ImageCarousel Component"}
        subtitle={"Interactive image slideshow"}
        content={
          <>
            <TextParagraph text="The ImageCarousel provides an interactive slideshow of images with navigation buttons, captions, and indicators. Users can navigate through images manually, and the carousel can automatically scroll through images if enabled." />

            <TextParagraph text="Standard ImageCarousel with navigation and captions:" />
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
              ]}
            />

            <SizedBox height={30} />
            <TextParagraph text="Auto-scrolling ImageCarousel (5 second interval):" />
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
              ]}
              autoScroll={true}
              autoScrollTime={5000}
            />

            <SizedBox height={20} />
          </>
        }
      />

      {/* PhotoGrid Examples */}
      <ContentSection
        title={"PhotoGrid Component"}
        subtitle={"Display multiple images in a grid layout"}
        content={
          <>
            <TextParagraph text="PhotoGrid displays a responsive grid of images. This is useful for showcasing multiple images without taking up too much vertical space. Clicking on any image opens it in a new tab." />

            <PhotoGrid
              imagePaths={[
                "/pictures/2025/2025_Mentors-Group-Picture.jpg",
                "/pictures/2023/2023_WPI-Team-Picture.jpg",
                "/pictures/2025/2025_Robot-Near-Reef.jpg",
                "/pictures/2025/2025_Robot-Low-Perspective.jpg",
              ]}
            />

            <SizedBox height={20} />
          </>
        }
      />

      {/* SponsorGrid Examples */}
      <ContentSection
        title={"SponsorGrid Component"}
        subtitle={"Display sponsor logos in a grid"}
        content={
          <>
            <TextParagraph text="SponsorGrid is designed specifically for displaying sponsor logos in a grid layout. Each logo can be linked to the sponsor's website." />

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

            <SizedBox height={20} />
          </>
        }
      />

      {/* DecoratedList Examples */}
      <ContentSection
        title={"DecoratedList Component"}
        subtitle={"Create attractive lists with titles and descriptions"}
        content={
          <>
            <TextParagraph text="DecoratedList creates visually appealing lists with titles and descriptions. This is perfect for highlighting key points, benefits, or features." />

            <DecoratedList
              items={[
                {
                  title: "Engineering Excellence",
                  description:
                    "Our team focuses on developing robust engineering solutions through iterative design and testing processes, ensuring our robots are reliable and competitive.",
                },
                {
                  title: "Student Leadership",
                  description:
                    "Team members take on leadership roles in design, programming, fabrication, business operations, and outreach, developing valuable skills for future careers.",
                },
                {
                  title: "Community Engagement",
                  description:
                    "Beyond competitions, we engage with our local community through demonstrations, workshops, and mentoring programs to inspire interest in STEM fields.",
                },
                {
                  title: "Inclusive Environment",
                  description:
                    "We welcome students of all backgrounds and experience levels, providing training and support to help everyone contribute meaningfully to the team's success.",
                },
              ]}
            />

            <SizedBox height={20} />
          </>
        }
      />

      {/* LinkButton Examples */}
      <ContentSection
        title={"LinkButton Component"}
        subtitle={"Create attractive buttons that link to other pages"}
        content={
          <>
            <TextParagraph text="LinkButton creates styled buttons that link to other pages or resources. You can customize the appearance and include icons." />

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "20px" }}>
              <LinkButton url={"https://www.firstinspires.org/"} textContent={"Standard Button"} />

              <LinkButton
                url={"https://www.firstinspires.org/robotics/frc"}
                textContent={"Outline Button"}
                outline={true}
              />

              <LinkButton url={"https://www.robotomies.com"} textContent={"With Icon"} icon="/icons/home.png" />

              <LinkButton
                url={"https://www.firstinspires.org/resource-library"}
                textContent={"With Inverted Icon"}
                icon="/icons/info.png"
                invertIcon={true}
              />

              <LinkButton
                url={"https://www.firstinspires.org/community/scholarships"}
                textContent={"Uncolored Button"}
                uncolored={true}
              />
            </div>

            <SizedBox height={20} />
          </>
        }
      />

      {/* LinkImage Examples */}
      <ContentSection
        title={"LinkImage Component"}
        subtitle={"Images that function as links"}
        content={
          <>
            <TextParagraph text="LinkImage creates clickable images that function as links. This is useful for banner ads, logos that link to other sites, or any image that should navigate to another page when clicked." />

            <LinkImage
              imagePath="/graphics/StudentsFirst.webp"
              url="https://studentsfirst.tech/"
              altText="Students First Initiative"
              widthPercent={80}
              roundCorners={true}
            />

            <SizedBox height={20} />
          </>
        }
      />

      {/* SideBySideSection Examples */}
      <ContentSection
        title={"SideBySideSection Component"}
        subtitle={"Create two-column layouts"}
        content={
          <>
            <TextParagraph text="SideBySideSection creates a two-column layout, allowing you to place content side by side. This is useful for creating more dynamic page layouts with complementary content." />

            <SizedBox height={20} />
          </>
        }
      />

      <SideBySideSection
        leftContent={
          <ContentSection
            title="Left Column"
            content={
              <>
                <TextParagraph text="This is content in the left column. SideBySideSection allows you to place any content components side by side in a responsive layout." />
                <TextParagraph text="On mobile devices, the columns will stack vertically for better readability." />
                <DecoratedList
                  items={[
                    {
                      title: "Flexible Layout",
                      description: "Adapt content presentation based on screen size",
                    },
                    {
                      title: "Visual Balance",
                      description: "Create aesthetically pleasing information architecture",
                    },
                  ]}
                />
              </>
            }
          />
        }
        rightContent={
          <ContentSection
            title="Right Column"
            content={
              <>
                <TextParagraph text="This is content in the right column. You can include any components here, such as images, text, or other custom elements." />
                <SectionImage
                  imagePath="/pictures/2025/2025_Practice-Field-Robot.png"
                  caption="Example image in the right column"
                />
              </>
            }
          />
        }
        gap={40}
      />

      {/* SizedBox Examples */}
      <ContentSection
        title={"SizedBox Component"}
        subtitle={"Add space between elements"}
        content={
          <>
            <TextParagraph text="SizedBox adds empty space between elements. This is a simple but important component for controlling layout spacing." />

            <div
              style={{
                background: "rgba(230, 0, 36, 0.1)",
                padding: "10px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            >
              <TextParagraph text="Element before SizedBox" />
            </div>

            <SizedBox height={40} />

            <div style={{ background: "rgba(230, 0, 36, 0.1)", padding: "10px", borderRadius: "5px" }}>
              <TextParagraph text="Element after SizedBox (40px vertical space added)" />
            </div>

            <div style={{ display: "flex", marginTop: "20px" }}>
              <div style={{ background: "rgba(230, 0, 36, 0.1)", padding: "10px", borderRadius: "5px" }}>
                <TextParagraph text="Element before" />
              </div>

              <SizedBox width={40} />

              <div style={{ background: "rgba(230, 0, 36, 0.1)", padding: "10px", borderRadius: "5px" }}>
                <TextParagraph text="Element after (40px horizontal space added)" />
              </div>
            </div>

            <SizedBox height={40} />
          </>
        }
      />

      {/* Final Section with links */}
      <ContentSection
        title={"Useful Resources"}
        subtitle={"Links to documentation and references"}
        content={
          <>
            <TextParagraph text="For more information about how to use these components, refer to the following resources:" />

            <TextParagraph text="• View the [DOCS.md](https://github.com/FRCTeam1277/Team-1277-Website/blob/main/DOCS.md) file for detailed documentation." />

            <TextParagraph text="• Check out the [FIRST Robotics Competition website](https://www.firstinspires.org/robotics/frc) for more information about FRC." />

            <TextParagraph text="• Visit the [Groton-Dunstable Regional High School website](https://www.gdrsd.org/o/gdrhs) to learn about our school." />

            <TextParagraph
              text="This testing page demonstrates all components available in the Robotomies website. Use it as a reference when building new pages."
              primary={true}
            />

            <SizedBox height={40} />
          </>
        }
      />
    </>
  );
}
