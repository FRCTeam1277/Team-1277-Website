# Development Setup

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
