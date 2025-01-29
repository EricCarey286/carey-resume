export const jsImg = "/images/js-logo.png";
export const reactImg = "/images/react-logo.png";
export const leaderImg = "/images/leader.png";
export const volunteerImg = "/images/volunteer.png";

interface CoreConcept {
  image: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

export const CORE_CONCEPTS: CoreConcept[] = [
  {
    image: jsImg,
    title: "JavaScript / TypeScript",
    description:
      "4+ years of professional JavaScript programming building cloud based SaaS, RESTful APIs and responsive websites. I also have transitioned to a TypeScript focus over the last year",
  },
  {
    image: reactImg,
    title: "React",
    description:
      "This website is built with React. The project aims to highlight my skills and understanding of the React framework. For more information please explore the repo here: ",
    link: "https://github.com/ericcarey286/carey-resume", 
    linkText: "EWC Online Resume",
  },
  {
    image: leaderImg,
    title: "Leadership",
    description:
      "My strong organizational abilities and effective communication show through my project lead experience with Dell as well as my time as director of the STG Eternals Scholarship Golf Tournamnet",
  },
  {
    image: volunteerImg,
    title: "Volunteering",
    description:
      "I helped found and serve as Director of Digital Media for Friends of North Attleboro Parks, an organization helping rejuvenate and beautify community parks and monuments",
  },
];

interface Example {
  nickname: string;
  title: string;
  company: string;
  date: string;
  description: string;
  code: string;
}

export const EXAMPLES: Example[] = [
  {
    nickname: "devops",
    title: "Software Engineer",
    company: "Dell Technologies - DevSecOps",
    date: "Apr. 2024 - Present",
    description:
      "As a member of the DevSecOps team at Dell, I work on a vulnerability dashboard utitilized by internal application owners. I currently oversee development of 3rd party API integration with our MS SQL database loads. I also develop the interface with a React/NodeJS stack. I originally had a role assisting in the design of our dashboard using Figma. ",
    code: `
JavaScript / TypeScript
MS SQL
React
Node.JS
Python
Figma
Swagger
Documentation`,
  },
  {
    nickname: "dell",
    title: "Software Engineer",
    company: "Dell Technologies - ServiceNow",
    date: "Sep. 2021 - Apr. 2024",
    description:
      "As a Software Engineer with Dell, I work on a team responsible for the building on the ServiceNow platform for our Managed Services offerings. My main area of focus is the frontend Service Portal, building custom APIs and widgets using Angular and built in ServiceNow libraries. I also assist in the backend creating catalogs and server side scripts to control the flow of information for the ITSM staff. My second major responsibility is assisting the DevOps team's production support and on call schedule, aiding customers and other teams when using our platform.",
    code: `
RESTful APIs
JavaScript / TypeScript
Automated Testing
Agile
Kubernetes
Architecture
Documentation`,
  },
  {
    nickname: "wi",
    title: "Web Developer",
    company: "Worcester Interactive",
    date: "Jun. 2020 - Sep. 2021",
    description:
      "My main responsibility was utilizing WordPress and integrated plugins and custom JavaScript/CSS to design and develop stunning, mobile responsive websites for local businesses. Projects are designed using Adobe XD to create modern design. I then built off of those designs to implement custom functionality and innovative, interactive elements. I also performed monthly maintenance and site audits for updates, bug fixes and SEO improvements. As part of a larger team, I helped create and document custom in-house processes and onboarding procedures for new hires and clients.",
    code: `
JavaScript
HTML + CSS
WordPress
jQuery
PHP
Customer Service`,
  },
  {
    nickname: "emc",
    title: "Multimedia Specialist - Intern",
    company: "Dell EMC",
    date: "Jun. 2017 - Aug. 2017",
    description:
      "My main focus during my internship with Dell was to research and build a knowledge base around VR/AR technology. The aim of the research was to find ways to utilize the technology for educational purposes in the industrial and commercial infrastructure space. I also worked with one of the senior developers on interactive video software to create a more immersive video learning experience for Dell Employees. Technologies and languages used included Hapyak Interactive video, JavaScript, HTML, CSS and GreenSock GSAP standards",
    code: `
HTML + CSS
Documentation 
Research
Hapyak
GSAP`,
  },
];

