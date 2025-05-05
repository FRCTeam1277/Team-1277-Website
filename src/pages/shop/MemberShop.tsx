import ContentSection from "../../components/content/ContentSection";
import TextParagraph from "../../components/content/TextParagraph";

export default function MemberShopPage() {
  return (
    <ContentSection
      preheading="Represent the Team"
      title="Member Shop"
      subtitle="Get High-Quality Robotomies Apparel"
      content={
        <>
          <TextParagraph text="THE STORE IS NOW CLOSED AND ORDER HAS BEEN SENT TO PRINTER." primary bold centered />
          <TextParagraph text="Welcome to the 2025 Robotomies Merch shopping page! This order site is available to team members to use for ordering merch. Before shopping, please note the following:" />
          <TextParagraph text="Shipping & Payment:" bold />
          <TextParagraph text="– There are no shipping options. Items will be picked up at school." />
          <TextParagraph text="– Payment may be made by check or cash in person and is due upon delivery. Checks should be made out to GDRHS." />
          <TextParagraph text="Logo Size & Placement:" bold />
          <TextParagraph text="All logo sizes and placements on this site are for reference only. They may vary slightly from what is pictured." />
          <TextParagraph text="Financial hardship assistance:" bold />
          <TextParagraph text="We want everyone to feel like a part of the team by being able to represent the team with official merchandise. If you are being hindered by any kind of financial hardship, please do not hesitate to reach out to Mr. Roch for a discount code!" />
          <TextParagraph text="Please complete your orders by Wednesday, January 15. Happy shopping!" />
          <TextParagraph text="P.S. – Add our email address (robotomies@team1277.org) to your address book to ensure you receive your order confirmations. If you don’t get it, check your spam folder!" />
        </>
      }
    />
  );
}
