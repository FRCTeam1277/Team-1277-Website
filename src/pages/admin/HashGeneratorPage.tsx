import ContentSection from "../../components/content/ContentSection";
import TextParagraph from "../../components/content/TextParagraph";
import HashGeneratorForm from "../../components/other/HashGeneratorForm";

export default function HashGeneratorPage() {
  return (
    <>
      <ContentSection
        title="Password Hash Generator"
        subtitle="Generate secure hashes for protected content"
        content={
          <>
            <TextParagraph text="This utility helps you generate SHA-256 hashes for use with the PasswordProtectedContent component. Enter a password below to generate its hash." />

            <TextParagraph text="Note that this is for non-critical content. Since the hash verification happens client-side this will not be very secure for sensitive information. For truly sensitive data, a server-side authentication system is recommended." />
          </>
        }
      />
      <ContentSection
        title="Generator"
        content={
          <>
            <HashGeneratorForm />

            <TextParagraph text="Note: This hash generator runs entirely in your browser. Passwords are never sent to any server." />
          </>
        }
      />
    </>
  );
}
