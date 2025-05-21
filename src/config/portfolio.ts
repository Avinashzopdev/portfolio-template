export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PortfolioConfig {
  name: string;
  title: string;
  about: string;
  avatar: string;
  contact: {
    email: string;
    phone?: string;
    location: string;
  };
  socials: Social[];
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
}

export const portfolioData: PortfolioConfig = {
  name: "Himani",
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