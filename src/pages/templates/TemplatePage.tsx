import BannerImage from "../../components/BannerImage";
import ContentSection from "../../components/content/ContentSection";
import TextParagraph from "../../components/content/TextParagraph";

export default function PageTemplate() {
  return (
    <>
      {/* Modify the banner */}
      <BannerImage imagePath={"/graphics/CenterBanner.png"} />

      {/* Add Content Here */}
      <ContentSection
        title={"About Our Team"}
        subtitle={"Celebrating 20 years of competition!"}
        content={
          <>
            <TextParagraph text="Team 1277: The Robotomies, is the FIRST Robotics Competition (FRC) Team out of Groton, MA. We are a high school competitive robotics team participating in the FIRST programs designed to teach students hands-on, real-world engineering and business skills by creating a custom robot to play that season's game every year." />
          </>
        }
      />
    </>
  );
}
