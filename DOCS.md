# Website Editing Guide

This guide is designed to help you edit and maintain the Robotomies Team 1277 website content without requiring programming knowledge. It covers how to modify existing pages, add new content, upload images, and update navigation components.

## Table of Contents

1. [Understanding the Website Structure](#understanding-the-website-structure)
2. [Working with Content Sections](#working-with-content-sections)
3. [Using Text Components](#using-text-components)
4. [Creating Lists](#creating-lists)
5. [Adding Images](#adding-images)
6. [Adding and Modifying Pages](#adding-and-modifying-pages)
7. [Updating the Navigation Bar](#updating-the-navigation-bar)
8. [Common Components Reference](#common-components-reference)

## Understanding the Website Structure

The website is built using React and TypeScript, but you don't need to understand these technologies to edit content. Here's a quick overview of the important folders:

- `src/pages/`: Contains all the website pages
- `public/pictures/`: Stores all images organized by year folders
- `public/sponsors/`: Contains sponsor logos
- `src/components/`: Contains reusable UI components

## Working with Content Sections

### The ContentSection Component

Most content on the website is created using the `ContentSection` component, which provides a consistent layout for text, images, and other content.

#### Example of a ContentSection:

```tsx
<ContentSection
  title={"About Our Team"}
  subtitle={"Celebrating 20 years of competition!"}
  content={
    <>
      <TextParagraph text="Team 1277: The Robotomies is the FIRST Robotics Competition (FRC) Team out of Groton, MA." />

      <TextParagraph text="FIRST - For the Inspiration and Recognition of Science and Technology." emphasis={true} />

      <SectionImage
        imagePath="/pictures/2025/2025_WPI-Team-Picture.jpg"
        caption="Team picture taken after the 2025 WPI Competition."
      />
    </>
  }
/>
```

## Using Text Components

### TextParagraph Component

The `TextParagraph` component is a powerful way to create formatted text with minimal effort. It supports styling options and can automatically convert markdown-style links into clickable links.

#### Basic Usage:

```tsx
<TextParagraph text="This is a regular paragraph of text." />
```

#### Styling Options:

```tsx
// Bold text
<TextParagraph text="This text will be bold." bold={true} />

// Primary color (team color)
<TextParagraph text="This text will use the primary color." primary={true} />

// Centered text
<TextParagraph text="This text will be centered." centered={true} />

// Emphasis (styled quote)
<TextParagraph text="This is an emphasized quote." emphasis={true} />

// Combinations are possible
<TextParagraph text="Bold and centered text." bold={true} centered={true} />
```

#### Adding Links in Text:

The TextParagraph component can automatically convert markdown-style links into clickable links. Use square brackets for the link text and parentheses for the URL:

```tsx
<TextParagraph text="Visit our [team website](https://www.robotomies.com) for more information." />
```

This will render as: Visit our <a href="https://www.robotomies.com">team website</a> for more information.

Multiple links in the same paragraph also work:

```tsx
<TextParagraph text="Check out [FIRST Robotics](https://www.firstinspires.org) or view our [team photos](https://photos.robotomies.com)." />
```

## Creating Lists

### DecoratedList Component

The `DecoratedList` component creates visually appealing lists with titles and descriptions for each item.

#### Basic Usage:

```tsx
<DecoratedList
  items={[
    {
      title: "Bring More Kids into STEM",
      description: "By supporting the team, your company brings real world STEM experience to kids in the community",
    },
    {
      title: "Company Exposure",
      description:
        "Your company will be recognized on our website, social media, and at competitions by thousands of people.",
    },
  ]}
/>
```

Each list item requires a `title` and a `description`. The component automatically applies the proper styling to match the team's design.

## Adding Images

### SectionImage Component

The `SectionImage` component makes it easy to add images with optional captions to your content sections.

#### Basic Usage:

```tsx
<SectionImage
  imagePath="/pictures/2025/2025_WPI-Team-Picture.jpg"
  caption="Team picture taken after the 2025 WPI Competition."
/>
```

#### Without a Caption:

```tsx
<SectionImage imagePath="/pictures/2025/2025_Robot-Low-Perspective.jpg" />
```

#### With Alt Text for Accessibility:

```tsx
<SectionImage
  imagePath="/pictures/2025/2025_WPI-Robot.png"
  caption="Our 2025 competition robot"
  altText="Close-up of robot arm mechanism"
/>
```

### PhotoGrid

For displaying multiple images in a grid layout:

```tsx
<PhotoGrid imagePaths={["/pictures/2025/image1.jpg", "/pictures/2025/image2.jpg"]} />
```

### SponsorGrid

For displaying sponsor logos:

```tsx
<SponsorGrid imagePaths={["/sponsors/sponsor1-logo.webp", "/sponsors/sponsor2-logo.webp"]} />
```

## Adding and Modifying Pages

### Page Structure

Each page in the website follows a similar structure:

```tsx
import BannerImage from "../components/BannerImage";
import ContentSection from "../components/content/ContentSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SizedBox from "../components/utils/SizedBox";
import TextParagraph from "../components/content/TextParagraph";
import DecoratedList from "../components/content/DecoratedList";
import SectionImage from "../components/content/SectionImage";

export default function PageName() {
  return (
    <div className="page-container">
      <Navbar />
      <BannerImage imagePath={"/pictures/BannerImage.png"} />
      {/* Content Sections Go Here */}
      <ContentSection
        title={"Section Title"}
        subtitle={"Optional Subtitle"}
        content={
          <>
            <TextParagraph text="Your content here" />
            <SectionImage imagePath="/pictures/2025/image.jpg" caption="Caption text" />
          </>
        }
      />
      <Footer />
    </div>
  );
}
```

### Adding a New Page

1. Create a new file in the `src/pages/` directory with a `.tsx` extension (e.g., `NewPage.tsx`)
2. Copy the structure from an existing page like `HomePage.tsx`
3. Modify the content sections as needed
4. Add the page to the navigation (see "Updating Routes" below)

### Adding a New Season Page

For a new season page, create it in the `src/pages/seasons/` directory:

```tsx
// src/pages/seasons/Season2026.tsx
import BannerImage from "../../components/BannerImage";
import ContentSection from "../../components/content/ContentSection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SizedBox from "../../components/utils/SizedBox";
import TextParagraph from "../../components/content/TextParagraph";
import SectionImage from "../../components/content/SectionImage";

export default function Season2026Page() {
  return (
    <div className="page-container">
      <Navbar />
      <BannerImage imagePath={"/pictures/2026/2026_Banner.png"} />
      <ContentSection
        title={"2026 Competition Season"}
        subtitle={"Game Name Here"}
        content={
          <>
            <TextParagraph text="Description of the 2026 game and challenge." />
            <SectionImage imagePath="/pictures/2026/2026_Game_Field.jpg" caption="The 2026 competition field" />
            <SizedBox height={40} />
          </>
        }
      />
      <Footer />
    </div>
  );
}
```

### Updating Routes

After creating a new page, you need to update the routes in `src/main.tsx` to make the page accessible:

1. Add an import for your new page at the top of `main.tsx`:
   ```tsx
   import NewPage from "./pages/NewPage";
   ```
2. Add a new route in the `Routes` section:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```

For a season page:

```tsx
<Route path="/seasons/2026" element={<Season2026Page />} />
```

## Adding Images

### Image File Structure

Images are stored in the `public/pictures/` directory, organized by year:

```
public/
  pictures/
    2023/
      2023_image-name.jpg
    2024/
      2024_image-name.jpg
    2025/
      2025_image-name.jpg
```

### Adding New Images

1. Name your image files with the year prefix (e.g., `2025_WPI-Competition.jpg`)
2. Place the image in the appropriate year folder
3. Reference the image in your content with the path `/pictures/YEAR/filename.jpg`

Example:

```tsx
<SectionImage imagePath="/pictures/2025/2025_WPI-Competition.jpg" caption="WPI Competition" />
```

## Updating the Navigation Bar

### Adding Navigation Links

To add a new link to the navigation bar, edit both the navbar and sidebar sections in `src/components/Navbar.tsx`:

1. Find the `<ul className="navbar__links">` section
2. Add a new list item:

   ```tsx
   <li>
     <Link to="/new-page" className={isActive("/new-page") ? "active" : ""}>
       New Page
     </Link>
   </li>
   ```

3. Also add it to the sidebar navigation (`<ul className="navbar__sidebar-links">`)

## Common Components Reference

### BannerImage

Used for the large banner at the top of pages:

```tsx
<BannerImage imagePath={"/pictures/2025/2025_Banner.png"} />
```

### ContentSection

For creating content blocks:

```tsx
<ContentSection
  title={"Title Goes Here"}
  subtitle={"Optional Subtitle"}
  centerText={true} // Optional, centers all text in the section
  content={<>{/* Content elements go here */}</>}
/>
```

### TextParagraph

For creating formatted text paragraphs:

```tsx
<TextParagraph
  text="Your text content here"
  bold={false} // Optional: makes text bold
  primary={false} // Optional: uses primary team color
  centered={false} // Optional: centers the text
  emphasis={false} // Optional: styles as a quote/emphasis
/>
```

### DecoratedList

For creating styled lists with titles and descriptions:

```tsx
<DecoratedList
  items={[
    { title: "First Item Title", description: "First item description" },
    { title: "Second Item Title", description: "Second item description" },
  ]}
/>
```

### SectionImage

For displaying images with optional captions:

```tsx
<SectionImage
  imagePath="/pictures/2025/image.jpg"
  caption="Optional caption text"
  altText="Optional alternative text for accessibility"
/>
```

### SizedBox

For adding vertical or horizontal spacing:

```tsx
<SizedBox height={40} /> // Adds 40 pixels of vertical space
<SizedBox width={20} />  // Adds 20 pixels of horizontal space
```
