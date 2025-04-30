# Website Editing Guide

This guide is designed to help you edit and maintain the Robotomies Team 1277 website content without requiring programming knowledge. It covers how to modify existing pages, add new content, upload images, and update navigation components.

## Table of Contents

1. [Understanding the Website Structure](#understanding-the-website-structure)
2. [Working with Content Sections](#working-with-content-sections)
3. [Adding and Modifying Pages](#adding-and-modifying-pages)
4. [Adding Images](#adding-images)
5. [Updating the Navigation Bar](#updating-the-navigation-bar)
6. [Common Components Reference](#common-components-reference)

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
      <p>Team 1277: The Robotomies is the FIRST Robotics Competition (FRC) Team out of Groton, MA.</p>

      <em>FIRST - For the Inspiration and Recognition of Science and Technology.</em>

      <img src="/pictures/2025/2025_WPI-Team-Picture.jpg" alt="Team at WPI" />
      <figcaption>Team picture taken after the 2025 WPI Competition.</figcaption>
    </>
  }
/>
```

### Creating Text Content

Text content can be created using standard HTML tags:

- `<h3>` - For smaller headings within a content section
- `<p>` - For paragraphs
- `<em>` - For emphasized text (highlighted, e.g. quotes)
- `<b>` - For bold text

### Creating Lists

For creating bullet points or lists:

```tsx
<ul>
  <li>
    <h3>List Item Title</h3>
    <p>Description text for the list item</p>
  </li>
  <li>
    <h3>Another Item</h3>
    <p>More description text</p>
  </li>
</ul>
```

### Adding Links

To create a link to another website or page:

```tsx
<a href="https://example.com">Link text here</a>
```

For internal links to other pages on the site:

```tsx
<a href="/support">Support Our Team</a>
```

### Adding Images

To add an image to a content section:

```tsx
<img src="/pictures/2025/image-name.jpg" alt="Description of image" />
<figcaption>Caption text for the image</figcaption>
```

### Adding Space Between Elements

To add vertical space between elements:

```tsx
<SizedBox height={40} />
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

export default function PageName() {
  return (
    <div className="page-container">
      <Navbar />
      <BannerImage imagePath={"/pictures/BannerImage.png"} />
      {/* Content Sections Go Here */}
      <ContentSection title={"Section Title"} subtitle={"Optional Subtitle"} content={<></>} />
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
            <p>Description of the 2026 game and challenge.</p>
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
<img src="/pictures/2025/2025_WPI-Competition.jpg" alt="WPI Competition" />
```

### Using Photo Grids

For displaying multiple images in a grid:

```tsx
<PhotoGrid imagePaths={["/pictures/2025/2025_Mentors-Group-Picture.jpg", "/pictures/2025/2025_WPI-Team-Picture.jpg"]} />
```

### Adding Sponsor Logos

1. Add sponsor logo images to the `public/sponsors/` directory
2. Use the `SponsorGrid` component to display them:

```tsx
<SponsorGrid
  imagePaths={["/sponsors/sponsor1-logo.webp", "/sponsors/sponsor2-logo.webp", "/sponsors/sponsor3-logo.webp"]}
/>
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

### SizedBox

For adding vertical or horizontal spacing:

```tsx
<SizedBox height={40} /> // Adds 40 pixels of vertical space
<SizedBox width={20} />  // Adds 20 pixels of horizontal space
```
