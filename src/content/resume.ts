// Single source of truth for portfolio content.
// Every fact here must trace back to /content/resume-consolidated.md at the repo root.

export const profile = {
  name: "Payal Jain M",
  title: "Technical Delivery Leader",
  location: "Melbourne, VIC, Australia",
  email: "payal.jm@gmail.com",
  linkedin: "https://www.linkedin.com/in/payaljain-m",
  headshot: "/headshot.jpg",
  yearsExperience: "19+",
  summary: [
    "Technical Delivery Leader with 19+ years of experience driving complex technology programs across enterprise applications, data platforms, and cloud environments. Known for translating business objectives into executable technical plans and ensuring end-to-end delivery in fast-moving, multi-stakeholder environments.",
    "Strong background leading cross-functional teams (engineering, data, business), solving execution challenges, and delivering scalable solutions across banking, government, and enterprise domains.",
  ],
};

export const aiCallout = {
  heading: "Currently exploring AI-driven delivery",
  body: "Building hands-on capability in Generative AI, LLM workflows, and agent-based systems — including Claude Code and agentic AI tooling. Applying two decades of delivery execution to AI-driven and startup environments.",
};

export const skillCategories = [
  {
    category: "Delivery & Program Leadership",
    items: [
      "Program & Portfolio Delivery Management",
      "Service Delivery & Operational Excellence",
      "Risk, Dependency & Escalation Management",
      "Governance Frameworks & Continuous Improvement",
    ],
  },
  {
    category: "Stakeholder & People Leadership",
    items: [
      "Client & Executive Stakeholder Management",
      "People Leadership, Capacity & Resource Planning",
    ],
  },
  {
    category: "Financial & Commercial",
    items: ["Financial Management, Cost Optimization & ROI Modelling"],
  },
  {
    category: "Technology & Innovation",
    items: [
      "Application Modernization",
      "Technology Integration",
      "AI / Generative AI (Learning & Application Exploration)",
    ],
  },
];

export const achievements = [
  {
    metric: "AU$7M",
    label: "cost savings",
    detail:
      "Led a large ERP Transformation Program for a global automotive OEM with 45+ international stakeholders and an AU$80M+ portfolio, delivering AU$7M in cost savings via vendor and portfolio optimization.",
  },
  {
    metric: "257",
    label: "integrations migrated",
    detail:
      "Led the migration of 257 integrations from SAP ECC (on-premise) to S/4HANA Cloud, driving scalability and operational efficiency.",
  },
  {
    metric: "60%",
    label: "vendor cost reduction",
    detail:
      "Negotiated a cost reduction from AU$7M to AU$2.8M across a 51-supplier vendor program — recognized by the VP for financial impact.",
  },
  {
    metric: "AU$800K",
    label: "support cost savings",
    detail:
      "Owned delivery of 33 critical application OS upgrades — the only stream to finish ahead of schedule — mitigating security risk.",
  },
  {
    metric: "AU$3.7M",
    label: "ROI business case",
    detail:
      "Built an ROI-backed cloud operational business case with a 2.5-year payback and AU$300K annual OPEX savings.",
  },
  {
    metric: "800+",
    label: "users on automated workflows",
    detail:
      "Led Agile program delivery, including PEGA-based workflows automating end-to-end processes for 800+ users.",
  },
  {
    metric: "63+",
    label: "applications consolidated",
    detail:
      "Consolidated enterprise applications in a banking environment, reducing fraud risk and strengthening controls.",
  },
  {
    metric: "1.5 days",
    label: "saved per week",
    detail:
      "Drove automation and workflow optimization that improved compliance team productivity, cutting task time from 15–20 minutes to 3–5 minutes.",
  },
];

export type Role = {
  title: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    title: "Senior Program Manager",
    org: "Toyota Motors Australia",
    period: "Apr 2022 – Jul 2026",
    location: "Melbourne, VIC / Remote",
    bullets: [
      "Led a large-scale **ERP transformation** with multiple workstreams and **45+ global stakeholders**, delivering **AU$7M cost savings** through vendor negotiations, financial optimisation and program efficiencies.",
      "Led the migration of **257 integrations** from **SAP ECC (on-premise) to S/4HANA Cloud**.",
      "Owned delivery of **33 critical application OS upgrades**, the only stream completed ahead of schedule, mitigating security risk and saving **AU$800K** in managed support costs.",
      "Negotiated a **60% cost reduction (AU$7M → AU$2.8M)** across a **51-supplier vendor program**, recognized by the VP.",
      "Established **SteerCo, KPI and risk-governance frameworks** for an **AU$80M program**, ensuring strong alignment with executives and senior stakeholders.",
      "Acted as the **strategic bridge between business and technology**, simplifying complex technical concepts and aligning modernisation initiatives to business outcomes.",
      "Built **ROI-led business cases and cost-benefit analyses** that shaped executive investment decisions and portfolio roadmaps.",
    ],
  },
  {
    title: "Senior Project Manager",
    org: "Cenitex (Vic Gov Managed Services)",
    period: "May 2022 – Jul 2022",
    location: "Melbourne, VIC",
    bullets: [
      "Conducted a comprehensive review of **board-level KPI reporting**, engaging the CEO and operations managers to identify gaps and improvement opportunities.",
      "Developed and presented enhancement solutions with detailed **cost-benefit analyses**, leveraging technology synergies to drive strategic, data-informed decision-making.",
    ],
  },
  {
    title: "Senior Technical Project Manager",
    org: "Suburban Rail Loop Authority",
    period: "Oct 2021 – Mar 2022",
    location: "Melbourne, VIC",
    bullets: [
      "Directed **SharePoint development and testing teams** to deliver probity forms and workflows, enhancing compliance and operational efficiency.",
      "Engaged **multiple 3rd party vendors** to validate and prototype the review and approvals processes.",
      "Recommended and implemented a **centralized onboarding request model**, eliminating manual handoffs and siloed processes.",
      "Established and embedded **project delivery guidelines** in a newly formed organization.",
    ],
  },
  {
    title: "Senior Consultant – Project Manager",
    org: "National Australia Bank",
    period: "Apr 2018 – Sep 2021",
    location: "Melbourne, VIC",
    bullets: [
      "Independently led two Agile technology projects driving **operating model transformation for 800+ bankers** across regions, consolidating tech, segregating roles and strengthening governance.",
      "Influenced executives and technical teams on transition challenges and cost/risk options, enabling a **fraud-risk-mitigated solution redesign**.",
      "Developed a **Customer Contact Strategy** mapping end-to-end journeys, delivering a seamless experience for associates nationwide.",
      "Managed **10+ concurrent stakeholder engagements** in a multi-stream program, delivering on-time, on-budget with strong risk management.",
    ],
  },
  {
    title: "Senior Business Analyst",
    org: "Victorian Commission for Gambling and Liquor",
    period: "Mar 2017 – Apr 2018",
    location: "Melbourne, VIC",
    bullets: [
      "Identified opportunities and elicited requirements to implement a **digital online portal** for major paper-based liquor applications.",
      "Analyzed existing systems and processes, identified gaps and recommended improvements.",
      "Documented **test plans, test cases, and RTM** for validating system functionality.",
    ],
  },
];

export const earlierExperience = [
  {
    org: "Taxi Service Commission (TSC), Melbourne",
    title: "Senior Business Systems & Data Maintenance Officer, Corporate Services",
    period: "Oct 2013 – Jun 2016",
  },
  {
    org: "Royal Bank of Scotland, India & UK",
    title: "Business Analyst",
    period: "Mar 2011 – Jan 2013",
  },
  {
    org: "Infosys Technologies Limited, India",
    title: "",
    period: "Jun 2007 – Dec 2010",
  },
];

export const technicalSummary = [
  {
    label: "Office Software",
    items: ["MS Project", "Planview", "SharePoint", "OneNote", "O365", "Zoom"],
  },
  {
    label: "Support Software",
    items: ["JIRA", "Confluence", "TRIM", "PVCS Trackers", "HP Quality Centre", "ALM"],
  },
  {
    label: "ETL & Data Modelling",
    items: ["Signavio", "Informatica", "Datastage", "ERWIN"],
  },
  {
    label: "Platforms",
    items: ["SAP", "Salesforce", "PEGA", "Zapier", "GitHub"],
  },
  {
    label: "Databases & BI",
    items: ["AWS Redshift", "MS SQL", "Oracle SQL", "Mainframes SQL", "Tableau"],
  },
  {
    label: "Technology",
    items: ["Mainframes (COBOL)", "JCL", "CICS", "Java"],
  },
];

export const education = {
  degree: "Bachelor of Engineering, Electronics and Communication",
  school: "College of Engineering, Chennai",
  date: "Apr 2007",
};

export const training = [
  "FINSIA Professional Banking Fundamentals",
  "Generative AI, Prompt Engineering — DeepLearning.AI",
  "Claude Code",
  "Agentic AI",
  "AWS Cloud Practitioner",
  "CRM Salesforce Administrator",
  "ITIL V3 Foundation",
  "DB2 Administrator",
];
