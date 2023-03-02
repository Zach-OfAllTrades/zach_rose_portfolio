import { ExperienceType, PositionType } from "./types";

export const CURRENTLY_WORKING_TEXT = "present";

export const revalizeSoftwareDev: PositionType = {
  id: "revalize-dev",
  employerId: "revalize",
  title: "Software Engineer",
  responsibilities: [
    "Write readable, reusable, clean code.",
    "Utilize object oriented design approach to reduce complexity and increase reusability in Java codebase.",
    "Create highly-responsive UI components by translating designs & mockups into high quality React code.",
    "Expand code coverage for automation of large scale CPQ software using Java, Spring, & JUnit.",
    "Automate everyday integration and deployment processes in AWS via Docker, Terraform & Linux.",
    "Participate in daily Agile stand-ups, meetings, retros, and feature demonstrations.",
  ],
  accomplishments: [
    "Appointed head of quality for new React UI project; implemented Cypress UI tests for project.",
    "Built first performance infrastructure. Maven project that Docker-ized Lighthouse performance tests; Node.js to analyze results.",
    "Implemented Prometheus TSDB to monitor application response to jMeter load tests - plugged into Grafana and developed Terraform configuration for deployment.",
  ],
  technologies: [
    "java",
    "spring",
    "react",
    "node",
    "json",
    "typescript",
    "docker",
    "aws",
    "graphql",
    "html",
    "css",
    "rest",
    "http",
    "cypress",
    "selenium",
    "terraform",
    "git",
    "junit",
    "linux",
    "jenkins",
    "jest",
    "jmeter",
    "grafana",
    "maven",
    "sql",
  ],
  startDate: "11-01-2018",
  endDate: "05-22-2022",
};

export const shakerFullStack: PositionType = {
  id: "shaker-fs",
  employerId: "shaker",
  title: "Full-Stack Developer",
  responsibilities: [
    "Created responsive UIs with React, Redux, and Material UI component library.",
    "Built and consumed API endpoints with GraphQL and Node.",
    "Developed and maintained databases with PostgreSQL, Node, and TypeORM.",
    "Utilized Typescript to implement OOP, static typing, and interfaces, among other principles.",
    "Built and maintained native applications with React Native, Expo, and Xcode.",
  ],
  accomplishments: [
    "Full stack design & development of Agent Reporting premium feature that contributed to increase in revenue.",
    "Designed & developed several service layers to call external APIs for integrations with 3rd party software.",
  ],
  technologies: [
    "react",
    "redux",
    "materialUi",
    "typescript",
    "node",
    "graphql",
    "typeORM",
    "json",
    "postgres",
    "react-native",
    "expo",
    "xcode",
    "docker",
    "aws",
    "html",
    "css",
    "http",
    "git",
  ],
  startDate: "02-14-2022",
  endDate: "01-16-2023",
};

export const touchFullStack: PositionType = {
  id: "touchtown-fs",
  employerId: "touchtown",
  title: "Full-Stack Software Engineer",
  responsibilities: [
    "Create highly-responsive UI components with React, Redux, HTML, and SCSS.",
    "Build and consume API endpoints with Java/Spring, and Axios, respectively.",
    "Develop and maintain databases with SQL Server and PostgreSQL.",
    "Participate in daily Agile stand-ups, meetings, retros, and feature demonstrations.",
  ],
  accomplishments: [
    "Converted several legacy JSPs and Class Components to Functional React Components, improving developer experience & bringing modernization to codebase.",
    "Built profile image cropping functionality that fixed several long withstanding upload, display, and cropping bugs for images.",
  ],
  technologies: [
    "java",
    "spring",
    "react",
    "redux",
    "json",
    "docker",
    "aws",
    "html",
    "css",
    "scss",
    "axios",
    "http",
    "git",
    "bitbucket",
    "jest",
    "sql",
  ],
  startDate: "06-01-2022",
  endDate: CURRENTLY_WORKING_TEXT,
};

export const allPositions = [
  revalizeSoftwareDev,
  shakerFullStack,
  touchFullStack,
];

export const revalize: ExperienceType = {
  id: "revalize",
  employer: "Revalize (Configure One)",
  position: revalizeSoftwareDev,
  startDate: "11-01-2018",
  endDate: "05-22-2022",
};

export const shaker: ExperienceType = {
  id: "shaker",
  employer: "Shaker.io",
  position: shakerFullStack,
  startDate: "02-14-2022",
  endDate: "01-16-2023",
};

export const touchtown: ExperienceType = {
  id: "touchtown",
  employer: "Touchtown by Uniguest",
  position: touchFullStack,
  startDate: "06-01-2022",
  endDate: "present",
};

export const allExperience = [revalize, shaker, touchtown];
