# Website Editing Guide

This guide is designed to help you edit and maintain the Robotomies Team 1277 website content without requiring programming knowledge. It covers how to modify existing pages, add new content, upload images, and update navigation components.

## Table of Contents

1. [Understanding the Website Structure](#understanding-the-website-structure)
2. [Working with Content Sections](#working-with-content-sections)
3. [Using Text Components](#using-text-components)
4. [Creating Lists](#creating-lists)
5. [Adding Images](#adding-images)
6. [Adding and Modifying Pages](#adding-and-modifying-pages)
7. [Defining Routes](#defining-routes)
8. [Updating the Navigation Bar](#updating-the-navigation-bar)
9. [Common Components Reference](#common-components-reference)

## Understanding the Website Structure

The website is built using React and TypeScript, but you don't need to understand these technologies to edit content. Here's a quick overview of the important folders:

- `src/pages/`: Contains all the website pages
- `public/pictures/`: Stores all images organized by year folders
- `public/sponsors/`: Contains sponsor logos
- `src/components/`: Contains reusable UI components
- `src/routes/`: Contains route definitions that connect URLs to pages

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
4. Add the page to the routes configuration (see "Defining Routes" below)
5. Add the page to the navigation (see "Updating the Navigation Bar" below)

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

## Defining Routes

The website uses a centralized routing system that connects URLs to page components. This makes it easy to add new pages without modifying complex code.

### Understanding the Routes Configuration

Routes are defined in the `src/routes/routesConfig.tsx` file. Each route defines a URL path and which page component should be displayed for that path.

### Route Structure

Each route in the configuration follows this structure:

```tsx
{
  path: "/page-url",                // The URL path for this page
  element: <PageComponent />,       // The page component to display
  label: "Page Name",               // Optional: Descriptive name for the page
  description: "Page description"   // Optional: Description of the page content
}
```

### Adding a New Route

To add a new route after creating a page component:

1. Open `src/routes/routesConfig.tsx`
2. Import your new page component at the top of the file:
   ```tsx
   import NewPage from "../pages/NewPage";
   ```
3. Add a new route object to the `routes` array:
   ```tsx
   {
     path: "/new-page",
     element: <NewPage />,
     label: "New Page",
     description: "Description of what this page contains"
   }
   ```

> **Important**: Always add new routes **above** the catch-all 404 route (the one with path "\*").

### Example: Adding a 2026 Season Page

Here's an example of how to add a route for a new 2026 season page:

```tsx
// 1. First add the import at the top of the file
import Season2026Page from "../pages/seasons/Season2026";

// 2. Then add the route to the routes array
export const routes: RouteConfig[] = [
  // ... existing routes ...
  {
    path: "/seasons/2026",
    element: <Season2026Page />,
    label: "2026 Season",
    description: "Details about the 2026 competition season",
  },
  // Add new routes above this line

  // This must be the last route
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
```

## Updating the Navigation Bar

### Using the Navigation Configuration File

The website now uses a dynamic navigation system that reads from a JSON file. This allows you to modify the navigation without editing any code.

To edit the navigation menu:

1. Open the file `public/navConfig.json`
2. Modify the JSON structure to add, remove, or change navigation items
3. Save the file and refresh the website to see your changes

#### Navigation Item Structure

Each navigation item in the JSON file follows this structure:

```json
{
  "linkName": "Display Name", // The text shown in the navigation menu
  "path": "/page-url", // The URL the link points to
  "linkIcon": "/icons/icon.png" // Optional: path to an icon image
}
```

#### Adding Dropdown Menus

For dropdown menus, add a `subPages` array to any navigation item:

```json
{
  "linkName": "Past Seasons",
  "path": "/seasons",
  "linkIcon": "/icons/season.png",
  "subPages": [
    {
      "linkName": "2024: Crescendo",
      "path": "/seasons/2024"
    },
    {
      "linkName": "2023: Charged Up",
      "path": "/seasons/2023"
    }
  ]
}
```

#### Example Navigation Configuration

Here's a complete example of the `navConfig.json` file:

```json
{
  "navItems": [
    {
      "linkName": "Home",
      "path": "/",
      "linkIcon": "/icons/home.png"
    },
    {
      "linkName": "2025: Dive",
      "path": "/seasons/2025"
    },
    {
      "linkName": "Past Seasons",
      "path": "/seasons",
      "linkIcon": "/icons/collapse.png",
      "subPages": [
        {
          "linkName": "2024: Crescendo",
          "path": "/seasons/2024"
        },
        {
          "linkName": "2023: Charged Up",
          "path": "/seasons/2023"
        }
      ]
    },
    {
      "linkName": "Members",
      "path": "/"
    },
    {
      "linkName": "Shop",
      "path": "/"
    },
    {
      "linkName": "Support",
      "path": "/support"
    }
  ]
}
```

### Adding Icons to Navigation Items

To add an icon to a navigation item:

1. Place your icon image file in the `public/icons/` directory
2. Add the `linkIcon` property to the navigation item in `navConfig.json` with the path to the icon:

```json
{
  "linkName": "Home",
  "path": "/",
  "linkIcon": "/icons/home.png"
}
```

Icons will appear next to the link text in both the main navigation bar and sidebar.

### Adding New Pages to Navigation

After creating a new page and adding its route (see "Defining Routes"), you need to add it to the navigation:

1. Open `public/navConfig.json`
2. Add a new item to the `navItems` array:

```json
{
  "linkName": "New Page Name",
  "path": "/new-page"
}
```

You can also add it as a submenu item in an existing dropdown:

```json
{
  "linkName": "Parent Menu",
  "path": "/parent",
  "subPages": [
    // existing subpages...
    {
      "linkName": "New Subpage",
      "path": "/parent/new-subpage"
    }
  ]
}
```

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
