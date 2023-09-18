import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    waves,
    legup,
    astralchart,
    flighttracker,
    stepmania,
    threejs,
    unity,
    unrealengine,
    python,
    csharp,
    cpp,
    java,
    dassaultsystemes,
    junilearning,
    glacialglobal,
    cmu,
    beru,
    hentie,
    sungjinwoo,
    ivanho,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "work",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Game Developer",
      icon: creator,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Procrastination Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Unreal Engine",
      icon: unrealengine,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    }
  ];
  
  const experiences = [
    {
      title: "Quality Engineer Intern",
      company_name: "Dassault Systemes",
      icon: dassaultsystemes,
      iconBg: "#014a73",
      date: "Sep 2022 - Dec 2022",
      points: [
        "Designed and implemented new methods to test the performance and reliability of " +
        "new and existing features for existing software.",

        "Revised existing testing programs to support multithreading, allowing for tests " +
        "to run in parallel and greatly reducing the wait times for tests to run on " +
        "extremely large databases.",
      ],
    },
    {
      title: "Programming Instructor",
      company_name: "Juni Learning",
      icon: junilearning,
      iconBg: "#292562",
      date: "Jun 2021 - Aug 2022",
      points: [
        "Held virtual 1-on-1 lessons with five high school students on a weekly basis on " + 
        "various programming languages such as C#, C++, and Scratch.",

        "Taught courses on coding fundamentals such as formatting code, data structures, " + 
        "writing algorithms, and object-oriented programming.",

        "Assigned and graded supplemental programming projects for students.",
      ],
    },
    {
      title: "Team Manager and Head Moderator",
      company_name: "Glacial Global",
      icon: glacialglobal,
      iconBg: "#000120",
      date: "Mar 2020 - Jun 2021",
      points: [
        "Managed multiple teams by holding routine group and 1-on-1 meetings with team " +
        "members and staff.",

        "Facilitated and simplified events scheduling and information sharing among " +
        "multiple teams.",

        "Moderated community and private messaging group chats, posting routine reminders " +
        "of upcoming events and practice sessions, and integrating server bots to " +
        "automatically filter out spam or inappropriate postings.",
      ],
    },
    {
      title: "Programmer and 2D/3D Artist",
      company_name: "NHSGA @ Carnegie Mellon Pre-College",
      icon: cmu,
      iconBg: "#c41230",
      date: "Jun 2019 - Aug 2019",
      points: [
        "Studied various game development fundamentals such as game programming, 2D/3D " +
        "art and animation, storytelling, sound design, and game design with graduate " +
        "students and professors of respective fields.",

        "Worked in teams to pitch, build, and present two game projects: one based on a " +
        "remastered retro game, and another based on an original idea.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Flight Tracker",
      description:
        "A basic yet intuitive interface to visualize publicly available flight " +
        "information. Users can filter for specific flights and view past and " +
        "upcoming flights.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        }
      ],
      image: flighttracker,
      source_code_link: "https://github.com/HighFlyersTeam/flight-tracker",
    },
    {
      name: "Waves",
      description:
        "A tactical naval ship simulator set on an alien ocean planet. Control a warship " +
        "just like how a real-world captain would, and fight against other ships with " +
        "existing and futuristic naval weapons.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "csharp",
          color: "green-text-gradient",
        },
      ],
      image: waves,
      source_code_link: "https://bennywoolbert.itch.io/waves",
    },
    {
      name: "Legup",
      description:
        "An open-source software where students can create, edit, solve, and share logic " +
        "puzzles. Often used as a tool for learning the basic principles of logical " +
        "reasoning in various logic courses at Rensselaer Polytechnic Institute.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "gradle",
          color: "green-text-gradient",
        },
      ],
      image: legup,
      source_code_link: "https://github.com/Bram-Hub/LEGUP",
    },
    {
      name: "Astral Chart",
      description:
        "An open-world space combat adventure with customizable weapons, multiple " +
        "storylines, and a vast solar system.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "csharp",
          color: "green-text-gradient",
        },
      ],
      image: astralchart,
      source_code_link: "https://corppet.itch.io/astral-chart",
    },
    {
      name: "Stepmania Agents",
      description:
        "A machine learning project focused on training agents to play StepMania, " + 
        "an open-source rhythm game where players need to make keyboard inputs in " + 
        "a specific sequence.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
      ],
      image: stepmania,
      source_code_link: "https://github.com/Corppet/stepmania-agents",
    }
  ];

  const testimonials = [
    {
      testimonial:
        "I will follow my liege no matter where he goes. For the future of the young monarch.",
      name: "Beru",
      designation: "Ant General",
      company: "the Shadow Army",
      image: beru,
    },
    {
      testimonial:
        "Bawk bawk baaawk. Bawk bawk. Baaawk bawk bawk. Bawk.",
      name: "Hen Tie",
      designation: "Man",
      company: "Culture",
      image: hentie,
    },
    {
      testimonial:
        "¯\\_(ツ)_/¯",
      name: "Jin-Woo Sung",
      designation: "S-Rank Hunter",
      company: "the Fictional World",
      image: sungjinwoo,
    },
    {
      testimonial:
        "He knows how to center a div. I can vouch for his skills.",
      name: "Ivan Ho",
      designation: "Amateur",
      company: "the Real World",
      image: ivanho,
    },
  ];
  
  export { services, technologies, experiences, projects, testimonials };