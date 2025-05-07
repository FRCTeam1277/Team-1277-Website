import ContentSection from "../../components/content/ContentSection";
import TextParagraph from "../../components/content/TextParagraph";
import SizedBox from "../../components/utils/SizedBox";
import LinkButton from "../../components/content/LinkButton";
import DecoratedList from "../../components/content/DecoratedList";

export default function SoftwareTools() {
  return (
    <>
      <ContentSection
        preheading="Technical Resources"
        title="Software Tools"
        subtitle="Essential tools for robot programming and setup"
        content={
          <>
            <TextParagraph text="This page provides resources for setting up and configuring critical software tools used in FRC competitions and practice environments. These resources will help you configure your robot's communication systems for both competition and home testing." />

            <h3>Networking and Radio Configuration</h3>

            <TextParagraph text="#1: Programming Your Radio for Home Use" bold removeMargin />
            <TextParagraph text="During competitions, your robot's radio is programmed with specific settings for the competition field. To use your robot at home or in your team's practice space, you'll need to reconfigure the radio with different settings. This guide walks you through the process of programming your robot's radio for use outside of competition." />
            <LinkButton
              url="http://wpilib.screenstepslive.com/s/3120/m/8559/l/91405-programming-your-radio-for-home-use"
              textContent="Radio Programming Guide for Home Use"
              icon="/icons/link.png"
            />
            <SizedBox height={20} />

            <TextParagraph text="Key points when programming your radio:" removeMargin />
            <DecoratedList
              items={[
                {
                  title: "Unique Network Name",
                  description: "Create a network name (SSID) that won't conflict with other nearby networks.",
                },
                {
                  title: "Security Settings",
                  description:
                    "Always use WPA2 encryption and a strong password to prevent unauthorized access to your robot.",
                },
                {
                  title: "IP Configuration",
                  description: "Ensure the radio and RoboRIO have the correct IP settings to communicate properly.",
                },
                {
                  title: "Bandwidth Management",
                  description:
                    "Configure QoS (Quality of Service) settings to prioritize robot control data over camera feeds.",
                },
              ]}
            />
            <SizedBox height={20} />

            <TextParagraph text="#2: Configuring the Radio" bold removeMargin />
            <TextParagraph text="This guide provides detailed instructions for configuring your robot's radio. It includes step-by-step procedures for setting up the radio with the correct parameters for optimal performance in both competition and practice environments." />
            <LinkButton
              url="http://www.usfirst.org/uploadedFiles/Robotics_Programs/FRC/Game_and_Season__Info/2011_Assets/Kit_of_Parts/How_to_Configure_Your_Radio_Rev_A.pdf"
              textContent="Radio Configuration Guide (PDF)"
              icon="/icons/link.png"
              outline
            />
            <SizedBox height={30} />

            <h3>Development Environment Setup</h3>

            <TextParagraph text="For optimal robot programming experience, we recommend installing the following software tools:" />
            <DecoratedList
              items={[
                {
                  title: "WPILib Development Environment",
                  description:
                    "The official development environment for FRC programming, which includes Visual Studio Code with FRC extensions.",
                },
                {
                  title: "FRC Game Tools",
                  description: "Includes the Driver Station software and utilities for interacting with your robot.",
                },
                {
                  title: "FRC Radio Configuration Utility",
                  description: "Used for configuring your robot's radio for competition and practice.",
                },
                {
                  title: "CTRE Phoenix Framework",
                  description: "Required if your robot uses Talon SRX, Victor SPX, or other CTRE motor controllers.",
                },
                {
                  title: "REV Hardware Client",
                  description: "Required if your robot uses REV Robotics hardware like the SPARK MAX motor controller.",
                },
              ]}
            />
            <SizedBox height={20} />

            <TextParagraph text="Version Control Best Practices" primary bold />
            <TextParagraph text="It's essential to use version control for your robot code. We recommend using Git and GitHub to track changes to your code and collaborate with team members." />
            <DecoratedList
              items={[
                {
                  title: "Create a repository for each season",
                  description: "Start fresh each year with a new repository for that season's robot code.",
                },
                {
                  title: "Use branches for features",
                  description:
                    "Develop new features in separate branches and merge them when they're complete and tested.",
                },
                {
                  title: "Commit frequently with clear messages",
                  description: "Make small, focused commits with descriptive messages about what was changed and why.",
                },
                {
                  title: "Review code before merging",
                  description: "Have another programmer review your code before merging it into the main branch.",
                },
              ]}
            />
            <SizedBox height={20} />

            <TextParagraph
              text="Remember to always back up your code before making significant changes, and keep an eye on battery voltage during testing!"
              centered
              emphasis
            />
            <SizedBox height={40} />
          </>
        }
      />
    </>
  );
}
