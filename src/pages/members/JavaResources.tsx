import ContentSection from "../../components/content/ContentSection";
import TextParagraph from "../../components/content/TextParagraph";
import SizedBox from "../../components/utils/SizedBox";
import LinkButton from "../../components/content/LinkButton";
import DecoratedList from "../../components/content/DecoratedList";

export default function JavaResources() {
  return (
    <>
      <ContentSection
        preheading="Programming Fundamentals"
        title="Java Resources"
        subtitle="Learn Java for robotics programming"
        content={
          <>
            <TextParagraph text="Java is the primary programming language used for FIRST Robotics Competition. This page provides resources to help you learn Java, whether you're a complete beginner or looking to expand your knowledge." />

            <h3>Free Learning Resources</h3>

            <TextParagraph text="#1: Lynda.com / LinkedIn Learning" bold removeMargin />
            <TextParagraph text="Access comprehensive Java courses through Lynda.com (now LinkedIn Learning). You can get free access with many public library cards!" />
            <LinkButton
              invertIcon
              url="https://www.lynda.com/Java-training-tutorials/1077-0.html"
              textContent="Lynda Java Courses"
            />
            <SizedBox height={40} />

            <TextParagraph text="#2: Codecademy" bold removeMargin />
            <TextParagraph text="Codecademy offers interactive Java lessons with hands-on exercises. Some content is free, while more advanced material requires a premium membership." />
            <LinkButton
              invertIcon
              url="https://www.codecademy.com/learn/learn-java"
              textContent="Codecademy Java Course"
              outline
            />
            <SizedBox height={40} />

            <TextParagraph text="#3: Learn Java Pro (Mobile App)" bold removeMargin />
            <TextParagraph text="A mobile app for learning Java on the go. Available for iOS and similar apps exist for other platforms." />
            <LinkButton
              invertIcon
              url="https://itunes.apple.com/us/app/learn-java-pro/id961615044?mt=8"
              textContent="Learn Java Pro (iOS)"
              outline
            />
            <SizedBox height={40} />

            <TextParagraph text="#4: Java Programming for Kids, Parents, and Grandparents" bold removeMargin />
            <TextParagraph text="A beginner-friendly book for those with no programming experience. For robot programming focus, you can skip chapters 5-7, 9, and 11, as they cover topics not essential for our needs." />
            <LinkButton
              invertIcon
              url="http://myflex.org/books/java4kids/java4kids.htm"
              textContent="Java for Kids Guide"
            />
            <SizedBox height={40} />

            <TextParagraph text="#5: Introduction to Computer Science Using Java" bold removeMargin />
            <TextParagraph text="A more in-depth resource that's roughly equivalent to an AP Computer Science course. While more detailed than strictly necessary for robotics, it provides a thorough foundation in Java programming." />
            <LinkButton
              invertIcon
              url="http://myflex.org/books/java4kids/java4kids.htm"
              textContent="Intro to CS Using Java"
              outline
            />
            <SizedBox height={40} />

            <TextParagraph text="#6: The Java Tutorials (Oracle)" bold removeMargin />
            <TextParagraph text="Oracle's official Java tutorials. These are more technical and better suited for those with some programming experience, but they're an excellent reference." />
            <LinkButton invertIcon url="http://docs.oracle.com/javase/tutorial/" textContent="Oracle Java Tutorials" />
            <SizedBox height={40} />

            <TextParagraph text="#7: Learn X in Y minutes" bold removeMargin />
            <TextParagraph text="If you already know at least one other programming language, this quick reference covers everything you need to know about Java syntax in a concise format." />
            <LinkButton
              invertIcon
              url="http://learnxinyminutes.com/docs/java/"
              textContent="Learn X in Y minutes (Java)"
              outline
            />
            <SizedBox height={40} />

            <h3>Commercial Resources</h3>
            <TextParagraph text="While we encourage using free resources first, the following paid options are also available:" />

            <TextParagraph text="#1: Learn to Program in Java (Udemy)" bold removeMargin />
            <TextParagraph text="A structured online course with video lectures and exercises." />
            <LinkButton
              invertIcon
              url="https://www.udemy.com/learn-to-program-in-java/?dtcode=n5GR4Fz1JsDK"
              textContent="Udemy Java Course"
            />
            <SizedBox height={40} />

            <h3>Study Tips for Learning Java</h3>
            <DecoratedList
              items={[
                {
                  title: "Practice consistently",
                  description:
                    "Even just 15 minutes of coding practice per day can lead to significant improvement over time.",
                },
                {
                  title: "Build small projects",
                  description: "Try creating simple applications to reinforce what you're learning.",
                },
                {
                  title: "Collaborate with teammates",
                  description: "Pair programming and code reviews can help everyone learn faster.",
                },
                {
                  title: "Review robot code",
                  description: "Look at previous years' robot code to understand how concepts are applied in practice.",
                },
              ]}
            />
            <SizedBox height={40} />

            <TextParagraph
              text="Remember: Everyone starts as a beginner. Don't be afraid to ask questions and make mistakes as you learn!"
              centered
            />
            <SizedBox height={40} />
          </>
        }
      />
    </>
  );
}
