import BannerImage from "../../components/common/BannerImage";
import ContentSection from "../../components/content/ContentSection";
import SizedBox from "../../components/utils/SizedBox";
import TextParagraph from "../../components/content/TextParagraph";
import SectionImage from "../../components/content/SectionImage";
import SponsorGrid from "../../components/content/SponsorGrid";
import DecoratedList from "../../components/content/DecoratedList";
import SideBySideSection from "../../components/content/SideBySideSection";

export default function Season2024Page() {
  return (
    <>
      <BannerImage imagePath={"/pictures/2024/2024_Team-Picture-Edited.jpg"} />
      <ContentSection
        title={"2024 Competition Season"}
        subtitle={"Crescendo presented by Haas"}
        content={
          <>
            <TextParagraph
              text="In CRESCENDO presented by Haas, two competing alliances are invited to score notes, amplify their speaker,
              harmonize onstage, and take the spotlight before time runs out. Alliances earn additional rewards for meeting
              specific scoring thresholds and for cooperating with their opponents."
            />
            <TextParagraph
              text="The game is themed around music and involves two alliances consisting of three teams each competing 
              to perform various tasks, including shooting rings known as Notes into goals, and hanging on chains at the end of the match."
              emphasis={true}
            />
            <TextParagraph
              text="During the first 15 seconds of the match, robots are autonomous. Without guidance from their drivers, robots
              leave their starting zone, score notes in their speaker or amp, and collect and score additional notes.
              During the remaining 2 minutes and 15 seconds, drivers control their robots. Robots collect notes from human
              players at their source and score them in their amp and speaker."
            />
            <TextParagraph
              text="As time runs out, robots race to get onstage and deliver notes to their traps. Harmonizing robots, i.e. robots
              sharing a chain, earn an added bonus. Robots earn even more points if a human player spotlights robots on a
              chain by scoring a note on the chain's microphone."
            />
            <SectionImage
              imagePath="https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Crescendo_FRC_Logo.svg/1200px-Crescendo_FRC_Logo.svg.png"
              widthPercent={50}
              disableClick={true}
            />
            <SizedBox height={40} />
          </>
        }
      />
      <ContentSection
        title={"Events"}
        subtitle={"Competitions and Events that we attended in the 2024 season"}
        centerText={true}
        content={
          <>
            <TextParagraph text="NE District Granite State Event" primary={true} removeMargin />
            <TextParagraph text="February 29 – March 2, 2024" bold={true} removeMargin />
            <TextParagraph text="Salem High School, 44 Geremonty Drive, Salem, NH 03079" />

            <SizedBox height={20} />

            <TextParagraph text="NE District North Shore Event" primary={true} removeMargin />
            <TextParagraph text="March 15 – March 17, 2024" bold={true} removeMargin />
            <TextParagraph text="Reading Memorial High School, 62 Oakland Road, Reading, MA 01867" />

            <SizedBox height={20} />

            <TextParagraph
              text="NE FIRST streamed match play to [nefirst.org/livestream](http://nefirst.org/livestream). 
              Northern events streamed to BLUE links. Southern events streamed to RED links. 
              Third events for a week streamed to PURPLE links."
            />

            <SectionImage
              imagePath="/pictures/2024/2024_Industrial-Design-Award.jpg"
              caption="Our team proudly receiving the Industrial Design Award at the 2024 North Shore Event."
            />
            <SizedBox height={40} />
          </>
        }
      />{" "}
      <SideBySideSection
        leftContent={
          <ContentSection
            title={"2024 Team Support"}
            subtitle={"We are grateful for the support making this season possible!"}
            centerText={true}
            content={
              <>
                <TextParagraph text="Thank you to our sponsors!" primary={true} />
                <TextParagraph text="If you wish to support us in the upcoming season, please contact Mark Rocheleau through the [contact-us](/contact) page." />

                <SponsorGrid
                  items={[
                    { imagePath: "/sponsors/BAE_Logo.png", link: "https://www.baesystems.com/en-us/home" },
                    { imagePath: "/sponsors/RTX_Raytheon_Technologies_logo.webp", link: "https://www.rtx.com/" },
                    { imagePath: "/sponsors/GDEF_Logo.png", link: "https://www.gdefinc.org/" },
                    { imagePath: "/sponsors/HPE_Logo.png", link: "https://www.hpe.com/us/en/home.html" },
                    {
                      imagePath: "https://svgmix.com/uploads/908082-amd-advanced-micro-devices-white.svg",
                      link: "https://www.amd.com/",
                    },
                    {
                      imagePath:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
                      link: "https://www.microsoft.com/",
                    },
                  ]}
                />
              </>
            }
          />
        }
        rightContent={
          <ContentSection
            title="Our Fundraising Tiers"
            content={
              <>
                <DecoratedList
                  items={[
                    { title: "Stone Age: $1-99", description: "Thank you!" },
                    { title: "Bronze Age: $100-499", description: "Company name on website + social media shoutout" },
                    { title: "Iron Age: $500-999", description: "What's above + name on tee shirt" },
                    {
                      title: "Industrial Revolution: $1000-1999",
                      description: "What's above + name on banner and small name on robot",
                    },
                    { title: "Machine Age: $2000-3999", description: "What's above + large name on robot" },
                    {
                      title: "Digital Revolution: $4000+",
                      description:
                        "What's above + preferred location of large name on robot and end of year robot demo at company",
                    },
                  ]}
                />

                <SizedBox height={20} />

                <TextParagraph
                  text="*Donations must be made by December 31 to be included in any printed materials."
                  centered={true}
                />
              </>
            }
          />
        }
      />
    </>
  );
}
