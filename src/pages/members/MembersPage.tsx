import ContentSection from "../../components/content/ContentSection";
import TextParagraph from "../../components/content/TextParagraph";
import SizedBox from "../../components/utils/SizedBox";

export default function MembersPage() {
  return (
    <ContentSection
      title="Members"
      subtitle="Resources and Links for New and Current Team Members"
      content={
        <>
          <TextParagraph
            removeMargin
            text="[Safety](/members/safety) Team Safety: Manual, Checklist, Resources, and Quiz."
          />
          <TextParagraph
            removeMargin
            text="[Calendar](/members/calendar) Team Event Schedule: Track events, competitions, and meetings."
          />
          <TextParagraph
            removeMargin
            text="[Mentor Signup](/members/mentor-signup) Mentor Signup: Steps to sign up to be a mentor for new members."
          />
          <TextParagraph
            removeMargin
            text="[Student Signup](/members/student-signup) Required steps for students to register as a member of the robotomies."
          />
          <TextParagraph
            removeMargin
            text="[Programming](/members/docs/programming) 1277's accumulated knowledge/resources and tutorials."
          />

          <SizedBox height={60} />
        </>
      }
    />
  );
}
