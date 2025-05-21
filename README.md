
# Portfolio Template

A personal portfolio template built with **React**, **Vite**, and **TypeScript**. This template is designed to help you quickly create and customize your portfolio with ease.

## Features

- **Vite** for fast builds and optimized performance.
- **React** for building interactive UI components.
- **TypeScript** for type safety and better development experience.
- Easy customization via configuration in `src/config/portfolio.ts`.
- Responsive layout for both mobile and desktop views.

## Prerequisites

Before setting up the project, make sure you have the following installed:

- [Node.js](https://nodejs.org) (version 14 or later)
- [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com) (for package management)

## Setup and Installation

Follow these steps to set up the portfolio template:

### 1. Clone the Repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/naveen-bandela-au2/portfolio-template.git
cd portfolio-template
```

### 2. Install Dependencies

Use npm or yarn to install all the project dependencies:

**Using npm:**

```bash
npm install
```

**Using yarn:**

```bash
yarn install
```

### 3. Configure Portfolio Settings

All the configuration for the portfolio template can be found in `src/config/portfolio.ts`. You can customize the following settings:

- `name`: Your name or brand.
- `bio`: A short description of who you are and what you do.
- `socialLinks`: Links to your social media profiles (e.g., LinkedIn, GitHub).
- `projects`: List of your portfolio projects, including title, description, and URL.

**Example:**

```ts
export const portfolioData = {
  name: "John Doe",
  title: "Full Stack Developer",
  about: "Passionate developer with expertise in building modern web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
  contact: {
    email: "john.doe@example.com",
    location: "San Francisco, CA",
  },
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com",
      icon: "Github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      icon: "Linkedin"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com",
      icon: "Twitter"
    }
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "PostgreSQL", "Redis"]
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "AWS", "Linux"]
    }
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop&q=80",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop&q=80",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ],
  experiences: [
    {
      company: "Tech Corp",
      position: "Senior Developer",
      duration: "2020 - Present",
      description: [
        "Led a team of 5 developers in building enterprise applications",
        "Improved application performance by 40%",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      company: "Startup Inc",
      position: "Full Stack Developer",
      duration: "2018 - 2020",
      description: [
        "Developed and maintained multiple client applications",
        "Implemented responsive designs and optimized for mobile",
        "Collaborated with design team to improve user experience"
      ]
    }
  ]
};
```

### 4. Start the Development Server

Run the following command to start the development server and preview the portfolio:

**Using npm:**

```bash
npm run dev
```

**Using yarn:**

```bash
yarn dev
```

The development server will start, and your portfolio will be available at `http://localhost:3000`.

## Build and Deploy

To build the portfolio for production:

**Using npm:**

```bash
npm run build
```

**Using yarn:**

```bash
yarn build
```

The build files will be created in the `dist/` directory. You can then deploy these files to your preferred hosting provider (e.g., GitHub Pages, Netlify, Vercel).

## Folder Structure

Here’s an overview of the folder structure:

```
portfolio-template/
├── public/              # Static assets like images, fonts, etc.
├── src/                 # Source code
│   ├── components/      # Reusable React components
│   ├── config/          # Portfolio configuration (src/config/portfolio.ts)
│   ├── pages/           # Main portfolio page
│   ├── styles/          # Global styles and theming
│   └── App.tsx          # Main React app entry point
├── dist/                # Production build output (generated after build)
├── package.json         # Project metadata and dependencies
└── tsconfig.json        # TypeScript configuration
```

## Customization

- You can easily change the theme colors, fonts, and layout in the `src/styles` directory.
- The projects section in the configuration file is dynamic, so you can add or remove projects by modifying the `projects` array in `src/config/portfolio.ts`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details..

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
