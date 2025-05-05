import ContentSection from "../components/content/ContentSection";
import DecoratedList from "../components/content/DecoratedList";
import TextParagraph from "../components/content/TextParagraph";
import SizedBox from "../components/utils/SizedBox";

export default function ContactPage() {
  return (
    <>
      <ContentSection
        title="Contact Us!"
        subtitle="Contact the Robotomies for any inquiries you may have."
        content={
          <>
            <DecoratedList
              items={[
                {
                  title: "Lead mentor:",
                  description: "Britt McKinley – brittain.mckinley at gmail.com",
                },
                {
                  title: "Faculty advisor/mentor:",
                  description: "Mark Rocheleau (faculty advisor) – mrocheleau at gdrsd.org",
                },
              ]}
            />
            <TextParagraph text="General email – 1277 at robotomies.com" centered={true} />
            <TextParagraph text="Mailing address:" removeMargin={true} primary={true} bold={true} />
            <TextParagraph text="GDRHS" removeMargin={true} />
            <TextParagraph text="The Robotomies" removeMargin={true} />
            <TextParagraph text="Attn: Mark Rocheleau" removeMargin={true} />
            <TextParagraph text="703 Chicopee Row" removeMargin={true} />
            <TextParagraph text="Groton, MA 01450" removeMargin={true} />
            <TextParagraph text="978-448-6362" removeMargin={true} />
            <SizedBox height={40} />
          </>
        }
      />
      <ContentSection
        title="Contact Form"
        content={
          <TextParagraph text="Please fill out the form below to contact us. We will get back to you as soon as possible." />
        }
      />
    </>
  );
}
