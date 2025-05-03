# Robotomies Website Quick Guide

This guide helps you edit the Team 1277 website without programming knowledge. It covers how to modify pages, add content, upload images, and update navigation.

## Table of Contents

1. [Website Structure](#website-structure)
2. [Components](#components)
3. [Building Content Sections](#building-content-sections)
4. [Adding Pages](#adding-pages)
5. [Creating Routes](#creating-routes)
6. [Updating Navigation](#updating-navigation)

## Website Structure

The website uses React and TypeScript, but you don't need to understand these technologies. Important folders:

- `src/pages/`: Website pages
- `public/pictures/`: Images (organized by year)
- `public/sponsors/`: Sponsor logos
- `src/components/`: UI components
- `src/routes/`: URL to page connections

## Get Started

Please refer to the [SETUP.md](SETUP.md) file for setup instructions to get started modifying and testing this website.

## Components

This section covers all the components you can use to build pages.

### TextParagraph

Use this for all text content. It supports styling options and automatic link conversion.

```tsx
// Basic text
<TextParagraph text="This is a regular paragraph of text." />

// Styling options
<TextParagraph text="Bold text example" bold={true} />
<TextParagraph text="Primary color text" primary={true} />
<TextParagraph text="This text will be centered" centered={true} />
<TextParagraph text="This is an emphasized quote" emphasis={true} />

// Automatically converts links
<TextParagraph text="Visit our [team website](https://www.robotomies.com) for more information." />
```

**Props:**

- `text`: String - The text content to display (required)
- `primary`: Boolean - Whether to use primary color styling
- `bold`: Boolean - Whether to make the text bold
- `centered`: Boolean - Whether to center the text
- `emphasis`: Boolean - Whether to use emphasis styling (highlighted in primary color)

### SectionImage

Use this component to add individual images with optional captions:

```tsx
<SectionImage
  imagePath="/pictures/2025/2025_Team-Picture.jpg"
  caption="Team picture from the 2025 WPI Competition"
/>

// Without caption
<SectionImage imagePath="/pictures/2025/2025_Robot.jpg" />

// With alt text for accessibility
<SectionImage
  imagePath="/pictures/2025/2025_Robot.png"
  caption="Our 2025 competition robot"
  altText="Close-up of robot arm mechanism"
/>

// With custom width
<SectionImage
  imagePath="/pictures/2025/2025_Robot.jpg"
  widthPercent={50}
/>
```

**Props:**

- `imagePath`: String - Path to the image file (required)
- `caption`: String - Optional caption text to display under the image
- `altText`: String - Optional alt text for accessibility
- `widthPercent`: Number or String - Optional width percentage or CSS value
- `heightPercent`: Number or String - Optional height percentage or CSS value
- `disableClick`: Boolean - Optional flag to disable opening image in new tab on click

### PhotoGrid

Display multiple images in a grid layout:

```tsx
<PhotoGrid imagePaths={["/pictures/2025/image1.jpg", "/pictures/2025/image2.jpg"]} />
```

**Props:**

- `imagePaths`: String[] - Array of image paths to display (required)

### SponsorGrid

Display sponsor logos in a grid layout. Each sponsor is represented as an object with an image path and an optional link to the sponsor's page.

```tsx
<SponsorGrid
  items={[
    { imagePath: "/sponsors/sponsor1-logo.webp", link: "https://sponsor1.com" },
    { imagePath: "/sponsors/sponsor2-logo.webp" },
  ]}
/>
```

**Props:**

- items: SponsorGridItem[] - An array of sponsor items (required)

SponsorGridItem object properties:

- imagePath: string - Path to the sponsor logo image (required)
- link?: string - Optional URL; if provided, clicking the logo opens the link in a new tab

### DecoratedList

Use this component to create attractive lists with titles and descriptions:

```tsx
<DecoratedList
  items={[
    {
      title: "Bring More Kids into STEM",
      description: "Your support brings real world STEM experience to kids in the community",
    },
    {
      title: "Company Exposure",
      description: "Recognition on our website, social media, and at competitions",
    },
  ]}
/>
```

**Props:**

- `items`: Array of objects with:
  - `title`: String - Title of the list item (required)
  - `description`: String - Description of the list item (required)

### ContentSection

This component provides a consistent layout for content sections:

```tsx
<ContentSection
  title={"Section Title"}
  subtitle={"Optional Subtitle"}
  preheading={"Optional Preheading"}
  centerText={false}
  content={<>{/* Content elements */}</>}
/>
```

**Props:**

- `title`: String - The section title (required)
- `subtitle`: String - Optional subtitle
- `preheading`: String - Optional text to display above the title
- `centerText`: Boolean - Whether to center all text in the section
- `content`: JSX Element - The content to display in the section (required)

### BannerImage

Display a full-width banner image:

```tsx
<BannerImage imagePath={"/pictures/BannerImage.png"} />
```

**Props:**

- `imagePath`: String - Path to the banner image (required)

### SizedBox

Add space between elements:

```tsx
<SizedBox height={40} />  // Adds vertical space
<SizedBox width={20} />   // Adds horizontal space
```

**Props:**

- `height`: Number - Height in pixels
- `width`: Number - Width in pixels

### ImageCarousel

Use this component to create a slideshow of images with navigation arrows, captions, and indicators.

```tsx
<ImageCarousel
  images={[
    {
      path: "/pictures/2025/2025_Robot-Near-Reef.jpg",
      caption: "Robot positioned near the reef during competition",
    },
    {
      path: "/pictures/2025/2025_Robot-Low-Perspective.jpg",
      caption: "Low angle perspective of our robot's systems",
    },
  ]}
  autoScroll={true}
  autoScrollTime={5000}
/>
```

**Props:**

- `images`: Array of image objects (required):
  - `path`: String - Path to the image file (required)
  - `caption`: String - Optional caption text to display under the image
  - `alt`: String - Optional alt text for accessibility
- `autoScroll`: Boolean - Whether to automatically scroll through images
- `autoScrollTime`: Number - Time in milliseconds between image transitions (default: 3000)
- `className`: String - Optional CSS class to apply to the carousel

**Features:**

- Navigation arrows on both sides to manually navigate between images
- Image counter showing current position (e.g., "2 / 5")
- Optional captions with a "link" button to open the image in a new tab
- Indicator dots showing which image is currently displayed
- Autoscroll capability that stops when manual navigation is used
- Maintains aspect ratio and properly fits images with black bars if needed

## Building Content Sections

Most content uses the `ContentSection` component, which provides consistent layout.

```tsx
<ContentSection
  title={"About Our Team"}
  subtitle={"Celebrating 20 years of competition!"}
  content={
    <>
      <TextParagraph text="Team 1277: The Robotomies is the FIRST Robotics Competition (FRC) Team out of Groton, MA." />

      <SectionImage imagePath="/pictures/2025/2025_Team-Picture.jpg" caption="Team picture from WPI" />

      <DecoratedList
        items={
          [
            /* list items here */
          ]
        }
      />
    </>
  }
/>
```

## Adding Pages

### Page Structure

Each page follows this structure:

```tsx
import BannerImage from "../components/BannerImage";
import ContentSection from "../components/content/ContentSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TextParagraph from "../components/content/TextParagraph";
// Other imports as needed

export default function PageName() {
  return (
    <>
      <Navbar />
      <BannerImage imagePath={"/pictures/BannerImage.png"} />

      {/* Content Sections */}
      <ContentSection
        title={"Section Title"}
        content={
          <>
            <TextParagraph text="Your content here" />
            {/* More content components */}
          </>
        }
      />

      <Footer />
    </>
  );
}
```

### Creating A New Page

1. Create a new file in `src/pages/` with a `.tsx` extension (e.g., `NewPage.tsx`)
2. Copy the structure from an existing page like `HomePage.tsx`
3. Modify the content sections as needed
4. Add the page to routes configuration (see next section)
5. Add the page to navigation (see "Updating Navigation")

### Season Pages

Create season pages in `src/pages/seasons/` directory (e.g., `Season2026.tsx`)

## Creating Routes

Routes connect URLs to pages in the `src/routes/routesConfig.tsx` file.

### Adding a New Route

1. Import your new page at the top of the file:

   ```tsx
   import NewPage from "../pages/NewPage";
   ```

2. Add a route to the `routes` array:
   ```tsx
   {
     path: "/new-page",
     element: <NewPage />,
     label: "New Page",
     description: "Description of the page"
   }
   ```

**Important**: Always add new routes **above** the catch-all 404 route (path "\*").

## Updating Navigation

The navigation menu is defined in `public/navConfig.json`.

### Basic Navigation Items

```json
{
  "navItems": [
    {
      "linkName": "Home",
      "path": "/",
      "linkIcon": "/icons/home.png"
    },
    {
      "linkName": "Support",
      "path": "/support"
    }
  ]
}
```

### Dropdown Menus

For dropdown menus, add a `subPages` array:

```json
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
}
```

### Adding Icons

1. Place icon images in `public/icons/` directory
2. Add `"linkIcon": "/icons/icon-name.png"` to the navigation item
