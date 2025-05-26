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
              text="This is the official Robotomies events Google Calendar, updated regularly."
              centered
              bold
              primary
            />
            <iframe
              src="https://calendar.google.com/calendar/u/0/embed?src=07ca5e9afc5e07881dccad0d61e78323f3124c0630be7e41d4ff90998049991f@group.calendar.google.com&ctz=America/New_York"
              style={{ border: 0 }}
              width="800"
              height="600"
              frameBorder="0"
              scrolling="no"
            />
          </>
        }
      />
    </>
  );
}
