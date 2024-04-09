// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ChristinaMCanady', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Professional Statement and Pitch Video',
          description:
            'Professional Statement and Pitch Video',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/ChristinaMCanady/portfolio/blob/main/elevatorpitch2.mp4',
        },
        {
          title: 'Conduct A Security Audit',
          description:
            'Week 2',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/ChristinaMCanady/portfolio/blob/main/ePortfolio%20Security%20Audit.docx',
        },
        {
          title: 'Use the NIST Framework',
          description:
            'Respond to a Security Incident',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/ChristinaMCanady/portfolio/blob/main/Vulnerability%20assessment%20report%20(2).docx',
        },
        {
          title: 'Use Linux Commands',
          description:
            'to Manage File Permissions',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/ChristinaMCanady/portfolio/blob/main/Activity%20Linux.docx',
        },
           {
          title: 'Home Network & Heatmap Presentations',
          description:
            'Narrated PPT',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
           {
          title: 'Cybersecurity Analysis for Small Business Final Project Report and Video',
          description:
            'Narrated PPT',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Christina Canady',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'christinamarycanady',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'canadyc23@students.ecu.edu',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Tanglez Salon',
      position: 'Technical Support',
      from: 'May 2021',
      to: 'October 2023',
    },
  ],
  certifications: [
    {
      name: 'ISC(2)',
      body: 'Certified In Cybersecurity',
      year: 'March 2024',
      link: 'https://www.credly.com/earner/earned/badge/8612a2a0-859b-45b4-a49a-47556d899bf4'
    },
     {
      name: 'Cisco',
      body: 'Packet Tracer',
      year: 'Jan 2024',
      link: 'https://www.credly.com/earner/earned/badge/97fb3172-f041-4169-8ffd-fefc03dd1734'
    },
         {
      name: 'ISC2 Candidate',
      body: '',
      year: 'Jan 2024',
      link: 'https://www.credly.com/earner/earned/badge/fe8ad5b4-e6f9-4895-a0e4-06d4cfba9e07'
    },
      {
      name: 'AWS Cloud Certified',
      body: '',
      year: 'April 2024',
      link: 'https://www.credly.com/earner/earned/badge/fe8ad5b4-e6f9-4895-a0e4-06d4cfba9e07'
    },
  ],
  educations: [
    {
      institution: 'East Carolina University',
      degree: 'BSBA w/ concentration in MIS',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Cape Fear Community College',
      degree: 'Associates of Arts',
      from: '2020',
      to: '2022',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
