# Robotomies Website Quick Guide

This guide helps you edit the Team 1277 website without programming knowledge. It covers how to modify pages, add content, upload images, and update navigation.

## Table of Contents

1. [Website Structure](#website-structure)
2. [Adding Text](#adding-text)
3. [Adding Images](#adding-images)
4. [Creating Lists](#creating-lists)
5. [Building Content Sections](#building-content-sections)
6. [Adding Pages](#adding-pages)
7. [Creating Routes](#creating-routes)
8. [Updating Navigation](#updating-navigation)
9. [Component Reference](#component-reference)

## Website Structure

The website uses React and TypeScript, but you don't need to understand these technologies. Important folders:

- `src/pages/`: Website pages
- `public/pictures/`: Images (organized by year)
- `public/sponsors/`: Sponsor logos
- `src/components/`: UI components
- `src/routes/`: URL to page connections

## Get Started

To begin modifying the website, follow these steps:

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/FRCTeam1277/Team-1277-Website.git
cd Team-1277-Website
```

### Requirements

Ensure you have the following installed on your system:

1. **Node.js** (version 18 or higher) and **npm** (Node Package Manager)

- [Download Node.js](https://nodejs.org/)
- Verify installation:
  ```bash
  node -v
  npm -v
  ```

2. **Text Editor**: Use a code editor like [Visual Studio Code](https://code.visualstudio.com/).

3. **Git**: Ensure Git is installed for version control.

- [Download Git](https://git-scm.com/)
- Verify installation:
  ```bash
  git --version
  ```

### Install Dependencies

After cloning the repository, install the required dependencies in the project root folder:

```bash
npm install
```

### Run the Development Server

Start the development server to test the website locally:

```bash
npm run dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` to view the website.

### Build for Production

To create a production-ready build of the website:

```bash
npm run build
```

The build files will be generated in the `dist` directory.

### Preview the Build

To preview the production build locally:

```bash
npm run preview
```

### Deploying the Website

Ensure you have the correct permissions to push changes to the repository.

### Additional Notes

- The `package.json` file contains all the scripts and dependencies required for the project.
- For linting and code quality checks, you can run:
  ```bash
  npm run lint
  ```
- Use the `.gitignore` file to exclude unnecessary files from version control.
- For any issues, refer to the [README.md](./README.md) file or contact the repository maintainer.

## Adding Text

### TextParagraph Component

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

## Adding Images

### Individual Images

Use `SectionImage` to add images with optional captions:

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
```

### Multiple Images

For displaying multiple images in a grid:

```tsx
<PhotoGrid imagePaths={[
  "/pictures/2025/image1.jpg",
  "/pictures/2025/image2.jpg"
]} />

// For sponsor logos
<SponsorGrid imagePaths={[
  "/sponsors/sponsor1-logo.webp",
  "/sponsors/sponsor2-logo.webp"
]} />
```

## Creating Lists

Use `DecoratedList` to create attractive lists with titles and descriptions:

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

## Component Reference

### Text and Paragraphs

```tsx
<TextParagraph
  text="Your text here"
  bold={false} // Optional: makes text bold
  primary={false} // Optional: uses team color
  centered={false} // Optional: centers text
  emphasis={false} // Optional: styles as quote
/>
```

### Images

```tsx
<SectionImage
  imagePath="/pictures/image.jpg"
  caption="Optional caption"
  altText="Accessibility description"
/>

<PhotoGrid imagePaths={["/pictures/img1.jpg", "/pictures/img2.jpg"]} />
<SponsorGrid imagePaths={["/sponsors/logo1.webp", "/sponsors/logo2.webp"]} />
```

### Layout Elements

```tsx
<ContentSection
  title={"Section Title"}
  subtitle={"Optional Subtitle"}
  centerText={false}  // Optional: centers all text
  content={<>{/* Content elements */}</>}
/>

<BannerImage imagePath={"/pictures/Banner.png"} />

<SizedBox height={40} />  // Adds vertical space
<SizedBox width={20} />   // Adds horizontal space
```

### Lists

```tsx
<DecoratedList
  items={[
    {
      title: "Item Title",
      description: "Item description",
    },
    // More items...
  ]}
/>
```
