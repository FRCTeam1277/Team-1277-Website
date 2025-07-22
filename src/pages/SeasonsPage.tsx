import ContentSection from "../components/content/ContentSection";
import TextParagraph from "../components/content/TextParagraph";
import SizedBox from "../components/utils/SizedBox";

export default function SeasonsPage() {
  return (
    <ContentSection
      title="Browse Competition Seasons"
      preheading="First Robotics Competition"
      content={
        <>
          <TextParagraph
            removeMargin
            text="[2025 Season](/seasons/2025) Reefscape Game: Score coral and climb onto the barge"
          />
          <TextParagraph
            removeMargin
            text="[2024 Season](/seasons/2024) Crescendo Game: Score notes, amplify the speaker, and harmonize onstage"
          />

          <SizedBox height={60} />
        </>
      }
    />
  );
}
