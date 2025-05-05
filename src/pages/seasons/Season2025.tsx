import BannerImage from "../../components/common/BannerImage";
import ContentSection from "../../components/content/ContentSection";
import SizedBox from "../../components/utils/SizedBox";
import TextParagraph from "../../components/content/TextParagraph";
import SectionImage from "../../components/content/SectionImage";
import LinkButton from "../../components/content/LinkButton";
import SponsorGrid from "../../components/content/SponsorGrid";
import DecoratedList from "../../components/content/DecoratedList";

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
            <SectionImage imagePath="/pictures/2025/2025_Dive_Banner.jpg" widthPercent={50} disableClick={true} />
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

            <LinkButton
              url={"https://firstnh.wixsite.com/firstnh/gsd-team-information"}
              textContent={"Event Info"}
              icon="/icons/calendar.png"
              invertIcon={true}
            />
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

      <ContentSection
        title={"2025 Team Support"}
        subtitle={"We are grateful for the support making this season possible!"}
        centerText={true}
        content={
          <>
            <TextParagraph text="Thank you to our sponsors!" primary={true} />
            <TextParagraph text="If you wish to support us in the upcoming season, please contact Mark Rocheleau through the [contact us](/contact) page." />

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
                {
                  imagePath: "https://www.sterilite.com/images/sterilite_logo.png",
                  link: "https://www.sterilite.com/",
                },
              ]}
            />

            <TextParagraph text="Additionally, we want to thank our mentors, who have been instrumental in guiding our team with expertise and encouragement throughout the season." />

            <TextParagraph text="Special thanks to" primary={true} removeMargin={true} />
            <TextParagraph text="The McKinley Family" bold={true} uppercase={true} removeMargin={true} />
            <TextParagraph text="The Hughson Family" bold={true} uppercase={true} removeMargin={true} />
            <TextParagraph text="The Goss Family" bold={true} uppercase={true} removeMargin={true} />

            <SizedBox height={40} />
          </>
        }
      />

      <ContentSection
        title="Our Fundraising Tiers"
        content={
          <>
            <DecoratedList
              items={[
                { title: "Stone Age: $1-99", description: "Thank you!" },
                { title: "Bronze Age: $100-499", description: "Company name on website + social media shoutout" },
                { title: "Iron Age: $500-999", description: "What’s above + name on tee shirt" },
                {
                  title: "Industrial Revolution: $1000-1999",
                  description: "What’s above + name on banner and small name on robot",
                },
                { title: "Machine Age: $2000-3999", description: "What’s above + large name on robot" },
                {
                  title: "Digital Revolution: $4000+",
                  description:
                    "What’s above + preferred location of large name on robot and end of year robot demo at company",
                },
              ]}
            />

            <SizedBox height={20} />

            <TextParagraph
              text="*Donations must be made by December 31 to be included in any printed materials."
              centered={true}
            />

            <SizedBox height={40} />
          </>
        }
      />
    </>
  );
}
