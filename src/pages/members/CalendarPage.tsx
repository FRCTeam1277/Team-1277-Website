import ContentSection from "../../components/content/ContentSection";
import TextParagraph from "../../components/content/TextParagraph";

export default function CalendarPage() {
  return (
    <>
      <ContentSection
        title="Robotomies Calendar"
        subtitle="Events, Competitions, and Schedule"
        preheading="Try to Keep Track"
        content={
          <>
            <TextParagraph text="The Robotomies calendar is a great way to keep track of all the events, competitions, and meetings that are coming up.  We have a lot of events planned for this year, so be sure to check back often!" />
            <TextParagraph
              text="Calendar coming to website soon. If its still not here, contact Mark Rocheleau."
              centered
              bold
              primary
            />
          </>
        }
      />
    </>
  );
}
