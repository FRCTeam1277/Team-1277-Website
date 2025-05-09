# Robotomies Website Quick Guide

This guide helps you edit the Team 1277 website without programming knowledge. It covers how to modify pages, add content, upload images, and update navigation.

Visit the `/testing` page to see all the possible components you can add to the website in use.
This has the best example code to modify for your needs.

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

Visit the `/testing` page to see all the possible components you can add to the website in use.

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

## HighlightSection

This component wraps content in a highlighted container to draw attention to important information.

```tsx
// Example usage with a text component
<HighlightSection content={<TextParagraph text="This is an important highlight!" />} />
```

**Props:**

- content (JSX.Element, required): The content to display within the highlighted section.

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

### PasswordProtectedContent

Use this component to create sections that require a password to access. This provides client-side protection for content that should have limited access.

It is good to cycle the passwords regularly.

```tsx
<PasswordProtectedContent
  contentId="team-strategy"
  passwordHash="sha256:a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
  title="Team Strategy"
  description="Enter the team password to access our strategy documents."
>
  {/* Protected content goes here */}
  <TextParagraph text="This is protected content that only appears after entering the correct password." />
  <SectionImage imagePath="/pictures/protected-image.jpg" />
</PasswordProtectedContent>
```

**Props:**

- `contentId`: String - Unique identifier for this protected content section (required)
- `passwordHash`: String - SHA-256 hash of the password in format "sha256:hash" (required)
- `title`: String - Title to display on the password form (default: "Protected Content")
- `description`: String - Description text on the password form (default: "This content requires a password to view.")
- `authValidityMs`: Number - How long the authentication remains valid in milliseconds (default: 3600000, or 1 hour)
- `errorMessage`: String - Message to display when incorrect password is entered (default: "Incorrect password. Please try again.")
- `children`: ReactNode - Content to be protected (required)

**Security Considerations:**

- This provides only client-side protection suitable for non-critical information
- Password verification happens in the browser and can potentially be bypassed
- For truly sensitive information, use a server-side authentication system
- Never store sensitive information in the protected content
- It is good to cycle the passwords regularly.

**Generating Password Hashes:**

To generate a secure hash for the `passwordHash` property:

1. Visit the admin hash generator at `/admin/hash`
2. Enter your desired password and click "Generate Hash"
3. Copy the "Formatted for Component" hash value
4. Paste into your component where indicated

Alternatively, you can use the command line tool:

```
cd utils
node generate-password-hash.js your-password
```

You can also use a command:

```
cd utils
PasswordHash
```

## Button

A customizable button component with various style options:

```tsx
<Button variant="primary" style="solid" onClick={handleClick} type="button">
  Click Me
</Button>
```

**Props:**

- `variant`: ButtonVariant - Color style: "primary" | "secondary" | "positive" | "warning" | "negative" (default: "primary")
- `style`: ButtonStyle - Visual style: "solid" | "translucent" (default: "solid")
- `type`: React.ButtonHTMLAttributes["type"] - HTML button type (default: "button")
- `onClick`: Function - Click handler
- `className`: String - Additional CSS classes
- `disabled`: Boolean - Disables the button when true
- `children`: ReactNode - Button content

## Other Utility Components

### CopyOutputBox

Displays output text with a copy button for easy copying to clipboard:

```tsx
<CopyOutputBox label="API Key:" text="abc123xyz456" />
```

**Props:**

- `text`: String - The text to display and copy (required)
- `label`: String - Label for the output box (required)
- `copiedMessage`: String - Text shown when copied successfully (default: "Copied to clipboard!")

### CodeView

Displays formatted code with syntax highlighting and copy functionality:

```tsx
<CodeView code={`function example() {\n  return "Hello world!";\n}`} title="Example Function" language="js" />
```

**Props:**

- `code`: String - The code to display (required)
- `title`: String - Optional title for the code block
- `allowCopy`: Boolean - Whether to show copy button (default: true)
- `language`: String - Language for syntax highlighting (e.g., "js", "tsx")
- `copiedMessage`: String - Text shown when copied successfully (default: "Copied to clipboard!")
