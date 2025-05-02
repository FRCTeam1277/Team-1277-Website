import BannerImage from "../../components/BannerImage";
import ContentSection from "../../components/content/ContentSection";
import SizedBox from "../../components/utils/SizedBox";
import TextParagraph from "../../components/content/TextParagraph";
import SectionImage from "../../components/content/SectionImage";
import LinkButton from "../../components/content/LinkButton";

export default function Season2025Page() {
  return (
    <>
      <BannerImage imagePath={"/pictures/2025/2025_Banner.png"} />
      <ContentSection
        title={"2025 Competition Season"}
        subtitle={"Making Waves on the Reefscape"}
        content={
          <>
            <TextParagraph
              text="Beneath the ocean's surface lies our planet's most complex ecosystems, full of life and potential for
              exploration and learning, where each inhabitant has a role to play in building a thriving environment.
              Teams use their STEM and collaboration skills to explore life beneath the surface of the ocean."
            />
            <TextParagraph
              text="Along the way, we uncover the potential in each of us to strengthen our community and innovate for a
              better world with healthy oceans."
              emphasis={true}
            />
            <TextParagraph
              text="Two alliances of three robots each work to score PVC pipes (called Coral) and playground balls (called
              Algae) into goals. At the end of the match, robots move to a truss structure called the Barge and climb
              metal Cages to earn additional points."
            />
            <SectionImage imagePath="/pictures/2025/2025_Dive_Banner.jpg" widthPercent={50} />
            <SizedBox height={40} />
          </>
        }
      />
      <ContentSection
        title={"Events"}
        subtitle={"Competitions and Events that we attended in the 2025 season"}
        centerText={true}
        content={
          <>
            <TextParagraph text="Come see us at Battle Cry at WPI, on June 6, 7 and 8!" primary={true} />
            <TextParagraph
              text="[Salem HS](https://frc-events.firstinspires.org/2025/NHSAL): 
              Friday, February 28 to Sunday, March 2, 2025 (Week 1)"
            />

            <LinkButton href={"https://firstnh.wixsite.com/firstnh/gsd-team-information"} textContent={"Event Info"} />
            <SizedBox height={30} />

            <TextParagraph
              text="NE FIRST will stream match play to [nefirst.org/livestream](http://nefirst.org/livestream). 
              Northern events will stream to BLUE links. Southern events will stream to RED links. 
              Third events for a week will stream to PURPLE links."
            />
            <TextParagraph text="[WPI](https://frc-events.firstinspires.org/2025/MAWOR): Friday, March 21 to Sunday, March 23, 2025 (Week 4)" />
            <TextParagraph
              text="Full list of New England Competitions can be found 
              [here](https://frc-events.firstinspires.org/2025/Events/EventList?filter=NE)."
            />
            <SectionImage
              imagePath="/pictures/2025/2025_WPI-Team-Picture.jpg"
              caption="Proud to have finished qualifiers in 8th place becoming Alliance Captains for Alliance 5. WPI Competition, March 23, 2025."
            />
            <SizedBox height={40} />
          </>
        }
      />
    </>
  );
}
