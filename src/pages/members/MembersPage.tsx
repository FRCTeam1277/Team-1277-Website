import ContentSection from "../../components/content/ContentSection";
import PasswordProtectedContent from "../../components/content/PasswordProtectedContent";
import TextParagraph from "../../components/content/TextParagraph";

export default function MembersPage() {
  return (
    <>
      <ContentSection
        title="Member Resources"
        subtitle="Tools and information for team members"
        content={
          <>
            <TextParagraph text="Welcome to the members area. Some content requires a password to access." />

            <PasswordProtectedContent
              contentId="slack-info"
              passwordHash="sha256:a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
              title="Team Communication"
              description="Enter the team password to access our Slack information."
            >
              <TextParagraph text="Our Slack workspace address is robotomies.slack.com" />
              {/* Protected content goes here */}
            </PasswordProtectedContent>
          </>
        }
      />
    </>
  );
}
