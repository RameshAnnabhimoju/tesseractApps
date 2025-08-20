import image1 from "../assets/blog1.jpg";
import image2 from "../assets/blog2.jpg";
import image3 from "../assets/blog3.jpg";
import image4 from "../assets/image1.png";
import blog5 from "../assets/Blog5Image3.jpeg";
import authorImage from "../assets/BELLE BAI - MARKETING EXECUTIVE.jpg";
export const ourBlogDummyData = [
  {
    id: 1,
    title:
      "Protecting Participant Data: Why Security Matters for NDIS and Care Providers",
    description: ` Every day, disability support and aged care providers collect
            sensitive information — including health records, personal details,
            and care plans — that participants trust us to protect. Strong data
            security isn't a luxury; it's essential for compliance, service
            continuity, and, most importantly, client trust.`,
    image: image1,
    date: "2025-06-01",
    author: "Belle Bai",
    authorImage: authorImage,
    comments: 0,
    categories: ["App", "Technology"],
  },
  {
    id: 2,
    title:
      "Future-Proofing Disability Services: Why NDIS Providers Need Smarter Systems Now",
    description: `Australia’s NDIS (National Disability Insurance Scheme) is evolving at pace. By March 2025, the scheme supported over 717,000 active participants — a 3.5% increase in just one quarter. This rapid expansion creates significant operational, compliance, and workforce challenges for NDIS providers.`,
    image: image2,
    date: "2025-06-12",
    author: "Belle Bai",
    authorImage: authorImage,
    comments: 0,
    categories: ["App", "Technology"],
  },
  {
    id: 3,
    title: "Why Manual Rostering Is Costing You More Than You Think",
    description: `Many NDIS providers still build rosters by hand — using
            spreadsheets, whiteboards or group chats. It feels simple and
            "free". But the hidden costs add up fast. Every week, managers lose
            hours fixing mistakes. Shifts get double-booked. Overtime blows out
            budgets. Simple slip-ups mean under-claimed hours or overpayments.
            `,
    image: image3,
    date: "2025-07-06",
    author: "Belle Bai",
    authorImage: authorImage,
    comments: 0,
    categories: ["Technology", "Product"],
  },
  {
    id: 4,
    title: "The Hidden Costs of Poor Workforce Management for NDIS Providers",
    description: `NDIS service providers rely on having their operations staffed 
    properly. But too many organizations don’t realize how much bad workforce management 
    can rip into their bottom line. It’s easy to see where the money is being spent in 
    the form of staffing hours, but the hidden costs associated with overtime, absence, 
    compliance, and the negative impact on reputation are costing the providers out of 
    
            `,
    image: image4,
    date: "2025-07-28",
    author: "Belle Bai",
    authorImage: authorImage,
    comments: 0,
    categories: ["Technology", "Product"],
  },
  {
    id: 5,
    title:
      "Unforgettable Moments at the Disability & WorkAbility Sydney Expo 2025",
    description: `On August 8th - 9th, 2025, the TesseractApps team proudly participated in 
    the Sydney Disability & WorkAbility Expo, an event filled with connection, innovation, 
    and a shared commitment to the NDIS community. Those two days brought unforgettable 
    moments as we engaged directly with NDIS providers, support coordinators, participants, 
    and industry leaders, all dedicated to improving `,
    image: blog5,
    date: "2025-08-13",
    author: "Belle Bai",
    authorImage: authorImage,
    comments: 0,
    categories: ["Technology", "Product"],
  },
];
export const footerProductsData = {
  0: [
    "Roster Management",
    "Timesheet",
    "Admin Console",
    "Access Control Panel",
    "HR Operations",
  ],
  1: [
    "T-sign",
    "Clock In & Clock Out",
    "Participant Management",
    "Incident Management",
    "Repository",
  ],
  2: [
    "Role based Dashboard",
    "My Profile",
    "Forms",
    "Accounting",
    "T Learning Hub",
    "ChaT",
  ],
};
export const navBarDummyData = {
  Product: [
    // { title: "Scheduling", subTitle: " " },
    // { title: "Time Management", subTitle: " " },
    // { title: "HR Management", subTitle: " " },
    // { title: "Communication", subTitle: " " },
    [
      { title: "Roster Management", subTitle: "Auto Scheduling" },
      { title: "Timesheet", subTitle: "Time Tracking" },
      { title: "Admin Console", subTitle: "System Oversight" },
      { title: "Access Control Panel", subTitle: "Access Rights" },
      { title: "HR Operations", subTitle: "HR Suite" },
      { title: "T-sign", subTitle: "Digital Signatures" },
    ],
    [
      { title: "Clock In & Clock Out", subTitle: "Attendence" },
      { title: "Participant Management", subTitle: "Participant Care" },
      { title: "Incident Management", subTitle: "Incident Reporting" },
      { title: "Repository", subTitle: "Document Hub" },
      { title: "Role based Dashboard", subTitle: "Smart Dashboards" },
      { title: "My Profile", subTitle: "My Account" },
    ],
    [
      { title: "Forms", subTitle: "Custom Forms" },
      { title: "Accounting", subTitle: "Finance" },
      { title: "T Learning Hub", subTitle: "Learning Hub" },
      {
        title: "ChaT",
        subTitle: "Secure Communication",
      },
    ],
  ],
  Solutions: {
    "BY INDUSTRY": [
      { title: "NDIS Industry", subTitle: " " },
      { title: "ICT Industry", subTitle: " " },
      { title: "Retail & Hospitality", subTitle: " " },
      { title: "Multi-site Businesses", subTitle: " " },
      { title: "Construction", subTitle: " " },
      { title: "Manufacturing", subTitle: " " },
      { title: "More Industries", subTitle: " " },
    ],
    "BY ROLE": [
      { title: "Administrator", subTitle: " " },
      { title: "Roster Manager", subTitle: " " },
      { title: "NDIS Staff", subTitle: " " },
      { title: "HR Manager", subTitle: " " },
      { title: "Accountant", subTitle: " " },
      { title: "Participant", subTitle: " " },
    ],
    "BY BUSINESS TYPE": [
      { title: "Small Businesses", subTitle: " " },
      { title: "Enterprise", subTitle: " " },
      { title: "Franchises", subTitle: " " },
      { title: "Startups", subTitle: " " },
    ],
    "BY BUSINESS PROBLEM": [
      { title: "Compliance", subTitle: " " },
      { title: "Employee Engagement", subTitle: " " },
      { title: "Time Efficiency", subTitle: " " },
      { title: "Cost Optimisation", subTitle: " " },
    ],
    "BY CARE": [
      { title: "Disability Support (NDIS Providers)", subTitle: " " },
      { title: "Aged Care Services", subTitle: " " },
      { title: "Childcare Centres", subTitle: " " },
      { title: "Allied Health Practices", subTitle: " " },
      { title: "Home & Community Care", subTitle: " " },
      { title: "Training Providers", subTitle: " " },
    ],
  },
  "Additional Features": [
    { title: "Book a Demo", subTitle: " " },
    { title: "Free Trial Sign-Up", subTitle: " " },
    { title: "Integration", subTitle: " " },
  ],
  Resources: [
    { title: "Blog", subTitle: " " },
    { title: "Case Studies", subTitle: " " },
    { title: "Whitepapers", subTitle: " " },
    { title: "FAQs", subTitle: " " },
    { title: "Support Documentation", subTitle: " " },
  ],
  About: [
    { title: "Our Story", subTitle: " " },
    { title: "Our Mission & Vision", subTitle: " " },
    // { title: "Our Vision", subTitle: " " },
    { title: "Team", subTitle: " " },
    { title: "Careers", subTitle: " " },
    { title: "Contact Us", subTitle: " " },
  ],
};

export const aboutSelectedToolDummyData = [
  {
    dot: { outer: "#E6EEFF", middle: "#B4CCFF", inner: "#2563EB" },
    title: "Lorem ipsum dolor sit",
    description:
      "with a unified platform for care, rostering, invoicing, and compliance—efficiency at your fingertips.",
  },
  {
    dot: { outer: "#FFE3E3", middle: "#FEB4B4", inner: "#FC4343" },
    title: "Lorem ipsum dolor sit",
    description:
      "with a unified platform for care, rostering, invoicing, and compliance—efficiency at your fingertips.",
  },
  {
    dot: { outer: "#DBF2E8", middle: "#9DD9C2", inner: "#08A965" },
    title: "Lorem ipsum dolor sit",
    description:
      "with a unified platform for care, rostering, invoicing, and compliance—efficiency at your fingertips.",
  },
  {
    dot: { outer: "#DBE8EF", middle: "#9DC2D1", inner: "#3B7793" },
    title: "Lorem ipsum dolor sit",
    description:
      "with a unified platform for care, rostering, invoicing, and compliance—efficiency at your fingertips.",
  },
  {
    dot: { outer: "#F7ECD9", middle: "#E8C9A5", inner: "#D77E1B" },
    title: "Lorem ipsum dolor sit",
    description:
      "with a unified platform for care, rostering, invoicing, and compliance—efficiency at your fingertips.",
  },
  {
    dot: { outer: "#EBE2FE", middle: "#C7ADFC", inner: "#932EFA" },
    title: "Lorem ipsum dolor sit",
    description:
      "with a unified platform for care, rostering, invoicing, and compliance—efficiency at your fingertips.",
  },
];

export const pricingCardsDummyData = {
  ndis: [
    {
      id: 1,
      title: "Essential:",
      subTitle: "I Want to Choose What I Want",
      description:
        "Great for when you only need a single core module to deal with something quite specific.",
      Pricing: 9.99,
      timePeriod: "Per user/month",
      cta: "Try TesseractApps free for 30 days",
      features: [
        "Smart Rostering & Scheduling",
        "Invoicing & Timesheets",
        "Basic Dashboards & Insights",
        "Core Admin & User Access",
        "T Learner",
        "Basic Forms",
        "My Profile",
        "Pay slips",
      ],
      optionalAddons: ["LMS – Wyzed *", "E-sign (T Sign)"],
    },
    {
      id: 2,
      title: "Professional:",
      subTitle: "Serious About Business",
      description:
        "A perfect solution for companies choosing two, or more modules to handle bigger projects.",
      Pricing: 19.99,
      timePeriod: "Per user/month",
      cta: "Try TesseractApps free for 30 days",
      features: [
        "Advanced HR & Recruitment",
        "Full Participant Management ",
        "Detailed Performance Tracking ",
        "Group Messaging & Collaboration",
        "Accounting & Payroll Integration ",
        "Exportable Reports & Repository ",
        "Dedicated Support Chat ",
      ],
      optionalAddons: ["LMS – Wyzed *", "E-sign (T Sign)"],
    },
    {
      id: 3,
      title: "Premium (& AI):",
      subTitle: "End to End",
      description:
        "All-in-one solution for organisations which require all modules working in perfect harmony. ",
      Pricing: 39.99,
      timePeriod: "Per user/month",
      cta: "Try TesseractApps free for 30 days",
      features: [
        "All-in-one HR",
        "Payroll",
        "Accounting Suite",
        "Advanced Risk & Funds Tracking ",
        "Full Incident & Compliance Reporting",
        "24/7 Support with Dedicated Manager ",
        "Full Document Management & E-Signatures ",
        "End-to-End Workforce & Service Integration",
      ],
      optionalAddons: ["LMS – Wyzed", "AI"],
    },
  ],
  ict: [
    {
      id: 1,
      title: "Professional:",
      subTitle: "Serious About Business",
      description: "Contact us for pricing",
      Pricing: -1,
      timePeriod: "Per user/month",
      cta: "Try TesseractApps free for 30 days",
      features: [
        "Timesheets",
        "Invoice Management",
        "Basic Dashboards & Insights",
        "Core Admin & User Access",
        "My Profile",
        "Repository for Document management",
        "T-sign",
        "Payroll and accounting",
      ],
      optionalAddons: [],
    },
    {
      id: 2,
      title: "Premium (& AI):",
      subTitle: "End to End",
      description: "Contact us for Pricing ",
      Pricing: -1,
      timePeriod: "Per user/month",
      cta: "Try TesseractApps free for 30 days",
      features: [
        "Everything in Professional, plus",
        "All-in-one HR, LMS, Payroll and Accounting Suite",
        "Smart AI Insights & Automation",
        "24/7 Support with Dedicated Manager",
        "Full Document Management & E-Signatures",
        "End-to-End Workforce & Service Integration",
        "Advanced HR & Recruitment",
        "Group Messaging & Collaboration",
        "Accounting & Payroll Integration",
        "Exportable Reports & Repository ",
        "Dedicated Support Chat",
      ],
      optionalAddons: ["AI"],
    },
  ],
  retailAndHospitality: [],
  multiSiteBusinesses: [],
  manufacturing: [],
  construction: [],
};

export const pricingDummyData = {
  ndis: [
    {
      heading: "Role-based Dashboard",
      data: [
        {
          title: "Custom Views by Role",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Roster Schedule Tracker",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Staff Summary",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Clock in  Snapshot",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Participant Log",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "HR Insights",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "TaskBridge",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Invoice Summary",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Leave Management",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Incident Directory",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Performance Tracker",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Funds Tracker",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Rejected Shifts",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
      ],
    },
    {
      heading: "Admin Console",
      data: [
        {
          title: "Organisation Settings",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Facility Directory",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Participant Directory",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Staff Directory",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
      ],
    },
    {
      heading: "Roster Management",
      subHeading: "",
      data: [
        {
          title: "Shift Grouping",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Recurring Shift",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Split Shifts",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Roster Efficiency (Under/Over)",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Custom Shifts",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Shift Reports",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Expression of Interest Shifts",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Sleepover Shifts",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Extended- Shifts",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },

        {
          title: "Real-time notifications",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Timesheet Approvals",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Reimbursements Requests",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Checklists",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Shift Activity Logs",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Voice-to-Text Shift Notes",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Staff View",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Participants View",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Auto Scheduling",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Participant Risk Indicator",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Fatigue Management",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Classification: Levels and Pay Points",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Auto fill and Address Management",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Services Management",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },

        {
          title: "Bulk Invoicing",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },

        {
          title: "Drag and Drop Shift Management",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Instant Search Schedules",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title:
            "Real-time clock-in and out with/without geo-location tracking",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Publish",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Rejected Shifts",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
      ],
    },
    {
      heading: "Clock In & Clock Out",
      data: [
        {
          title: "Geo-location Tracking",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Clock In & Clock Out",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Shift Details",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Shift Notes",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Checklists",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },

        {
          title: "Activity Logs",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Client or Supervisor Signatures",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Shift Notifications",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Shift & Log Management by Admin",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },

        {
          title: "Reimbursements Requests",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
      ],
    },
    {
      heading: "HR Operations",
      data: [
        {
          title: "Staff Directory",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Awards",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Training & Evaluation (Wyzed)",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Leave Management",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Staff Onboarding",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Applicant tracking System",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Recruitments",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Performance Management",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
      ],
    },
    {
      heading: "Participant Management",
      data: [
        {
          title: "Participant Directory",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Participant Journal",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Service Management",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Funds Tracker",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Document Management",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        { title: "Forms", subTitle: "", data1: true, data2: true, data3: true },
        {
          title: "Feedback",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Schedule",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Risk Management",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Participant Snapshot",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
      ],
    },
    {
      heading: "Accounting",
      data: [
        {
          title: "Sales & Purchases",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
        {
          title: "Bank Feed",
          subTitle: "",
          data1: false,
          data2: false,
          data3: true,
        },
        {
          title: "Chart of Accounts",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
        {
          title: "General Ledger",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
        {
          title: "Payroll",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
        {
          title: "Reports",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
        {
          title: "Account Settings",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
        {
          title: "Payroll Settings",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
      ],
    },
    {
      heading: "Incident Management",
      data: [
        {
          title: "Create & Track Incidents",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
        {
          title: "Track History",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
        {
          title: "Export and Download Reports",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
      ],
    },
    {
      heading: "Repository",
      data: [
        {
          title: "Bulk Storage",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
        {
          title: "User-Specific Document Access",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
      ],
    },
    {
      heading: "My Profile",
      data: [
        {
          title: "Awards & Recognition",
          subTitle: "",
          data1: true,
          data2: false,
          data3: true,
        },
        {
          title: "Training & Evaluation",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Leave Management",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Payslips & Timesheet",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Performance Management",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "My Availability",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
      ],
    },
    {
      heading: "Access Control Panel",
      data: [
        {
          title: "Create User Account",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "User Management",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Staff Management",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Reset Password",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "User Report",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
      ],
    },
    {
      heading: "T Sign",
      data: [
        {
          title: "E Signatures",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
        {
          title: "Support PDF, Word",
          subTitle: "",
          data1: false,
          data2: false,
          data3: true,
        },
        {
          title: "Support Chat",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
      ],
    },
    {
      heading: "Forms",
      data: [
        {
          title: "Customised Forms",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Publish Customised Forms",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
        {
          title: "Manage Forms",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
      ],
    },
    {
      heading: "ChaT",
      data: [
        {
          title: "ChaT feature ob both Web and Mobile",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
        {
          title: "Group ChaT-Web",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
        {
          title: "Poll-Web",
          subTitle: "",
          data1: false,
          data2: true,
          data3: true,
        },
      ],
    },

    {
      heading: "T Learner",
      data: [
        {
          title: "In-App Tutorials",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
        {
          title: "Learning by ROle",
          subTitle: "",
          data1: true,
          data2: true,
          data3: true,
        },
      ],
    },
    {
      heading: "AI (Beta)",
      data: [
        {
          title: "Predict. Act. Simplify - Coming Soon",
          subTitle: "",
          data1: false,
          data2: false,
          data3: false,
        },
      ],
    },
  ],
  ict: [
    {
      heading: "Dashboard",
      data: [
        {
          title: "Custom Views by Role",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Timesheet management",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Staff Summary",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Payroll Tracker",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "HR Insights/Talent Pulse",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "TaskBridge",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Invoice Summary",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Leave Management",
          subTitle: "",
          data1: true,
          data2: true,
        },
      ],
    },
    {
      heading: "Admin Console",
      data: [
        {
          title: "Organisation Settings",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Facility directory",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Staff Directory",
          subTitle: "",
          data1: true,
          data2: true,
        },
      ],
    },

    {
      heading: "Accounting",
      data: [
        {
          title: "Sales & Purchase",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Bank Feed",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Chart of Accounts",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "General Ledger",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Reports",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Payroll",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Account Settings",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Payroll Settings",
          subTitle: "",
          data1: true,
          data2: true,
        },
      ],
    },
    {
      heading: "Repository",
      data: [
        {
          title: "Bulk Storage",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "User-Specific Document Access",
          subTitle: "",
          data1: true,
          data2: true,
        },
      ],
    },
    {
      heading: "My Profile",
      data: [
        {
          title: "My Profile",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Awards",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Training & Evaluation",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Leave Management",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Payslips & Timesheet",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Will update soon",
          subTitle: "",
          data1: true,
          data2: true,
        },
      ],
    },
    {
      heading: "Access Control Panel",
      data: [
        {
          title: "Create User Account",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "User Management",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Staff Management",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Reset Password",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "User Report",
          subTitle: "",
          data1: true,
          data2: true,
        },
      ],
    },
    {
      heading: "T Sign",
      data: [
        {
          title: "E Signatures",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Support PDF, Word",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Support Chat",
          subTitle: "",
          data1: true,
          data2: true,
        },
      ],
    },
    {
      heading: "HR Operations",
      data: [
        {
          title: "Staff Directory",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Awards & Recognition",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Training & Evaluation",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Leave Management",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Staff Onboarding",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Applicant tracking system ",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Recruitments",
          subTitle: "",
          data1: true,
          data2: true,
        },
      ],
    },
    {
      heading: "ChaT",
      data: [
        {
          title: "ChaT feature on both Web and Mobile (iOS, Android)",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Group Chat - Web",
          subTitle: "",
          data1: true,
          data2: true,
        },
        {
          title: "Poll - Web",
          subTitle: "",
          data1: true,
          data2: true,
        },
      ],
    },
  ],
};

import RosterManagementImage from "../assets/Roster Management.png";
import TimesheetImage from "../assets/Time sheet.png";
import AdminConsoleImage from "../assets/Admin.png";
import HRImage from "../assets/HR.png";
import ParticipantsImage from "../assets/Participants Management.png";
import ChatImage from "../assets/Chat and Notification.png";
import RepoImage from "../assets/Repository.png";
import AccountingImage from "../assets/accounting.png";
import IncidentImage from "../assets/Incident Management.png";
import ClockImage from "../assets/clock in clock out.png";
import ComplianceImage from "../assets/complaince and safe guard.png";
import AccessImage from "../assets/Access control panel.png";
import Forms from "../assets/Form.png";
import TSign from "../assets/T sign.png";
import Profile from "../assets/My profile.png";
import Role from "../assets/Role base dashboard.png";
export const featuresDummyData = [
  {
    id: 1,
    title: "Roster Management",
    description:
      "Easily plan, distribute, and coordinate shifts. No more roster conflicts, less wear and tear, and fill-ins as they occur.",
    image: RosterManagementImage,
  },
  {
    id: 2,
    title: "Timesheet",
    description:
      "Timesheet is a simple, intuitive, and free time tracking and payroll management application that streamlines workflows with natural processes, real-time panel updates, automatic invoice capabilities.",
    image: TimesheetImage,
  },
  {
    id: 3,
    title: "Admin Console",
    description:
      "The Admin Console is the single point of control that makes it easy to manage organisational details, manage user access, facilities, roster and staff with smooth, secure operations. ",
    image: AdminConsoleImage,
  },
  {
    id: 4,
    title: "HR Operations",
    description:
      "Centralise HR flows - from onboarding to compliance reporting.",
    image: HRImage,
  },
  {
    id: 5,
    title: "Participant Management",
    description:
      "Track progress, take notes, and monitor goals, while at the same time stay on top of participant needs automatic.",
    image: ParticipantsImage,
  },
  {
    id: 6,
    title: "ChaT & Notifications",
    description:
      "In-app messaging, mobile alerts, and real-time updates will ensure your team has the latest information – securely archived.",
    image: ChatImage,
  },
  {
    id: 7,
    title: "Repository",
    description:
      "Safely store and organize files of staff and participants with role-based access and digital signatures. ",
    image: RepoImage,
  },
  {
    id: 8,
    title: "Accounting",
    description:
      "Streamline payroll, invoicing, reimbursements and NDIS claims with automation. Seamless integration with accounting platforms.",
    image: AccountingImage,
  },
  {
    id: 9,
    title: "Incident Management",
    description: "Record logs with automatic alerts and escalation channels. ",
    image: IncidentImage,
  },
  {
    id: 10,
    title: "Clock In & Clock Out",
    description:
      "Manage with Accuracy - Log Time with Clock In & Clock Out - Where accurate timekeeping leads to encourage productivity, accountability, and better payroll management.",
    image: ClockImage,
  },
  {
    id: 11,
    title: "Compliance & Safeguards",
    description:
      "Comply with NDIS requirements using out-of-box controls, automated documentation and policy-based workflows.",
    image: ComplianceImage,
  },
  {
    id: 12,
    title: "Access Control Panel",
    description:
      "The Access Control Panel simplifies user management by enabling administrators to assign, manage, and revoke access rights in real-time offering effective and flexible control over entry permissions. ",
    image: AccessImage,
  },
  {
    id: 13,
    title: "Forms",
    description:
      "Design and manage bespoke forms to fit your workflow. Quickly deploy forms to compile, review, and save data submitted by users in real time ",
    image: Forms,
  },
  {
    id: 14,
    title: "T-sign",
    description:
      "Sign documents with confidence with T Sign E-Signature for PDF and Word formats. Improve teamwork with Chat support built right in to ensure everyone communicate when signing in real-time. ",
    image: TSign,
  },
  {
    id: 15,
    title: "My Profile",
    description:
      "Control your private information and preferences from a single location. Keep your profile current for all the benefits of having access and get a more personalized experience. ",
    image: Profile,
  },
  {
    id: 16,
    title: "Role based Dashboards",
    description:
      "Role-based dashboards offer a personalized view to critical tools and insight, enabling users to monitor vital information, work, schedules, and performance with greater ease. ",
    image: Role,
  },
];
import howItWorksImage1 from "../assets/howItWorks1.png";
import howItWorksImage2 from "../assets/howItWorks2.png";
import howItWorksImage3 from "../assets/howItWorks3.png";
import howItWorksImage4 from "../assets/howItWorks4.png";
import howItWorksImage5 from "../assets/howItWorks5.png";
import howItWorksImage6 from "../assets/howItWorks6.png";
export const howItWorksDummyData = [
  {
    id: 1,
    title: "Book a Demo",
    image: howItWorksImage1,
    description:
      "See the platform in action. We’ll show you how TesseractApps fits your service type and team needs.",
  },
  {
    id: 2,
    title: "Sign In and Get Started",
    image: howItWorksImage2,
    description:
      "Once you’re set up, log in to your dashboard—desktop or mobile. Everything you need is ready to go.",
  },
  {
    id: 3,
    title: "Add Your Team and Participants",
    image: howItWorksImage3,
    description:
      "Easily add staff, link NDIS participants, upload documents, and assign roles—all in one place. ",
  },
  {
    id: 4,
    title: "Manage Rosters, Services & Notes",
    image: howItWorksImage4,
    description:
      "Create rosters, log progress notes, track time, and deliver services—your daily tasks simplified.",
  },
  {
    id: 5,
    title: "Claim & Pay with Confidence",
    image: howItWorksImage5,
    description:
      "Generate NDIS claims, run payroll, and send invoices in a few clicks. Accurate, fast, and reliable.",
  },
  {
    id: 6,
    title: "Stay Compliant & In Control",
    image: howItWorksImage6,
    description:
      "Track compliance, training, budgets, and reports in real time. Be audit-ready every day.",
  },
];

import testimonialImage from "../assets/avatar-mid-alt.png";
import busineessWomanInage from "../assets/businesswoman.png";
export const testimonialDummyData = [
  {
    id: 1,
    rating: 5,
    testimonial: "",
    testimonialPoints: [
      "Tesseract Apps has been an intuitive and reliable platform that’s streamlined our workflow and boosted team productivity. It integrated seamlessly into our operations, saving time and reducing manual tasks.",
      "The user interface is clean and easy to navigate, making adoption effortless across the team. In a short time, the Tesseract Apps team delivered two key improvements—a powerful reporting dashboard and a streamlined task management feature—both of which have had a direct, positive impact on our efficiency.",
      "Support has also been excellent: responsive, proactive, and always open to feedback. Tesseract Apps has quickly become an indispensable tool for our organisation, and I highly recommend it to any team seeking a smart, scalable solution.",
    ],
    authorImage: testimonialImage,
    author: "Nathan Chakanetsa",
    authorTitle: "Seed Disability Services Pty Ltd",
  },
  // {
  //   id: 2,
  //   rating: 5,
  //   testimonial: "",
  //   testimonialPoints: [
  //     "“We’ve been using TesseractApp for over a year now, and it’s completely transformed the way we manage our NDIS business. Before Tesseract, we were juggling multiple systems just to handle rostering, billing, compliance, and staff training. It was time-consuming, costly, and inefficient.",
  //     "Tesseract brings all of these functions together in one easy-to-use platform. It’s streamlined our operations, improved our workflow, and made it much easier to stay on top of everything. The team behind it, especially Kranthi and Rev, have been incredibly supportive — always responsive, open to feedback, and committed to helping us get the most out of the system.",
  //     "If you're an NDIS provider looking to simplify your processes, reduce costs, and avoid the stress of managing multiple tools, I highly recommend Tesseract. It’s been a game-changer for our team and our business.”",
  //   ],
  //   authorImage: testimonialImage,
  //   author: "Seed",
  //   authorTitle: "",
  // },
  {
    id: 3,
    rating: 5,
    testimonial: `“User-friendly, efficient, and built for care teams. Our staff love the simplicity of the interface, and compliance reporting has never been easier. Payroll is on time, every time. Choosing Tesseract was the best tech decision we made.”`,
    authorImage: testimonialImage,
    author: "Care Services Manager",
    authorTitle: "",
  },
  {
    id: 4,
    rating: 4,
    testimonial: `“An essential tool for Support Coordinators. It’s not just a platform; it’s a strategic partner. I can track notes, manage participant goals, schedule supports, and handle billing in one place. It has saved me hours every week.”`,
    authorImage: busineessWomanInage,
    author: "Emalee Rose Bayliss",
    authorTitle: "Specialist Senior Support Coordinator",
  },
];
export const accordiaDummyData = [
  {
    id: 1,
    question: "Is Tesseract Apps NDIS-compliant?",
    answer:
      "Yes. Tesseract Apps is purpose-built to align with NDIS regulations. Our platform supports invoicing, claims, participant management, and incident reporting in line with the NDIS Practice Standards.",
  },
  {
    id: 2,
    question: "What can an admin do on the dashboard?",
    answer: "Admins have full visibility and control, including:",
    points: [
      "Managing rosters and shifts",
      "Accessing compliance and payroll tools",
      "Overseeing incident reporting",
      "Generating reports",
      "Customising staff access and permissions",
    ],
  },
  {
    id: 3,
    question: "What is the Incident Management feature?",
    answer:
      "Our Incident Management allows you to record, manage, and track incidents like accidents or compliance breaches. It helps ensure staff and participant safety, meet regulatory obligations, and build a culture of transparency.",
  },
  {
    id: 4,
    question: "Can I Customize the Modules I Use?",
    answer:
      "Absolutely! Tesseract Apps offers flexible, modular plans so you can choose only the features your organisation needs, from HR to scheduling to compliance.",
  },
  {
    id: 5,
    question: "Is the platform secure?",
    answer:
      "Yes. Built on Salesforce, our platform follows ISO 27001-aligned practices, with encryption, access control, audit logs, and continuous security monitoring to keep your data protected.",
  },
  {
    id: 6,
    question: "Do you provide onboarding and support?",
    answer:
      "Yes. We offer step-by-step onboarding, training sessions, and 24/7 Premium Support (available on select plans) to ensure a smooth transition and ongoing success.",
  },
  {
    id: 7,
    question: "Can support workers use Tesseract Apps on mobile?",
    answer:
      "Yes. Tesseract Apps is mobile-friendly. Support workers can log notes, check rosters, and receive alerts in real time — from any device, anywhere.",
  },
  {
    id: 8,
    question: "How do I get started with Tesseract Apps?",
    answer:
      "You can start by selecting the Request a Demo option. Our team will guide you through the setup and ensure the platform is tailored to your organisation's specific needs.",
  },
];
export const dots = {
  dot1: { outer: "#E6EEFF", middle: "#B4CCFF", inner: "#2563EB" },
  dot2: { outer: "#FFE3E3", middle: "#FEB4B4", inner: "#FC4343" },
  dot3: { outer: "#DBF2E8", middle: "#9DD9C2", inner: "#08A965" },
  dot4: { outer: "#DBE8EF", middle: "#9DC2D1", inner: "#3B7793" },
  dot5: { outer: "#F7ECD9", middle: "#E8C9A5", inner: "#D77E1B" },
  dot6: { outer: "#EBE2FE", middle: "#C7ADFC", inner: "#932EFA" },
};
// import detailsHero from "../assets/heroDetails1.png";
import productsHero from "../assets/product overview.png";
// import detailsImage1 from "../assets/detailImage1.png";
// import detailsImage2 from "../assets/detailImage2.png";
// import detailsImage3 from "../assets/detailImage3.png";
import tesseractApsImage from "../assets/Tesseract Apps.png";
export const SubPagesDummyData = {
  Product: {
    page: "Product",
    section1: {
      title: "TesseractApps Built for How You Care",
      page: "Product",
      description:
        "Whether roster changes land at the last minute, staff logs their hours from the road, a new hire needs training, or the clipboard chats just aren’t fast enough anymore, TesseractApps gives you cloud-based answers that work for the care sector. Everything is live and in one place, so your people stay focused on the people they care for.",
      image: productsHero,
    },
    section3: {
      images: [],
      title: "All Your Tools, One Seamless Flow ",
      description:
        "With TesseractApps, rosters, participant data, HR notes, finance checks and operational insights live on the same platform. Jumping between systems is history, and so is double-entry. One connected experience means you see care delivery, HR records and operational numbers side by side. ",
      conclusion:
        "Clever automation and compliance nudges cut admin times, catch corner cases, and keep files in lockstep. Because everything is in tune, you spend fewer hours on paperwork and more on meaningful care. ",
    },
    products: {
      title: "Get Started Today",
      description:
        "See how TesseractApps can simplify your workflows and drive better outcomes for staff and participants alike. ",
      productsData: [
        {
          image: resterManagement,
          title: "Roster Management",
          subTitle:
            "Precision Rostering Simplified for Disability Support Carers",
          description:
            "Tesseract’s Roster Management System is built from the ground up for organisations that support people with disabilities. Blending smart automation with regulatory checks and user-centric design, it helps every team member coordinate rosters decisively and calmly. ",
        },
        {
          image: timesheets,
          title: "Timesheet",
          subTitle:
            "Accurate Tracking. Seamless Approvals. Effortless Payroll. ",
          description:
            "Tesseract’s Timesheet and Attendance Management system redefines how hours, approvals, and payroll are handled. Built for compliance and streamlined for efficiency, it connects to your rostering, payroll, and HR tools, keeping every part of your operation in sync. ",
        },
        {
          image: adminConsole,
          title: "Admin Console",
          description: "Better Settings. Simple Control. Total Facility Focus.",
        },
        {
          image: accessControl,
          title: "Access Control Panel",
          description: "Safe, Central User Command",
        },
        {
          image: hrOperations,
          title: "HR Operations",
          description: "HR Management Built for Thriving Teams!",
          descriptionPoints: [
            "From Hire to Inspire:",
            "TesseractApps steers you through every part of the employee experience, from first hire to lasting inspiration, blending seamless admin with a culture that sticks.",
          ],
        },
        {
          image: tsign,
          title: "T-sign",
          description: "Secure, instant digital signatures.",
          descriptionPoints: [
            "Built Right In. Paperless. Compliant. Effortless. ",
            "Say hello to T-sign, the e-signature feature baked right into TesseractApps, and watch approvals shrink to a single tap. Whether you’re support staff, a manager, or the signature-seeker, you’ll find the same fast, secure, and fully paperless signing experience. ",
            "Wave goodbye to printers, scanners, and those endless signature chases. Open the document, tap to sign, and you’re all set.",
          ],
        },
        {
          image: clockInAndOut,
          title: "Clock In & Clock Out",
          description:
            "Launch a fresh shift in a heartbeat, keep records sharp, and stamp approvals with one tap.",
          conclusion:
            "Simplicity, compliance, and real-time accuracy—every little win flows through a single, purpose-built screen made for you, and now your team tracks shifts right from phones or desktops. ",
        },
        {
          image: participantManagement,
          title: "Participant Management",
          description: "Participant Management Made Effortless",
          descriptionPoints: [
            "Caring for participants shouldn’t feel like a puzzle. With Tesseract’s Participant Module, all the tools you need are in a single smart, secure, and easy-to-navigate space.",
            "From personalised support plans to seamless progress tracking, everything is designed to give you the confidence and clarity you need to provide truly tailored care. ",
          ],
        },
        {
          image: incidentManagement,
          title: "Incident Management",
          description:
            "Insightful Reports. Secure Workspaces. Compliance You Can Count On.",
        },
        {
          image: repository,
          title: "Repository",
          description:
            "Think of it as your intelligent digital drawer—smooth, smart, and designed for one task: holding your vital documents securely and within reach. ",
        },
        {
          image: roleBasedDashboard,
          title: "Role based Dashboard",
          description:
            "Dashboards built for your title! Admins, Roster Managers, Accountants, and Staff view only the info that counts, neatly organised for rapid checks, clear action, and straightforward follow-up. ",
        },
        {
          image: chat,
          title: "ChaT",
          description: "Chat That Works Harder Than Your Morning Coffee!",
          descriptionPoints: [
            "Chat More Productive Than Your First Cup of Coffee! ",
            "Meet Chat—your team’s private, live messaging hub that keeps everyone engaged, up to speed, and moving fast. ",
            "Whether you’re moving between visits, settled at your desk, or juggling overnight shifts, TesseractApps Chat is your pocket-sized command centre for instant updates and effortless coordination. ",
          ],
        },
        {
          image: tesseractApsImage,
          title: "My Profile",
          description:
            "One-stop portal for workforce management and career advancement.",
        },
        {
          image: forms,
          title: "Forms",
          description:
            "Smart Forms: Role-specific forms are designed and managed in-step with the workflow.",
          conclusion:
            "Module-Based Solution: Build, circulate, and oversee forms without leaving the app. ",
        },
        {
          image: accounting,
          title: "Accounting",
          description: `"Smart Accounting, Limitless Possibilities — Your Gateway to Effortless Financial Mastery!"`,
          descriptionPoints: [
            "All-in-One Financial Hub: Seamlessly manage payroll, invoicing, transactions and   compliance — all from one secure, intuitive platform.",
            "Built for Clarity & Growth: Automate routine tasks and   generate reports effortlessly, so you can focus on scaling your business with confidence. ",
          ],
        },
        {
          image: tLearingHub,
          title: "T Learning Hub",
          description:
            "T Learning Hub—an all-in-one companion your every crew unit must master—live, light, always at hand. ",
          conclusion:
            "Grow your team by matching each learning step to their role and daily duties. ",
        },
        {
          image: tesseractApsImage,
          title: "AI Coming Soon",
          description: "Predict. Act. Simplify",
        },
      ],
    },
  },
};

export const itemsPageDummyData = {
  Blog: {
    heading: "Blog",
    subHeading: "Insights, industry updates, and practical tips.",
    text: "Stay informed with expert articles on NDIS compliance, workforce management, digital transformation, and care sector innovation.",
  },
  "Case Studies": {
    heading: "Case Studies",
    subHeading: "Real results from care providers using Tesseract Apps.",
    text: "Learn how organisations across the NDIS, aged care, and allied health sectors improved their workflows and compliance using our platform.",
  },
  Whitepapers: {
    heading: "Whitepapers",
    subHeading: "In-depth guides and research-backed insights.",
    text: "Download strategic resources to help your organisation make confident decisions around software adoption, policy compliance, and workforce optimisation.",
  },
  "Support Documentation": {
    heading: "Support Documentation",
    subHeading: `Step-by-step guidance for platform users.
Access user manuals, feature walkthroughs, and help articles—available 24/7 to support your team across all modules.
`,
    text: "",
  },
};

export const faqPageDummyData = [
  {
    section: "General FAQs",
    faq: [
      {
        question: "What is this platform designed for?",
        answer:
          "This platform offers an all-in-one solution for NDIS providers and ICT organisations to efficiently manage participants, staff, rostering, HR, compliance, incidents, finances, and more - helping ensure smooth operations, data security, and regulatory compliance.",
      },
      {
        question: "Who can use this platform?",
        answer:
          "It is designed for a variety of users including support coordinators, administrative staff, HR professionals, roster managers, finance teams, frontline workers, and ICT administrators. Role-based access ensures everyone sees the tools and information relevant to their responsibilities.",
      },
      {
        question: "Is there role-based access control?",
        answer:
          "Yes. Users only have access to features that align with their roles. For example, staff can submit leave requests but cannot access financial modules.",
      },
      {
        question: "Can I access the platform on mobile devices?",
        answer:
          "Absolutely! The platform is fully responsive and optimized for use on phones and tablets, allowing you to check schedules, complete shift tasks, and more on the go.",
      },
      {
        question: "How secure is the platform?",
        answer:
          "Security is a top priority. The system uses role-based access, audit logs, encrypted data, and secure file storage to protect your information.",
      },
      {
        question: "Is training available for new users?",
        answer:
          "Yes. A dedicated learning hub provides role-specific training videos to help users get up to speed quickly and use the system effectively.",
      },
      {
        question: "Is support available if I need help?",
        answer:
          "Yes. Our support team is available during business hours, and you can submit support tickets through the platform to get assistance.",
      },
      {
        question: "How does the accounting feature work?",
        answer:
          "The platform includes built-in accounting capabilities to manage invoices, payroll, expenses, and generate real-time financial reports.",
      },
      {
        question: "Can the software be customised for my organisation?",
        answer:
          "Yes, it can be tailored to fit your organisation's workflows, user roles, and reporting needs for a better fit.",
      },
    ],
  },
  {
    section: "Product-Wise FAQs",
    data: [
      {
        title: "Admin Console",
        faq: [
          {
            question: "How can I update my organisation's details?",
            answer:
              "Basic organisational information can be updated directly through the admin control panel. For changes involving key or sensitive data, assistance from the support team is available to ensure accuracy and security.",
          },
          {
            question: "What settings can I configure in the admin console?",
            answer:
              "You can manage various settings such as support email addresses, support team, shift timings, and expense reimbursements. More advanced settings, including user roles and types, are managed in collaboration with the support team.",
          },
          {
            question: "Can I create and manage multiple facilities?",
            answer:
              "Yes, the platform allows you to add and oversee multiple facility profiles, including details like services provided, contact information, and location addresses.",
          },
        ],
      },
      {
        title: "Access Control Panel",
        faq: [
          {
            question: "What do I do if I forget my username or password?",
            answer:
              "If you forget your username, please contact your system administrator who can provide it. For password resets, administrators can send you a secure reset link via email, which you can use within a limited time frame to update your password safely.",
          },
          {
            question: "Can I upload multiple user accounts at once?",
            answer:
              "Yes, the platform supports bulk uploads, allowing you to add multiple user or staff records in a single step. This feature simplifies the process of onboarding large groups efficiently.",
          },
        ],
      },
      {
        title: "HR Operations",
        faq: [
          {
            question: "How are staff created and managed?",
            answer:
              "Staff profiles are created and maintained within the HR feature, where you can securely record personal details, employment information, banking data, and manage essential documents and statuses.",
          },
          {
            question: "How is staff training managed?",
            answer:
              "Training assignments and progress tracking are integrated with a dedicated learning platform, allowing seamless monitoring of course completions and evaluations.",
          },
          {
            question: "Can I monitor staff performance?",
            answer:
              "Yes, the system supports performance management activities including goal setting, periodic reviews, and evaluations to help support staff development.",
          },
        ],
      },
      {
        title: "Roster Management",
        faq: [
          {
            question: "How are shifts categorised?",
            answer:
              "Shifts are organised by type, such as morning, afternoon, night, sleepover, or custom shifts. Each type is visually distinguished with unique colors and time settings for easy identification.",
          },
          {
            question: "What does the auto-scheduling feature do?",
            answer:
              "Our platform includes an intelligent scheduling engine that helps us assign the most suitable staff to open shifts. It considers availability, staff preferences, and relevant employment guidelines to streamline roster management.",
          },
          {
            question: "What are group shifts and how do they work?",
            answer:
              "Group shifts allow flexible staffing arrangements such as:",
            points: [
              "One participant supported by multiple staff",
              "One staff member supporting multiple participants",
              "Multiple staff and participants assigned together at the same location",
            ],
          },
          {
            question: "Can I add breaks during shifts?",
            answer:
              "Yes, breaks can be included and marked as paid or unpaid. These are automatically factored into timesheets and payroll calculations.",
          },
          {
            question: "How do employees access their schedules online?",
            answer:
              "Employees log in to their dedicated accounts where they can view their personalised roster and upcoming shifts through an intuitive roster feature.",
          },
          {
            question: "Can employees see other people's schedules?",
            answer:
              "Employees have permission to view only their own schedules, maintain privacy, and focus on their individual shifts.",
          },
          {
            question: "How do I set up recurring shifts?",
            answer:
              "When creating a new shift, you can set it to repeat a schedule that suits your needs - such as daily, weekly, fortnightly, or monthly. You can also define when the recurrence should end. Public holidays are automatically factored into the schedule when applicable.",
          },
          {
            question: "What shift types are supported?",
            answer: "Tesseract supports:",
            points: [
              "General",
              "Morning / Afternoon / Night",
              "Sleepover (with allowance & work hours)",
              "Custom shifts (including long-duration)",
            ],
          },
          {
            question: "How are public holidays handled in shifts?",
            answer: "",
            points: [
              "Public holiday rates apply automatically during manual shift creation and Auto-scheduling engine execution as well",
              "A built-in public holiday calendar is used for reference.",
            ],
          },
          {
            question: "How are timesheets created?",
            answer:
              "Timesheets are automatically generated based on your recorded shift activity. Organisations can choose to have these reviewed manually or approved automatically, depending on internal preferences.",
          },
          {
            question: "Do timesheets include overtime and penalty rates?",
            answer:
              "Yes, timesheets account for applicable overtime and penalty rates, including scenarios such as extended hours, short breaks between shifts, and shifts worked on weekends or public holidays.",
          },
          {
            question: "How are sleepover shifts reflected in timesheets?",
            answer:
              "Sleepover shifts are calculated with applicable allowances, and any active work during the sleepover period is also recorded and reflected in the final timesheet.",
          },
          {
            question: "Where can I access my timesheet and wage reports?",
            answer:
              "Employees and staff can securely access and download their timesheet records, payslips, and wage reports directly from their personal profile area within the platform.",
          },
          {
            question: "Can staff claim expenses after a shift?",
            answer:
              "Yes, staff members can submit reimbursement requests for eligible shift-related expenses - such as tolls, parking, or meals - through a streamlined post-shift process.",
          },
          {
            question: "How is mileage calculated?",
            answer:
              "Mileage claims are automatically calculated based on the type of vehicle used and pre-configured per-kilometre rates. This ensures accurate and fair reimbursements for travel.",
          },
          {
            question: "What kind of notifications do users receive?",
            answer: "Users receive timely alerts for key actions, including:",
            points: [
              "Shift assignments, rejections, and cancellations",
              "Expression of Interest (EOI) allocations",
              "Sign-in and sign-out reminders (typically sent 15 minutes before the scheduled time)",
            ],
          },
          {
            question:
              "What is an EOI (Expression of Interest) and how is it used?",
            answer:
              "The EOI feature allows coordinators to broadcast open shifts to eligible staff members. Staff can express interest, and shifts are then assigned based on availability and suitability, helping to fill gaps quickly and fairly.",
          },
        ],
      },
      {
        title: "T-sign",
        faq: [
          {
            question: "Where can I view signed documents?",
            answer:
              "Access to signed documents is restricted based on user roles to ensure privacy and security. Typically, only authorised users—such as designated administrators or HR personnel—can view these documents. Access permissions are managed internally by your organisation's admin team.",
          },
          {
            question: "How will I know when a document needs my signature?",
            answer:
              "You'll receive a notification when a document is assigned for your review or signature. Simply follow the prompt to access, review, and complete the signing process.",
          },
          {
            question: "Is the signing process secure and compliant?",
            answer:
              "Yes, all digital signatures are protected by encryption and meet relevant industry compliance standards. Access and activity are logged for transparency and legal validation.",
          },
        ],
      },
      {
        title: "Clock In & Clock Out",
        faq: [
          {
            question: "When can I sign in for my shift?",
            answer:
              "You can sign in shortly before your scheduled start time. The system allows sign-in access within a defined window to ensure accurate time tracking.",
          },
          {
            question: "What if I work beyond my scheduled hours?",
            answer:
              "If your shift extends, you'll have the opportunity to record additional hours—such as overtime or sleepover shifts—after your shift ends through a follow-up submission process.",
          },
          {
            question: "Do I need supervisor's approval?",
            answer:
              "Yes, supervisor sign-off is required before finalising your shift submission. This helps maintain accountability and ensures that shift records are verified.",
          },
          {
            question: "What if I arrive late for a shift?",
            answer:
              "If you're unable to sign in at the scheduled time, you can submit a request for a manual sign-in. This request will be reviewed and approved by the appropriate team member to maintain shift integrity.",
          },
        ],
      },
      {
        title: "Participants Management",
        faq: [
          {
            question: "How do I add a new participant?",
            answer:
              "Authorised users can create and manage participant profiles through the platform. This includes essential details such as care information, service plans, and relevant funding data to support comprehensive participant management.",
          },
          {
            question: "What is a Participant Journal?",
            answer:
              "The journal is a secure space where approved staff can record important updates such as care notes, progress observations, or support instructions. It ensures continuity and clarity in participant care.",
          },
          {
            question: "Can participant funding be tracked?",
            answer:
              "Yes, funding can be monitored to ensure it is properly allocated across services and agreements. This helps maintain transparency and accountability in line with organisational and funding requirements.",
          },
          {
            question: "What is the Risk Profile used for?",
            answer:
              "Risk Profiles allow teams to document participant-specific risk factors. These profiles support safe care planning and help ensure that appropriate protocols are followed by all involved staff.",
          },
        ],
      },
      {
        title: "Incident Management",
        faq: [
          {
            question: "How do I report an incident?",
            answer:
              "Incidents can be reported directly within the platform through a guided process tailored to your role. The system supports accurate documentation and allows for follow-up actions and reporting to ensure incidents are addressed appropriately.",
          },
          {
            question: "Can I edit an incident after it's been submitted?",
            answer:
              "You can edit incident records as long as they are still open. Once an incident is marked as resolved, the record becomes locked to maintain data integrity and meet compliance standards.",
          },
          {
            question: "Who can see reported incidents?",
            answer:
              "Access to incident records is based on user permissions. Typically, only authorised personnel - such as administrators or designated reviewers - have broader visibility across submitted reports.",
          },
        ],
      },
      {
        title: "Repository",
        faq: [
          {
            question: "What is the repository used for?",
            answer:
              "The repository serves as a central hub for storing and managing internal documents. Users can upload, organise, and share files in a secure and structured environment, making it easy to keep important resources accessible and up to date.",
          },
          {
            question: "Who can delete files from the repository?",
            answer:
              "File deletion is restricted to document owners or authorised administrators, ensuring proper control and preventing accidental loss of important information.",
          },
          {
            question: "Can I control who accesses specific files?",
            answer:
              "Yes, access permissions can be provided to specific roles or individual users, ensuring that sensitive documents are only visible to those who need them.",
          },
        ],
      },
      {
        title: "Role-based Dashboard",
        faq: [
          {
            question: "How often is the data updated?",
            answer:
              "Data refresh frequency, Real-time: Some dashboards support live data feeds. Hourly/Daily: Others may update at regular intervals.",
          },
          {
            question: "Who can access the dashboard?",
            answer:
              "Access depends on your role and permissions, Admins: Full access to all data and settings. Managers: Access to team-specific data. Users: Access limited to personal or assigned data.",
          },
        ],
      },
      {
        title: "ChaT",
        faq: [
          {
            question: "Is the internal ChaT secure?",
            answer:
              "Yes, communication is fully secured and restricted to verified users within your organisation. It is not linked to any external messaging platforms, ensuring privacy and data protection.",
          },
          {
            question: "Can I share files in ChaT?",
            answer:
              "Yes, you can securely share documents such as PDFs, images, and notes in both group chats and private messages, supporting seamless collaboration.",
          },
          {
            question: "Can I search for previous messages?",
            answer:
              "Yes, users can search past conversations by keyword or participant name. Admins also have access to detailed message logs for transparency and accountability.",
          },
        ],
      },
      {
        title: "My Profile",
        faq: [
          {
            question: "Where can I complete my training?",
            answer:
              "All required training can be accessed directly through your profile once you're logged onto the platform. The training experience is fully online, allowing you to complete modules at your own pace, anytime, and from anywhere.",
            conclusion:
              "You'll be notified when new training is assigned, and your progress is tracked to ensure completion and compliance with organisational standards. This streamlined process helps you stay current with certifications, policies, and role-specific learning—all within a secure and user-friendly environment.",
          },
          {
            question:
              "How can I prepare for and succeed in my performance review?",
            answer:
              "Performance reviews within our platform are designed to support personal development and align individual goals with organisational expectations. These reviews are initiated by your organisation's administrators and follow a structured process. To succeed in your performance review:",
            points: [
              "Stay engaged with your responsibilities and objectives throughout the review period.",
              "Access and complete your self-assessment through your profile when notified.",
              "Be honest and reflective in your responses, highlighting achievements and identifying areas for growth.",
              "Use feedback constructively, as the final review includes input from designated reviewers or approvers who provide valuable insights.",
            ],
            conclusion:
              "The performance review process is transparent, fair, and supportive of your professional development, ensuring both you and your organisation grow together.",
          },
          {
            question: "How do I request leave?",
            answer:
              "Users can submit leave requests through their profile section. Leave applications are routed to approvers for review and approval within the platform.",
          },
        ],
      },
      {
        title: "Forms",
        faq: [
          {
            question: "Can I create custom forms for my organisation?",
            answer:
              "Yes, our platform supports the creation of flexible forms tailored to your organisation's needs—whether for client onboarding, staff documentation, or operational workflows. The process is intuitive and requires no technical expertise.",
          },
          {
            question: "How are forms shared or assigned to users?",
            answer:
              "Forms can be made available based on user roles or the specific context in which they're needed. This ensures the right people access the right forms at the right time, improving efficiency and compliance.",
          },
          {
            question: "Is there a way to track form submissions?",
            answer:
              "Yes, all submitted forms are recorded with timestamps and traceable activity history. You can also generate reports to review submission data, helping you maintain accurate records and accountability across your organisation.",
          },
        ],
      },
      {
        title: "Accounting",
        faq: [
          {
            question: "Can I manage payroll through the platform?",
            answer:
              "Yes, the platform supports payroll processing, including pay run management and payslip access. You can also generate the necessary files for banking and compliance with ease.",
          },
          {
            question: "How are invoices managed in the system?",
            answer:
              "Invoices can be efficiently created, tracked, and managed—whether they're drafts, issued, or received. The platform also aligns financial data with your organisation's accounting structure for consistent recordkeeping.",
          },
          {
            question:
              "What is a general ledger and is it available in the system?",
            answer:
              "A general ledger is a comprehensive record of an organisation's financial transactions. It includes essential details such as dates, amounts, descriptions, debits, and credits, which are used to generate key financial reports like income statements and balance sheets. The system maintains this record automatically as transactions occur.",
          },
          {
            question: "Does the platform support Single Touch Payroll (STP)?",
            answer:
              "Yes, Single Touch Payroll (STP) reporting is supported, helping ensure compliance with government regulations by integrating payroll information with your accounting records.",
          },
          {
            question: "Can I track invoices issued to participants?",
            answer:
              "Yes, all financial transactions - including participant-related invoices - can be tracked within the system. These records are categorised and accessible through standard financial structures, offering full visibility across accounts.",
          },
          {
            question: "Can I generate wage reports?",
            answer:
              "Yes, wage reports are available and can be exported in commonly used formats such as Excel, making them easy to review, share, or store for compliance and analysis.",
          },
        ],
      },
      {
        title: "T Learning Hub",
        faq: [
          {
            question: "Who has access to training content?",
            answer:
              "Training access is streamlined for each user's role. This ensures that individuals see only the content relevant to their responsibilities, supporting more efficient and targeted learning.",
          },
          {
            question: "Can I track my training progress?",
            answer:
              "Yes, users can easily monitor their training status, view which courses have been completed, and revisit learning materials - such as videos - whenever needed.",
          },
          {
            question: "Is the training library regularly updated?",
            answer:
              "Yes, the training content is refreshed on an ongoing basis to align with platform enhancements, new features, and evolving best practices, ensuring users always have access to the most up-to-date information.",
          },
        ],
      },
    ],
  },
  {
    section: "Timesheet FAQs",
    faq: [
      {
        question: "Where can I access my timesheet and wage reports?",
        answer:
          "Employees and staff can securely access and download their timesheet records, payslips, and wage reports directly from their personal profile area within the platform.",
      },
      {
        question: "Can I duplicate or carry over entries from previous days?",
        answer:
          "Yes, our system includes a Clone feature that streamlines daily logging by reducing repetitive input. This is especially useful for consistent task schedules.",
      },
      {
        question: "Is there support for approval of the timesheet?",
        answer:
          "Yes, timesheets follow approval flow. Approvers can review, comment and take action based on role permissions and business rules.",
      },
    ],
  },
];
import ourMissionImage from "../assets/m.png";
import ourVisionImage from "../assets/V.png";
export const aboutUsPageData = {
  "Our Story": {
    title: "Our Story",
    data: [
      "Tesseract Apps was born from a simple yet impactful conversation during a local cricket match in 2022—an exchange that sparked the vision for a smarter, more connected way to support care and NDIS providers.",
      "In 2023, we built our foundation with a Human-Centred Design approach, grounded in empathy, user research, and real-world collaboration. Through rapid prototyping, iterative development, and continuous feedback from care professionals, we ensured every feature addressed real operational challenges.",
      "By mid-2024, we launched the beta version of our first product, T-NDIS, and onboarded over 10 providers whose practical insights were instrumental in refining the platform.",
      "In January 2025, Tesseract Apps officially went live—delivering a fully operational, market-ready solution that integrates everything we learned from our early adopters.",
      "Today, Tesseract Apps stands as a powerful, Salesforce-based platform purpose-built for the Australian care sector. We help organisations navigate NDIS compliance, simplify operations, and ultimately deliver better outcomes for participants and staff alike.",
    ],
  },
  "Our Mission & Vision": [
    {
      image: ourMissionImage,
      title: "Our Mission",
      data: "To empower businesses worldwide with innovative, role-specific people management software that is accessible across industries, enabling streamlined operations and enhanced productivity.",
    },
    {
      image: ourVisionImage,
      title: "Our Vision",
      data: "To revolutionise the future of business management, fostering collaboration, efficiency, and growth through technology that adapts to the ever-changing needs of industries and their people.",
    },
  ],
};
import MaheshwariImage from "../assets/MAHESWARI ADABALA - OPERATIONS MANAGER.jpg";
import ManimalaImImage from "../assets/MANIMALA JEEBU - SOFTWARE ENGINEER.jpg";
import MeghanaImage from "../assets/MEGHNA THAPA - ACCOUNT MANAGER.jpg";
import DeepakRaj from "../assets/DEEPAK RAJ KORUKONDA - SOFTWARE ENGINEER.jpg";
import DivyaRani from "../assets/DIVYARANI MACHCHA - BUSINESS ANALYST.jpg";
import PratyushaImage from "../assets/JINKA PRATHYUSHA - SOFTWARE ENGINEER.jpg";
import PraveenImage from "../assets/PRAVEEN SHESHAM - TEAM LEAD.jpg";
import RiyazImage from "../assets/RIYAZAT JAFFAR KAZARANI - UI GRAPHIC DESIGNER.jpg";
import KrishnaImage from "../assets/SAI KRISHNA MUNIRATHINAM - TEST ENGINEER.jpg";
import SarojaImage from "../assets/SAROJA TENNETY - TECHNICAL ARCHITECT.jpg";
import TejithaImage from "../assets/TEJITHA YELLAMELLI - SOFTWARE ENGINEER.jpg";
import SushimithaImage from "../assets/SUSHIMITHA KORUKONDA - TEAM MANAGER.jpg";
import RajKumarImage from "../assets/BOBBILI RAJKUMAR - PRODUCT DESINGER.jpg";
import PrameelaImage from "../assets/PRAMEELA KESAVADASU - SENIOR TEST ENGINEER.jpg";
import PrashanthImage from "../assets/PRASHANTH RAGULA - SENIOR SOFTWARE ENGINEER.jpg";
import EashwarImage from "../assets/SAI ESWAR KANDREGULA - TEST ENGINEER.jpg";
import SaranImage from "../assets/SINGAREDDY SARAN KUMAR REDDY - SENIOR SOFTWARE ENGINEER.jpg";
import SuryaImage from "../assets/SURYAVAMSI DOMMETI - SOFTWARE ENGINEER.jpg";
import NagendraImage from "../assets/NAGENDRA - CO FOUNDER.jpg";
import KranthiImage from "../assets/KRANTHI KAKKERLA - CO FOUNDER.jpg";
import RevanthImage from "../assets/REVANTH-CEO.png";
import BelleImage from "../assets/BELLE BAI - MARKETING EXECUTIVE.jpg";
import TomerImage from "../assets/TOMER DORON - SOLUTIONS CONSULTANT.jpg";
import DarshanImage from "../assets/DARSHAN M SHELAT - SOLUTIONS CONSULTANT.jpg";
import sureshImage from "../assets/SURESH-COFOUNDER.png";
import rameshImage from "../assets/RameshAnnabhimoju.png";
import sumanthImage from "../assets/SUMANTH-COFOUNDER.png";

// export const teamsPageData = {
//   CEO: [
//     {
//       name: "REVANTH",
//       designation: "FOUNDER",
//       image: RevanthImage,
//     },
//   ],
//   Directors: [
//     {
//       name: "NAGENDRA",
//       designation: "CO FOUNDER",
//       image: NagendraImage,
//     },
//     {
//       name: "SURESH",
//       designation: "CO FOUNDER",
//       image: sureshImage,
//     },
//     {
//       name: "SUMANTH",
//       designation: "CO FOUNDER",
//       image: sumanthImage,
//     },

//     {
//       name: "KRANTHI KAKKERLA",
//       designation: "CO FOUNDER",
//       image: KranthiImage,
//     },
//   ],
//   "BUSINESS & MARKETING": [
//     {
//       name: "TOMER DORON",
//       designation: "SOLUTIONS CONSULTANT",
//       image: TomerImage,
//     },
//     {
//       name: "BELLE BAI",
//       designation: "MARKETING EXECUTIVE",
//       image: BelleImage,
//     },
//     {
//       name: "MAHESWARI ADABALA",
//       designation: "OPERATIONS MANAGER",
//       image: MaheshwariImage,
//     },
//     {
//       name: "MEGHNA THAPA",
//       designation: "ACCOUNT MANAGER",
//       image: MeghanaImage,
//     },
//     {
//       name: "SUSHIMITHA KORUKONDA",
//       designation: "TEAM MANAGER",
//       image: SushimithaImage,
//     },
//     {
//       name: "DEEPAK RAJ KORUKONDA",
//       designation: "SOFTWARE ENGINEER",
//       image: DeepakRaj,
//     },
//     {
//       name: "DARSHAN M SHELAT",
//       designation: "SOLUTIONS CONSULTANT",
//       image: DarshanImage,
//     },
//     {
//       name: "DIVYARANI MACHCHA",
//       designation: "PRODUCT MANAGER",
//       image: DivyaRani,
//     },
//     {
//       name: "TEJITHA YELLAMELLI",
//       designation: "PRODUCT MANAGER",
//       image: TejithaImage,
//     },
//   ],
//   Team: [
//     {
//       name: "SAROJA TENNETY",
//       designation: "DELIVERY MANAGER",
//       image: SarojaImage,
//     },

//     {
//       name: "PRAVEEN SHESHAM",
//       designation: "TEAM MANAGER",
//       image: PraveenImage,
//     },
//     {
//       name: "SINGAREDDY SARAN KUMAR REDDY",
//       designation: "TEAM LEAD",
//       image: SaranImage,
//     },
//     {
//       name: "PRASHANTH RAGULA",
//       designation: "SENIOR SOFTWARE ENGINEER",
//       image: PrashanthImage,
//     },
//     {
//       name: "SURYAVAMSI DOMMETI",
//       designation: "SOFTWARE ENGINEER",
//       image: SuryaImage,
//     },
//     {
//       name: "MANIMALA JEEBU",
//       designation: "SOFTWARE ENGINEER",
//       image: ManimalaImImage,
//     },
//     {
//       name: "SAI ESWAR KANDREGULA",
//       designation: "SOFTWARE ENGINEER",
//       image: EashwarImage,
//     },
//     {
//       name: "RAMESH ANNABHIMOJU",
//       designation: "SENIOR SOFTWARE ENGINEER",
//       image: rameshImage,
//     },
//     {
//       name: "JINKA PRATHYUSHA",
//       designation: "SOFTWARE ENGINEER",
//       image: PratyushaImage,
//     },
//     {
//       name: "PRAMEELA KESAVADASU",
//       designation: "QA MANAGER",
//       image: PrameelaImage,
//     },
//     {
//       name: "SAI KRISHNA MUNIRATHINAM",
//       designation: "TEST ENGINEER",
//       image: KrishnaImage,
//     },
//     {
//       name: "BOBBILI RAJKUMAR",
//       designation: "PRODUCT DESINGER",
//       image: RajKumarImage,
//     },

//     {
//       name: "RIYAZAT JAFFAR KAZARANI",
//       designation: "UI GRAPHIC DESIGNER",
//       image: RiyazImage,
//     },
//   ],
// };
export const teamsPageData = [
  {
    name: "REVANTH",
    designation: "FOUNDER & CEO",
    image: RevanthImage,
  },

  {
    name: "NAGENDRA",
    designation: "CO FOUNDER",
    image: NagendraImage,
  },
  {
    name: "SURESH",
    designation: "CO FOUNDER",
    image: sureshImage,
  },
  {
    name: "SUMANTH",
    designation: "CO FOUNDER",
    image: sumanthImage,
  },

  {
    name: "KRANTHI KAKKERLA",
    designation: "CO FOUNDER",
    image: KranthiImage,
  },

  {
    name: "TOMER DORON",
    designation: "SOLUTIONS CONSULTANT",
    image: TomerImage,
  },
  {
    name: "BELLE BAI",
    designation: "MARKETING EXECUTIVE",
    image: BelleImage,
  },
  {
    name: "MAHESWARI ADABALA",
    designation: "OPERATIONS MANAGER",
    image: MaheshwariImage,
  },
  {
    name: "MEGHNA THAPA",
    designation: "ACCOUNT MANAGER",
    image: MeghanaImage,
  },
  {
    name: "SUSHIMITHA KORUKONDA",
    designation: "TEAM MANAGER",
    image: SushimithaImage,
  },
  {
    name: "DEEPAK RAJ KORUKONDA",
    designation: "SOFTWARE ENGINEER",
    image: DeepakRaj,
  },
  {
    name: "DARSHAN M SHELAT",
    designation: "SOLUTIONS CONSULTANT",
    image: DarshanImage,
  },
  {
    name: "SAROJA TENNETY",
    designation: "DELIVERY MANAGER",
    image: SarojaImage,
  },
  {
    name: "DIVYARANI MACHCHA",
    designation: "PRODUCT MANAGER",
    image: DivyaRani,
  },
  {
    name: "TEJITHA YELLAMELLI",
    designation: "PRODUCT MANAGER",
    image: TejithaImage,
  },
  {
    name: "PRAVEEN SHESHAM",
    designation: "TEAM MANAGER",
    image: PraveenImage,
  },
  {
    name: "SINGAREDDY SARAN KUMAR REDDY",
    designation: "TEAM LEAD",
    image: SaranImage,
  },
  {
    name: "PRASHANTH RAGULA",
    designation: "SENIOR SOFTWARE ENGINEER",
    image: PrashanthImage,
  },
  {
    name: "SURYAVAMSI DOMMETI",
    designation: "SOFTWARE ENGINEER",
    image: SuryaImage,
  },
  {
    name: "MANIMALA JEEBU",
    designation: "SOFTWARE ENGINEER",
    image: ManimalaImImage,
  },
  {
    name: "SAI ESWAR KANDREGULA",
    designation: "SOFTWARE ENGINEER",
    image: EashwarImage,
  },
  {
    name: "RAMESH ANNABHIMOJU",
    designation: "SENIOR SOFTWARE ENGINEER",
    image: rameshImage,
  },
  {
    name: "JINKA PRATHYUSHA",
    designation: "SOFTWARE ENGINEER",
    image: PratyushaImage,
  },
  {
    name: "PRAMEELA KESAVADASU",
    designation: "QA MANAGER",
    image: PrameelaImage,
  },
  {
    name: "SAI KRISHNA MUNIRATHINAM",
    designation: "TEST ENGINEER",
    image: KrishnaImage,
  },
  {
    name: "BOBBILI RAJKUMAR",
    designation: "PRODUCT DESINGER",
    image: RajKumarImage,
  },

  {
    name: "RIYAZAT JAFFAR KAZARANI",
    designation: "UI GRAPHIC DESIGNER",
    image: RiyazImage,
  },
];

export const blogsData = [
  {
    blogTitle:
      "Protecting Participant Data: Why Security Matters for NDIS and Care Providers",
    blogIntro:
      "Every day, disability support and aged care providers collect sensitive information — including health records, personal details, and care plans — that participants trust us to protect. Strong data security isn’t a luxury, it’s essential for compliance, service continuity, and, most importantly, client trust.",
    blogText: [
      "Cyberattacks targeting the healthcare and disability sectors are rising. In July 2024, for example, a ransomware attack on prescription service MediSecure exposed the health and personal data of approximately 12.9 million Australians. Alarming figures show that 41% of Australian healthcare organisations experienced a cyberattack in 2023. These breaches can compromise privacy, disrupt care delivery, and result in serious regulatory and reputational consequences.",
    ],
    blogContent: [
      {
        contentHeading: "Real Breaches Highlight the Risks",
        contentIntro:
          "Recent incidents serve as stark reminders of what’s at stake:",
        contentText: [],
        contentPoints: [
          {
            subHeading: "MediSecure (2024): ",
            subText:
              "A cyberattack exposed prescription and health data of millions of Australians.",
          },
          {
            subHeading: "CTARS (2022): ",
            subText:
              'An NDIS case management software platform was breached, with a "large volume" of sensitive participant and caregiver data compromised.',
          },
          {
            subHeading: "Eastern Health (2021): ",
            subText:
              "Four Melbourne hospitals were forced to postpone surgeries due to a suspected ransomware incident.",
          },
          {
            subHeading: "Engedi (2024): ",
            subText:
              "A Queensland-based NDIS provider suffered a ransomware attack that resulted in staff data being leaked on the dark web.",
          },
        ],
        contentConclusion:
          "These examples illustrate that even responsible care organisations can be targeted — and that the fallout can be both operational and deeply personal for clients.",
      },
    ],
    blogConclusion: "",
    sources: [
      {
        text: "Australian Government Department of Home Affairs. MediSecure Cyber Security Incident",
        link: "https://www.homeaffairs.gov.au/about-us/our-portfolios/cyber-security/cyber-coordinator/medisecure-cyber-security-incident ",
      },
    ],
  },
];
import adminImage from "../assets/Role Administrator.png";
import rosterManager from "../assets/Product Roster management.png";
import ndisStaff from "../assets/Role NDIS staff.png";
import hr from "../assets/Role HR manager.png";
import accountingImage from "../assets/Role Accounting.png";
import participantsImage from "../assets/Role Participants.png";
export const byRoleData = {
  Administrator: {
    hero: {
      image: adminImage,
      title: "Administrator",
      page: "Administrator",
      description: `Organisation administrators gain complete access to the application, enabling them to manage users, adjust settings, and supervise every functional module across the platform. This consolidated control not only eases administrative tasks but also improves visibility throughout the entire system.`,
    },
    details: {
      points: [
        {
          dot: dots.dot1,
          title: "",
          description:
            "The platform features a modular design, with every module—User Management, Reporting, Analytics, Communication, and others—fully integrated into one coherent system. This structure fosters streamlined workflows, a consistent user interface, and efficient data exchange among the modules.",
        },
        {
          dot: dots.dot2,
          title: "",
          description: `To ensure a seamless rollout, high performance, and ongoing support, our technical team requires a small number of specific permissions. These access rights are assigned to specific modules and are restricted to what is strictly necessary for monitoring, configuration, and maintenance. All permissions are regulated by stringent security protocols to safeguard your data and your privacy.`,

          conclusion:
            "By providing the necessary access during the initial setup, you enable us to deliver a secure, stable, and fully optimised experience for your organisation.",
        },
      ],
    },
  },
  "Roster Manager": {
    hero: {
      image: rosterManager,
      title: "Roster Manager",
      page: "Roster Manager",
      description:
        "Roster Managers are given access to scheduling and staffing modules in the application. This gives them the ability to create, update and manage the staff rosters more effectively and ensure that they are correctly staffed and work is in line with the needs of the organisation. They also have permissions to track availability, shift allocation and NDIS compliance in real-time.",
    },
    details: {
      points: [
        {
          dot: dots.dot1,
          title: "",
          description: `Due to the support of User Management and Communication modules, Roster Managers have the convenience of simplified work processes and overview of staffing schedules. This eliminates conflicts, increases resource planning and operational efficiency. `,

          conclusion:
            "All access is controlled by tight security procedures to ensure that sensitive information is secured while allowing the Roster Manager to do their job. ",
        },
        {
          dot: dots.dot2,
          title: "Role Purpose",
          description:
            "This role is purpose-built to give managers the tools they need to:",
          descriptionPoints: [
            "Maintain accurate, compliant rosters",
            "Ensure adequate shift coverage",
            "Set staff scheduling according to individual needs of participants.",
            "Coordinate effectively across teams",
            "Restricting access only to the necessary modules ensures operational efficiency and data security within the organisation.",
          ],
        },
      ],
    },
  },
  Accountant: {
    hero: {
      image: accountingImage,
      title: "Accountant",
      page: "Accountant",
      description:
        "The Accountant Administrator is granted secure access to the finance modules encompassing Billing, Invoicing, Claims, and Financial Reporting. Such access facilitates precise transaction recording, reconciliation, and compliance with regulatory obligations including directives of the National Disability Insurance Scheme (NDIS).",
    },
    details: {
      points: [
        {
          dot: dots.dot1,
          title: "",
          description: `The modules exhibit seamless integration with User Management and Service Delivery, allowing financial information to propagate throughout the system with minimal manual entry. This integration not only strengthens reconciliation processes but also enhances overall financial governance. `,
          conclusion:
            "User permissions are confined to finance-related functions, and every transaction is recorded and subjected to ongoing monitoring within an established framework of data protection and audit trails. ",
        },
        {
          dot: dots.dot2,
          title: "Role Purpose",
          description: "The Accountant role is designed to:",
          descriptionPoints: [
            "Supervise payroll processing and regulatory compliance",
            "Administer all salary-related financial transactions",
            "Guarantee reconciliation with bank and accounting records",
            "Facilitate financial audits and transparent reporting",
          ],
          conclusion:
            "By confining access to vital financial modules, the role reinforces data security while sustaining operational efficiency, thereby ensuring the seamless execution of payroll while safeguarding sensitive data throughout the system.",
        },
      ],
    },
  },
  "NDIS Staff": {
    hero: {
      image: ndisStaff,
      title: "NDIS Staff",
      page: "NDIS Staff",
      description:
        "The access of NDIS Staff is controlled based on their function in service coordination, plan management, as well as within compliance management of the NDIS governance framework. They have the capacity to view and manage participant plans, monitor and document service delivery, and ensure alignment between the delivery and funded supports. ",
    },
    details: {
      points: [
        {
          dot: dots.dot1,
          title: "",
          description: `Their access is limited to governance controls on outcomes and compliance management. Furthermore, visibility is designed to protect privacy and role-based overlaps.`,
        },
        {
          dot: dots.dot2,
          title: "",
          description: `The integration between modules permits cross-role collaboration among NDIS staff. At the same time, sensitive health and personally identifiable information is secured by the platform’s security infrastructure. `,
        },
        {
          dot: dots.dot3,
          title: "Role Purpose",
          description: "The NDIS Staff role is to:",
          descriptionPoints: [
            "Facilitate high-quality care delivery by support workers for participants",
            "Equip workers with relevant and current information.",
            "Enable secure communication within the team.",
            "uphold compliance with document controls and incident reporting. ",
          ],
          conclusion:
            "With scoped access, privacy and organisational integrity with governed access controls is assured for the NDIS Staff when fulfilling their assigned roles and responsibilities. ",
        },
      ],
    },
  },
  "HR Manager": {
    hero: {
      image: hr,
      title: "HR Manager",
      page: "HR Manager",
      description:
        "HR Managers gain access to the full suite of employee lifecycle management tools, covering everything from recruitment and onboarding to leave management, training compliance, and personnel records. This connectivity ensures they can oversee every stage of the employee journey, keep data current, monitor certification renewals, and manage internal communications seamlessly.",
      conclusion:
        "The same access lets them work together with Roster Management and Reporting, allowing them to ensure staffing matches organisational requirements and meets all regulatory obligations.",
    },
    details: {
      points: [
        {
          dot: dots.dot1,
          title: "",
          description: `Robust access controls and encryption keep all HR data secure, guaranteeing the confidentiality of records and compliance with workforce laws and internal policies.`,
        },
        {
          dot: dots.dot2,
          title: "Role Purpose",
          description: "The HR Admin role empowers HR teams to:",
          descriptionPoints: [
            "Keep employee records precise and up to date",
            "Promote ongoing development and manage performance effectively.",
            "Streamline recruitment processes and oversee leave management.",
            "Regulate user access rights within the system.",
            "Guard data security and uphold organisational compliance obligations.",
          ],
          conclusion: "",
        },
      ],
    },
  },
  Participant: {
    hero: {
      image: participantsImage,
      title: "Participant",
      page: "Participant",
      description:
        "Participants have secure, role-limited access to features that foster transparency and owner-level engagement in their care journey. They can view personal information, individual support plans, caregiver schedules, communication history, and service records.",
    },
    details: {
      points: [
        {
          dot: dots.dot1,
          title: "",
          description: `Designed to be intuitive, inclusive, and respectful of privacy, the interface lets participants message their care team, monitor their progress, and provide ongoing feedback.`,
          conclusion:
            "Access is strictly confined to the individual’s records, and privacy controls and security measures ensure that personal data is always protected.",
        },
        {
          dot: dots.dot2,
          title: "Role Purpose",
          description: "The Participant Login role is designed to:",
          descriptionPoints: [
            "Encourage participant engagement and openness in all processes. ",
            "Lighten the administrative burden on support coordinators and allied personnel.",
            "Enhance clarity and precision in documentation and communication.",
            "Strengthen confidence by letting everyone store and view the same support data.",
          ],
          conclusion:
            "With this role, NDIS organisations can create a tailored and scalable digital experience for clients, while still safeguarding and supervising sensitive data. ",
        },
      ],
    },
  },
};
import ndisIndustry from "../assets/NDIS Industry.png";
import ictIndustry from "../assets/ICT Industry.png";
export const byIndustryData = {
  "NDIS Industry": {
    hero: {
      image: ndisIndustry,
      title: "NDIS Industry",
      description: "",
      page: "NDIS Industry",
    },
    details: {
      points: [
        {
          dot: dots.dot1,
          title: "Roster Management",
          pointsData: [
            {
              pointTitle: "Automate with Confidence:",
              pointDescription:
                "Seamlessly coordinates NDIS-compliant rosters across multiple sites, shifts and teams. Match staff by expertise and level of care, apply the correct pay rules and track expenses—all from a single, intelligent platform",
            },
            {
              pointTitle: "Real-Time Visibility, Real-World Control:",
              pointDescription:
                "Use GPS clock-ins, manage overnight shifts and simplify approvals with NDIS-ready timesheets. Built-in rules guarantee accurate pay, compliance and operational efficiency—without the manual burden.",
            },
          ],
        },
        {
          dot: dots.dot2,
          title: "Admin Console",
          pointsData: [
            "Oversee every aspect of your operation from participant and staff profiles to facility settings and shift rules. ",
            "Designed for compliance and efficiency, our platform streamlines workflows, protects data and ensures accurate, secure operations you can trust. ",
          ],
        },
        {
          dot: dots.dot3,
          title: "Access Control Panel",
          pointsData: [
            {
              pointTitle: "Effortless Onboarding & Role Management:",
              pointDescription:
                " Onboard new staff, assign roles and manage permissions effortlessly through intuitive, role-based access controls.",
            },
            {
              pointTitle: "Secure & Compliant User Control:",
              pointDescription:
                " Keep complete visibility through audit trails, while safeguarding sensitive data across your organisation.",
            },
          ],
        },
        {
          dot: dots.dot4,
          title: "HR Operations",
          pointsData: [
            {
              pointTitle: "All-in-One Staff Management:",
              pointDescription:
                "Manage records, qualifications, leave, training, recruitment and performance reviews from a single, unified platform.",
            },
            {
              pointTitle: "Empower Growth & Engagement:",
              pointDescription:
                "Elevate staff motivation with recognition tools and foster continuous training aligned with NDIS workforce standards.",
            },
          ],
        },
        {
          dot: dots.dot5,
          title: "T-sign",
          pointsData: [
            {
              pointTitle:
                "NDIS-compliant digital signatures with full encryption:",
              pointDescription:
                "Facilitate secure, paperless signing of contracts, agreements and internal records.",
            },
            {
              pointTitle: "Streamlined multi-signer workflows:",
              pointDescription:
                "Quick, collaborative signing with live tracking and no manual hassle.",
            },
          ],
        },
        {
          dot: dots.dot6,
          title: "Clock In & Clock Out",
          pointsData: [
            {
              pointTitle: "Simple, Geo-Verified Shift Sign-Ins",
              pointDescription:
                "Support staff can clock on and off from any device, with accurate time stamps and location proof—zero paper, zero lag.",
            },
            {
              pointTitle: "All-in-One Shift Management App ",
              pointDescription:
                "Coordinate shift duties, log participant notes, process reimbursements, and log extra hours or sleepovers—all in one secure app. ",
            },
            {
              pointTitle: "NDIS-Aligned Support Delivery ",
              pointDescription:
                "Plan and deliver services with confidence, using tools built to meet NDIS rules on compliance, safety, and quality. ",
            },
          ],
        },
        {
          dot: dots.dot1,
          title: "Participant Management",
          description: `Keep all participant profiles, support plans, funding details, progress journals, and clinical documents in one secure place. Use built-in risk assessments and feedback tools to deliver personalised, safe, and coordinated support aligned with NDIS standards.`,
        },
        {
          dot: dots.dot2,
          title: "Incident Management",
          pointsData: [
            {
              pointTitle: "Secure, NDIS-Compliant Incident Logging ",
              pointDescription:
                "Record and handle incidents for any participant or facility, with built-in compliance checks every step of the way. ",
            },
            {
              pointTitle: "Guided Reporting for Accuracy",
              pointDescription:
                "Follow step-by-step prompts to log every key detail, cut down on mistakes, and stay audit-ready.",
            },
            {
              pointTitle: "Real-Time Tracking & Data Protection ",
              pointDescription:
                "See incident progress live, with access controls that keep every piece of data secure and confidential.",
            },
          ],
        },
        {
          dot: dots.dot3,
          title: "Repository",
          pointsData: [
            {
              pointTitle: "Your Central Hub for NDIS Documentation",
              pointDescription:
                "Store and manage participant records, compliance documents, and operational files—all within a single secure, well-organised space. ",
            },
            {
              pointTitle: "Role-Based Access for Security & Transparency ",
              pointDescription:
                "Control who sees what, with role-based permissions that safeguard sensitive information and reinforce accountability. ",
            },
          ],
        },
        {
          dot: dots.dot4,
          title: "Role-Based Dashboards",
          pointsData: [
            {
              pointTitle: "Tailored Dashboards for Every User ",
              pointDescription:
                "Each team member sees a customised blend of data—rosters, participant status, tasks, HR metrics, incidents—filtered to match their role.",
            },
            {
              pointTitle: "Smarter Decisions, Smoother Operations",
              pointDescription:
                "Equipping staff with timely insights streamlines coordination, boosts responsiveness, and enhances overall service quality.",
            },
            {
              pointTitle: "Real-Time Visibility Across Teams ",
              pointDescription:
                "Real-time information keeps everyone aligned, enabling proactive planning and service delivery that meets NDIS compliance. ",
            },
          ],
        },
        {
          dot: dots.dot5,
          title: "ChaT",
          pointsData: [
            {
              pointTitle: "Secure, Internal-Only Messaging ",
              pointDescription:
                "NDIS staff stay connected through secure, role-specific channels reserved for internal discussions.",
            },
            {
              pointTitle: "Real-Time Updates & Alerts ",
              pointDescription:
                "Instantly share shift changes, incident notifications and   operational updates to keep everyone aligned.",
            },
            {
              pointTitle: "Seamless File Sharing ",
              pointDescription:
                "Share documents, reports, and notes safely—ideal for collaborating on participant care while preserving compliance.",
            },
          ],
        },
        {
          dot: dots.dot6,
          title: "My Profile",
          pointsData: [
            {
              pointTitle: "Centralised Staff Management ",
              pointDescription:
                "Manage staff profiles, training milestones, payroll, and availability within a single, secure platform that’s simple to navigate.",
            },
            {
              pointTitle: "NDIS-Ready Workforce Tools ",
              pointDescription:
                "Easily monitor leave, training, and compliance milestones to ensure operations remain smooth and standards-aligned.",
            },
          ],
        },
        {
          dot: dots.dot1,
          title: "Forms",
          pointsData: [
            {
              pointTitle:
                "Digital Forms for Participant Care & Incident Reporting",
              pointDescription:
                "Swap complicated paperwork for secure, adaptable forms built for NDIS reporting. Customisation is straightforward, so you match the exact documentation you need.",
            },
            {
              pointTitle: "Mobile-Optimised & Compliant",
              pointDescription:
                "Complete and submit forms anytime, anywhere, with total confidence—every field meets NDIS standards for complete accuracy and safety.",
            },
          ],
        },
        {
          dot: dots.dot2,
          title: "Accounting",
          pointsData: [
            {
              pointTitle: "Smart & Scalable Financial Management",
              pointDescription:
                "Stay in command with automated payroll, quick invoicing, live bank transactions and financial reporting—all within one connected platform.",
            },
            {
              pointTitle: "Simplified Accounting for NDIS Providers",
              pointDescription:
                "Our system grows with you, delivering clarity, compliance and total financial control from your first client to thousands more.",
            },
          ],
        },
        {
          dot: dots.dot3,
          title: "T Learning Hub",
          pointsData: [
            {
              pointTitle: "Role-Based, On-Dem and Training",
              pointDescription:
                "Deliver flexible, mobile-first learning for each team member—guide new staff from Day One through to advanced, specialised skills.",
            },
            {
              pointTitle: "Confident, Knowledgeable Workforce",
              pointDescription:
                "Support your team with on-going training that keeps everyone current, connected and compliant with NDIS requirements.",
            },
          ],
          conclusion: "Empowering NDIS Providers with Confidence ",
        },
        {
          dot: dots.dot4,
          title: "",
          description: `TesseractApps unites secure, easy-to-use tools that let you manage workforce and participant support seamlessly. From compliance to care coordination, every feature is designed to lighten daily operations, improve service quality and support your team at every step.`,
        },
      ],
    },
  },

  "ICT Industry": {
    hero: {
      image: ictIndustry,
      title: "ICT Industry",
      description: "",
      page: "ICT Industry",
    },
    details: {
      points: [
        {
          dot: dots.dot1,
          title: "Timesheet",
          description: ``,

          descriptionPoints: [
            "Quick, clear, and impactful—Timesheet is your single hub for time tracking and invoices",
            "Designed for you, the intuitive system includes built-in features that let you:",
          ],
          pointsData: [
            "Register, submit, and sign off in a single tap—no extra steps.",
            "Duplicate past entries in seconds.",
            "See submission progress at once.",
            "Keep workflows moving, cut mistakes, and enhance openness. ",
          ],
        },
        {
          dot: dots.dot2,
          title: "Admin Console",
          description: `An all-in-one solution designed to streamline your operations while keeping every piece of information under the strictest confidentiality. `,
        },
        {
          dot: dots.dot3,
          title: "Access Control Panel",
          pointsData: [
            "Grant permissions aligned with roles, efficiently and securely.",
            "Adapt access rights smoothly as the team expands.",
            "Add whole departments at once through bulk file uploads.",
            "Track every action as it happens, ensuring ongoing transparency.",
          ],
        },
        {
          dot: dots.dot4,
          title: "HR Operations",
          description: `Oversee your workforce from onboarding to recognition—all from a single central platform. Here’s our approach: `,
          pointsData: [
            "Employee records that grow and adapt as new information comes in. ",
            "Simple tracking for leave, qualifications, and performance updates. ",
            "Automated milestones trigger instant recognition, prompt rewards, and set the stage for celebration.",
            "Training logs continually capture every continuing professional development course you complete.",
            "Hiring tools integrate effortlessly with HR records. ",
          ],
        },
        {
          dot: dots.dot5,
          title: "Performance Management",
          description: `Simplify goal setting, progress tracking, and performance reviews with an intuitive platform. Enable continuous feedback through milestone reviews, automated reporting, and transparent development processes - driving team success and productivity.`,
        },
        {
          dot: dots.dot6,
          title: "T Sign",
          description: `Digital approvals and e-signatures, built for the ICT landscape, ensure you can rely on: `,
          pointsData: [
            "Enterprise-grade encryption that preserves data integrity. ",
            "Multi-layer approval paths that produce organised audit trails. ",
          ],
        },
        {
          dot: dots.dot1,
          title: "Repository",
          description: `Your single version of the truth for documents, with: `,
          pointsData: [
            "Structured storage that supports immediate retrieval. ",
            "Intelligent access controls that assign the right permissions instantly.",
          ],
        },
        {
          dot: dots.dot2,
          title: "Role-Based Dashboards",
          description: `Give managers live visibility of the essentials: `,
          pointsData: [
            "Real-time shift statuses.",
            "Every staff activity alongside outstanding items. ",
            "HR key performance indicators.",
            "Ongoing performance review updates. ",
          ],
        },
        {
          dot: dots.dot3,
          title: "ChaT",
          description: `Enhance collaboration with a purpose-built, secure chat platform that delivers: `,
          pointsData: [
            "Instant messaging.",
            "Simple file sharing.",
            "Live project notifications.",
          ],
        },
        {
          dot: dots.dot4,
          title: "My Profile",
          description: `A central dashboard that unifies personal and performance information: `,
          pointsData: [
            "Update personal and contact data. ",
            "View schedules and shift assignments.",
            "Check leave balances and submit time-off requests.",
            "Adjust notification preferences. ",
          ],
        },
        // {
        //   title: "Forms",
        //   description: `Replace paper with easy drag-and-drop digital forms for all operational needs. Create, assign, and manage forms securely with role-based access control. Mobile-optimised submissions linked directly to records streamline workflows and improve compliance.`,
        //   images: [detailsImage3],
        // },
        {
          dot: dots.dot5,
          title: "Accounting",
          description: `made simple and smart.`,
          pointsData: [
            "Fully automated payroll. ",
            "Invoicing that links to live bank feeds. ",
            "Instant, on-demand financial reports. ",
          ],
          conclusion:
            "Our integrated solution personalises workflows, guarantees compliance, and replaces tedious manual entry with smart automation. ",
        },
        {
          dot: dots.dot6,
          title: "T Learning Hub",
          pointsData: [
            "Guided tutorials and role-specific courses help you boost your expertise anytime, anywhere. Content is designed for mobile devices and customized for every position, so your entire team stays in top form. ",
            "Tesseract combines simplicity and power: our all-in-one platform lets ICT providers oversee their people and processes with unmatched efficiency, ironclad security, and complete regulatory peace of mind. ",
          ],
        },
        {
          dot: dots.dot1,
          title: "",
          description: `Tesseract empowers ICT providers with integrated, user-friendly tools to manage the workforce efficiently, securely, and in full compliance with ICT standards. `,
        },
      ],
    },
  },
};
import resterManagement from "../assets/Product Roster management.png";
import adminConsole from "../assets/Product Admin con.png";
import timesheets from "../assets/Product Time sheet.png";
import accessControl from "../assets/Product Access control.png";
import hrOperations from "../assets/Product HR.png";
import tsign from "../assets/Product Sign.png";
import clockInAndOut from "../assets/Product Sign in.png";
import participantManagement from "../assets/Product Participent management.png";
import incidentManagement from "../assets/Product incident management.png";
import repository from "../assets/Product Repository.png";
import roleBasedDashboard from "../assets/Product Rolebase dashboard.png";
import forms from "../assets/Product Forms.png";
import accounting from "../assets/Product Accounting.png";
import tLearingHub from "../assets/Product Learning.png";
import chat from "../assets/Product Chat.png";
export const productsDetailsData = {
  "Roster Management": {
    page: "Roster Management",
    hero: {
      title: "Precision Rostering Simplified for Disability Support Carers",
      description:
        "Tesseract’s Roster Management System is built from the ground up for organisations that support people with disabilities. Blending smart automation with regulatory checks and user-centric design, it helps every team member coordinate rosters decisively and calmly. ",
      image: resterManagement,
    },
    section2: {
      title: "Key Features at a Glance ",
      description: "",
      points: [
        {
          dot: dots.dot1,
          title: "Smooth Shift Creation ",
          description:
            "Plan duties across homes, offices, hubs, or any site with a couple of taps. Create single, split, or group duty slots without fuss. ",
        },
        {
          dot: dots.dot2,
          title: "Custom Wage Logic ",
          description:
            "Drop in hourly rates, apply penalty rates, set overtime and wrap in sleepover pay, all without a calculator. ",
        },
        {
          dot: dots.dot3,
          title: "Cost and Kilometre Claims ",
          description:
            "Team members snap a photo of a receipt; the system records dollars spent and measures the journey for fair, fast reimbursement. ",
        },
        {
          dot: dots.dot4,
          title: "Alerts and Authorisations ",
          description:
            "Get an instant ping when coverage dips, confirm clock-ins with location stamps, and approve timesheets with a single swipe or let the system handle it. ",
        },
        {
          dot: dots.dot5,
          title: "Insight Engine ",
          descriptionPoints: [
            "Dive into live dashboards and export detailed reports that answer funding body questions and boost team morale.",
            "Visual dashboards, insights for under/over-scheduling, availability tracking, and compliance reports you can export whenever you need. ",
          ],
        },
      ],
    },
    section3: [
      {
        title: "Auto-Rostering That Takes the Strain ",
        description:
          "Wave off the old, painful drag-and-drop. Our Auto-Rostering engine whips up an entire week’s staff plan in seconds. It reads skill sets, risk ratings, and daily workloads, and then it serves up the safest, fairest, and legally sound roster you could dream of, minimising nights spent in front of a screen.",
        images: [],
      },
      {
        title: "Crafted for NDIS providers. ",
        description:
          "Tesseract takes the headache out of NDIS-compliant rostering. It connects effortlessly with payroll, HR, compliance, and timesheet systems, delivering a unified, regulation-ready toolkit. The result? Greater efficiency, fewer errors, and consistent safeguarding of employment standards. ",
        images: [],
      },
    ],
    faqSection: {
      title: "Roster Management FAQs",
      faqData: [
        {
          question: "1. How are shifts categorised?",
          answer:
            "Shifts are organised by type, such as morning, afternoon, night, sleepover, or custom shifts. Each type is visually distinguished with unique colors and time settings for easy identification.",
        },
        {
          question: "2. What does the auto-scheduling feature do?",
          answer:
            "Our platform includes an intelligent scheduling engine that helps us assign the most suitable staff to open shifts. It considers availability, staff preferences, and relevant employment guidelines to streamline roster management. ",
        },
        {
          question: "3. What are group shifts and how do they work?",
          answer: "Group shifts allow flexible staffing arrangements such as:",
          points: [
            "One participant supported by multiple staff",
            "One staff member supporting multiple participants",
            "Multiple staff and participants assigned together at the same location",
          ],
        },
        {
          question: "4. Can I add breaks during shifts?",
          answer:
            "Yes, breaks can be included and marked as paid or unpaid. These are automatically factored into timesheets and payroll calculations.",
        },
        {
          question: "5. How do employees access their schedules online?",
          answer:
            "Employees log in to their dedicated accounts where they can view their personalised roster and upcoming shifts through an intuitive roster feature.",
        },
        {
          question: "6. Can employees see other people's schedules?",
          answer:
            "Employees have permission to view only their own schedules, maintain privacy, and focus on their individual shifts.",
        },
        {
          question: "7. How do I set up recurring shifts?",
          answer:
            "When creating a new shift, you can set it to repeat a schedule that suits your needs - such as daily, weekly, fortnightly, or monthly. You can also define when the recurrence should end. Public holidays are automatically factored into the schedule when applicable.",
        },
        {
          question: "8. What shift types are supported?",
          answer:
            "Tesseract supports: General, Morning / Afternoon / Night, Sleepover (with allowance & work hours), Custom shifts (including long-duration)",
        },
        {
          question: "9. How are public holidays handled in shifts?",
          answer:
            "Public holiday rates apply automatically during manual shift creation and Auto-scheduling engine execution as well. A built-in public holiday calendar is used for reference.",
        },
        {
          question: "10. How are timesheets created?",
          answer:
            "Timesheets are automatically generated based on your recorded shift activity. Organisations can choose to have these reviewed manually or approved automatically, depending on internal preferences.",
        },
        {
          question: "11. Do timesheets include overtime and penalty rates?",
          answer:
            "Yes, timesheets account for applicable overtime and penalty rates, including scenarios such as extended hours, short breaks between shifts, and shifts worked on weekends or public holidays.",
        },
        {
          question: "12. How are sleepover shifts reflected in timesheets?",
          answer:
            "Sleepover shifts are calculated with applicable allowances, and any active work during the sleepover period is also recorded and reflected in the final timesheet.",
        },
        {
          question: "13. Where can I access my timesheet and wage reports?",
          answer:
            "Employees and staff can securely access and download their timesheet records, payslips, and wage reports directly from their personal profile area within the platform.",
        },
        {
          question: "14. Can staff claim expenses after a shift?",
          answer:
            "Yes, staff members can submit reimbursement requests for eligible shift-related expenses - such as tolls, parking, or meals - through a streamlined post-shift process.",
        },
        {
          question: "15. How is mileage calculated?",
          answer:
            "Mileage claims are automatically calculated based on the type of vehicle used and pre-configured per-kilometer rates. This ensures accurate and fair reimbursements for travel.",
        },
        {
          question: "16. What kind of notifications do users receive?",
          answer:
            "Users receive timely alerts for key actions, including: Shift assignments, rejections, and cancellations; Expression of Interest (EOI) allocations; Sign-in and sign-out reminders (typically sent 15 minutes before the scheduled time)",
        },
        {
          question:
            "17. What is an EOI (Expression of Interest) and how is it used?",
          answer:
            "The EOI feature allows coordinators to broadcast open shifts to eligible staff members. Staff can express interest, and shifts are then assigned based on availability and suitability, helping to fill gaps quickly and fairly.",
        },
      ],
    },
  },
  Timesheet: {
    page: "Timesheet",
    hero: {
      title:
        "Track Hours with Certainty! File Approvals with Ease! Payroll that Runs Like Clockwork!",
      description:
        "TesseractApps Timesheets & Attendance Management platform is tailored for NDIS providers. It guarantees precise time capture, open approval trails, and seamless payroll handover. Every feature is crafted to meet NDIS compliance and ICT accessibility, layering neatly on your rostering, HR, and payroll tools. The result: audit-ready calm, operational speed, and uninterrupted care delivery. ",
      image: timesheets, // Replace with actual image import
    },
    section2: {
      title: "",
      description: "",
      points: [
        {
          dot: dots.dot1,
          title: "Track Every Shift, Accurately ",
          description:
            "Log staff attendance as it happens, using geo-verified check-ins that transform scheduled shifts into live timesheets. Whether covering overnight needs or lengthy supports, Tesseract logs every second, respecting round-off rules that protect fairness and clarity. ",
        },
        {
          dot: dots.dot2,
          title: "Smart, Flexible Approvals ",
          description:
            "Pick the approval workflow that fits your team—by individual, by shift, or in bulk. Approvals can be automatic or manual, and you can be confident that complex pay scenarios like sleepovers or extended shifts will be calculated correctly, with no detail slipping through. ",
        },
        {
          dot: dots.dot3,
          title: "Payroll Integration That Just Works ",
          descriptionPoints: [
            "Once timesheets gain the tick, they move straight to your payroll platform. Pay rates slot in without fuss, so calculations stay spot-on, and HR can turn its attention back to care. ",
            "Overtime, weekend shifts, public holidays, and allowances are calculated automatically, so you save time, minimize errors, and ensure everyone gets paid accurately and on schedule. ",
          ],
        },
        {
          dot: dots.dot4,
          title: "Real-Time Attendance with Geo Verification ",
          description:
            "Let your team clock in and out anywhere, knowing their location is verified. Geo-tracking protects you from time fraud, keeps compliance on track, and confirms staff are right where they should be when they should be there. ",
        },
        {
          dot: dots.dot5,
          title: "Every Shift, Fully Documented ",
          description:
            "Every shift gets a complete and transparent log. Attendance is linked to shift notes, incidents, leave requests, and reimbursements, giving you a full record that ensures accountability and compliance. ",
        },
        {
          dot: dots.dot6,
          title: "Reports That Make Sense ",
          description:
            "Produce clear and detailed reports for audits, compliance, or payroll. Visual alerts highlight missing or incomplete timesheets, while built-in analytics reveal attendance trends, overtime, and punctuality patterns. ",
        },
        {
          dot: dots.dot1,
          title: "Built for Compliance. Ready for the Future. ",
          description:
            "Developed for NDIS providers and ICT organisations, TesseractApps keeps you aligned with industry requirements. Reduce administration time, boost accuracy, and manage everything from one central, user-friendly dashboard. ",
        },
      ],
    },
    faqSection: {
      title: "Timesheet FAQs",
      faqData: [
        {
          question: "1. Where can I access my timesheet and wage reports?",
          answer:
            "Employees and staff can securely access and download their timesheet records, payslips, and wage reports directly from their personal profile area within the platform.",
        },
        {
          question:
            "2. Can I duplicate or carry over entries from previous days?",
          answer:
            "Yes, our system includes a Clone feature that streamlines daily logging by reducing repetitive input. This is especially useful for consistent task schedules.",
        },
        {
          question: "3. Is there support for approval of the timesheet?",
          answer:
            "Yes, timesheets follow approval flow. Approvers can review, comment, and take action based on role permissions and business rules.",
        },
      ],
    },
  },
  "Admin Console": {
    page: "Admin Console",
    hero: {
      title: "Better Settings. Simple Control. Total Facility Focus.",
      image: adminConsole,
      pointsObject: [
        {
          pointTitle: "Unified Control Centre",
          pointDescription:
            "Bring every core operational setting—shift schematics, organisational facts—under one fluid, linked interface.",
        },
        {
          pointTitle: "NDIS-Compliant Configuration",
          pointDescription:
            "Build provider profiles, site addresses, and shift rules, all with compliance nudges built right into every step. ",
        },
        {
          pointTitle: "Seamless Connection",
          pointDescription:
            "Links automatically with payroll, HR, timesheets, and compliance systems to keep everything flowing.  ",
        },
        {
          pointTitle: "Precise Changes, No Fuss",
          pointDescription:
            "Designed for admins to execute fast, exact updates—no coding required—full command,  zero confusion. ",
        },
      ],
    },
    section2: {
      title: "",
      description: "",
      points: [
        {
          title: "Organisation Management",
          dot: dots.dot1,
          pointsData: [
            {
              pointTitle: "Centralised Command",
              pointDescription:
                "Manage contact lists, banking records, and everything in between from one neat dashboard—swift, tidy, hassle-free. ",
            },
            {
              pointTitle: "Intelligent Team Assignment ",
              pointDescription:
                "Place the right people into support duties and send queries to the designated inboxes in a couple of clicks. ",
            },
            {
              pointTitle: "Role-Based Control",
              pointDescription:
                "Cluster users by function, weave in finance contacts, and lock permissions to keep data secure and compliant.",
            },
            {
              pointTitle: "Clearer Oversight",
              pointDescription:
                "Admin tools built to lighten your workload and sharpen operational clarity, so back-end management runs smooth. ",
            },
          ],
        },
        {
          title: "Roster Settings",
          pointsData: [
            {
              pointTitle: "Flexible Shift Customisation",
              pointDescription:
                "Modify shift lengths and starting points to fit your operational rhythms—straightforward, direct, entirely yours.",
            },
            {
              pointTitle: "Colour-Coded Clarity",
              pointDescription:
                "Give shifts distinct hues for fast, easy visual identification. It keeps planners briefly updated and flags any overlaps or gaps in a flash. ",
            },
            {
              pointTitle: "Smart Compliance Support",
              pointDescription:
                "Enforce fatigue limits, mandatory off-duty hours, and statutory breaks so rosters safeguard staff health and remain compliant, all without extra intervention. ",
            },
            {
              pointTitle: "Live System-wide Updates",
              pointDescription:
                "Edit any roster and the change weaves through the entire platform instantly—no retyping, no legacy data lingering.",
            },
          ],
          dot: dots.dot2,
        },
        {
          title: "Facility Management",
          pointsData: [
            {
              pointTitle: "Single-Panel Oversight",
              pointDescription:
                "Oversee every location from a single screen—shift addresses, refresh service details, or change contact numbers, all in under a minute. ",
            },
            {
              pointTitle: "Live Status Management",
              pointDescription:
                "Toggle any site on or off with one click, and every shift and plan instantly reflects the change, keeping everything relevant.",
            },
            {
              pointTitle: "Integrated Backend Logic",
              pointDescription:
                "Site information updates automatically in rosters, staff groupings, and security access—no manual cross-checking required. ",
            },
            {
              pointTitle: "Fast, Straightforward Management",
              pointDescription:
                "One click to change, one click to apply—designed for admins who want order without the excess.",
            },
          ],
          dot: dots.dot3,
        },
        {
          title: "Participants Management",
          pointsData: [
            {
              pointTitle: "Quick Registration",
              pointDescription:
                "Gather ID numbers, insurance data, and emergency contacts in a single, fast form. ",
            },
            {
              pointTitle: "Organised & Accessible",
              pointDescription:
                "Keep tidy, easily navigable profiles and use simple switches to mark a participant as active, inactive, or archived.",
            },
            {
              pointTitle: "Seamless System Integration",
              pointDescription:
                "Participant data synchronises automatically across care, rostering, and organisational modules for flawless handoffs.",
            },
            {
              pointTitle: "Efficient Management ",
              pointDescription:
                "Less time on admin, more accurate and up-to-date participant records.",
            },
          ],
          dot: dots.dot4,
        },
        {
          title: "Staff Management",
          pointsData: [
            {
              pointTitle: "Clear Team Overview",
              pointDescription:
                "Visualise your entire team in card or list views, then quickly find any person through powerful filters and searches.",
            },
            {
              pointTitle: "Effortless Onboarding ",
              pointDescription:
                "Guided forms gather employee details—personal info, role, payroll, and contact—without missing a beat.",
            },
            {
              pointTitle: "Secure Employment Management",
              pointDescription:
                "Manage payroll, leave, emergency contacts, and every bit of employment info from one secure place.",
            },
            {
              pointTitle: "Smart Role & Facility Linking",
              pointDescription:
                "Assign overlapping roles, link employees to facilities, and track attendance through geo-verified clock-ins and real-time status alerts.",
            },
          ],
          dot: dots.dot5,
        },
      ],
    },
    faqSection: {
      title: "Admin Console FAQs",
      faqData: [
        {
          question: "1. How can I update my organisation's details?",
          answer:
            "Basic organisational information can be updated directly through the admin module. For changes involving key or sensitive data, assistance from the support team is available to ensure accuracy and security.",
        },
        {
          question: "2. What settings can I configure in the admin console?",
          answer:
            "You can manage various settings such as support email addresses, ticketing team members, shift timings, and expense reimbursements. More advanced settings, including user roles and types, are managed in collaboration with the support team.",
        },
        {
          question: "3. Can I create and manage multiple facilities?",
          answer:
            "Yes, the platform allows you to add and oversee multiple facility profiles, including details like services provided, contact information, and location addresses.",
        },
      ],
    },
  },
  "Access Control Panel": {
    page: "Access Control Panel",
    hero: {
      title: "Safe, Central User Command ",
      pointsObject: [
        {
          pointTitle: "Role-Based Permissions Simplified",
          pointDescription:
            "Grant and supervise user access according to defined roles—zero technical barriers, pure intuitive oversight.",
        },
        {
          pointTitle: "Unified User Oversight ",
          pointDescription:
            "Monitor, modify, and verify access throughout your organisation from a single, secure dashboard.",
        },
        {
          pointTitle: "Concise Corporate Governance",
          pointDescription:
            "Preserve operational transparency and security while remaining in harmony with NDIS compliance.",
        },
      ],

      image: accessControl,
    },
    section2: {
      title: "",
      description: "",
      points: [
        {
          title: "User Onboarding & Bulk Management",
          pointsData: [
            {
              pointTitle: "Instant Profile Generation",
              pointDescription:
                "Rapidly establish employee profiles and user accounts in a few clicks—without any technical strain. ",
            },
            {
              pointTitle: "Intelligent Role & Permission Assignment",
              pointDescription:
                "Allocate roles and permissions logically, so every colleague has the correct access from their very first day.",
            },
            {
              pointTitle: "Bulk Import for Swift Deployment",
              pointDescription:
                "Upload numerous users simultaneously for effortless setup and reduced admin workload—your team starts in minutes. ",
            },
          ],
          dot: dots.dot1,
        },
        {
          title: "Role-Based Access & Security Controls",
          pointsData: [
            {
              pointTitle: "One Portal, Complete Oversight ",
              pointDescription:
                "Oversee user permissions, access tiers, and status changes from a single, protected control centre. ",
            },
            {
              pointTitle: "Live Access Administration",
              pointDescription:
                "Grant, change, or rescind access to modules in real time, with transparent audit trails—no uncertainty, no holdups.",
            },
            {
              pointTitle: "Secure, Immediate Password Recovery",
              pointDescription:
                "Protect data integrity and user confidence with email-verified password resets that take seconds, not hours.",
            },
          ],
          dot: dots.dot2,
        },
        {
          title: "Designed for Compliance & Productivity",
          descriptionPoints: [
            "Tesseract's Access Control Panel ensures structured workforce management, seamless onboarding, and secure credential oversight, empowering organisations with confidence, speed, and transparency.",
            "It’s more than oversight; it’s the assurance, transparency, and responsiveness that smiles back at you. ",
          ],
          dot: dots.dot3,
        },
      ],
    },
    faqSection: {
      title: "Access Control Panel FAQs",
      faqData: [
        {
          question: "1. What do I do if I forget my username or password?",
          answer:
            "If you forget your username, please contact your system administrator who can provide it. For password resets, administrators can send you a secure reset link via email, which you can use within a limited time frame to update your password safely.",
        },
        {
          question: "2. Can I upload multiple user accounts at once?",
          answer:
            "Yes, the platform supports bulk uploads, allowing you to add multiple user or staff records in a single step. This feature simplifies the process of onboarding large groups efficiently.",
        },
      ],
    },
  },
  "HR Operations": {
    page: "HR Operations",
    hero: {
      title: "HR Management Built for Thriving Teams! ",
      image: hrOperations, // Replace with actual image import
      pointsObject: [
        {
          pointTitle: "From Hire to Inspire:",
          pointDescription:
            "TesseractApps steers you through every part of the employee experience, from first hire to lasting inspiration, blending seamless admin with a culture that sticks.",
        },
      ],
    },
    section2: {
      title: "HR Capabilities",
      description: "",
      points: [
        {
          title: "Staff Profiles & Management",
          description:
            "Roles, qualifications, and statuses live in one tidy record, ready for you with a single click.",
          dot: dots.dot1,
        },
        {
          title: "Awards & Recognition",
          description:
            "Mark the milestones, spread appreciation, and let performance rewards do the celebrating for you. ",
          dot: dots.dot2,
        },
        {
          title: "Training & Evaluation",
          description:
            "With Wyzed’s connection, keeping track of training progress and performance assessments is a breezy click. ",

          dot: dots.dot3,
        },
        {
          title: "Leave Management",
          description:
            "Leave requests travel through a clear, open process, with every approval and entitlement visible and traceable.",
          pointsData: [
            "Our toolkit is designed to simplify goal-setting, streamline performance reviews, and organize structured assessments so you can focus on impact, not admin. ",
            "Craft specific priorities, automate their weight, and weave feedback into a cohesive narrative with milestone reviews that always move forward.",
            "Apply powerful analytics to roles, desired outcomes, and performance data, producing lucid, actionable insights that drive employee development at every career stage.",
          ],
          dot: dots.dot4,
        },
      ],
    },
    faqSection: {
      title: "HR Operations FAQs",
      faqData: [
        {
          question: "1. How are staff created and managed?",
          answer:
            "Staff profiles are created and maintained within the HR feature, where you can securely record personal details, employment information, banking data, and manage essential documents and statuses.",
        },
        {
          question: "2. How is staff training managed?",
          answer:
            "Training assignments and progress tracking are integrated with a dedicated learning platform, allowing seamless monitoring of course completions and evaluations.",
        },
        {
          question: "3. Can I monitor staff performance?",
          answer:
            "Yes, the system supports performance management activities including goal setting, periodic reviews, and evaluations to help support staff development.",
        },
      ],
    },
  },
  "T-sign": {
    page: "T-sign",
    hero: {
      title: "Secure, instant digital signatures.",
      description: "Built Right In. Paperless. Compliant. Effortless. ",
      descriptionPoints: [
        "Say hello to T-sign, the e-signature feature baked right into TesseractApps, and watch approvals shrink to a single tap. Whether you’re support staff, a manager, or the signature-seeker, you’ll find the same fast, secure, and fully paperless signing experience.",
        "Wave goodbye to printers, scanners, and those endless signature chases. Open the document, tap to sign, and you’re all set. ",
      ],
      image: tsign, // Replace with actual image import
    },
    section2: {
      title: "",
      description: "",
      points: [
        {
          title: "Why choose T-sign?",
          pointsData: [
            "Gain real-time digital signatures for contracts, agreements, and anything sensitive.",
            "Use it everywhere: the desktop, your tablet, or mobile. ",
            "Trust enterprise-grade security—encrypted and tamper-proof. ",
            "Bring in multiple signers, making it a breeze to handle workflows with lots of stakeholders.",
          ],
          dot: dots.dot1,
        },
        {
          title: "Use T-sign for:",
          pointsData: [
            "Business contracts and service-level agreements. ",
            "Non-disclosure and confidentiality agreements. ",
            "Approvals of internal policies. ",
            "Vendor contracts and procurement docs. ",
            "HR papers, from offer letters to onboarding forms.",
          ],
          dot: dots.dot2,
        },
        {
          title: "Digital Signature Management Made Simple",
          description:
            "T-sign cuts the paperwork clutter. Every document is signed, securely stored, and instantly available, keeping you compliant, organized, and way ahead of the clock.",
          conclusion:
            "Built for real people, T-sign asks for zero tech skills. Just sign and keep moving.",
          dot: dots.dot3,
        },
      ],
    },
    faqSection: {
      title: "T-sign FAQs",
      faqData: [
        {
          question: "1. Where can I view signed documents?",
          answer:
            "Access to signed documents is restricted based on user roles to ensure privacy and security. Typically, only authorised users - such as designated administrators or HR personnel - can view these documents. Access permissions are managed internally by your organisation's admin team.",
        },
        {
          question: "2. How will I know when a document needs my signature?",
          answer:
            "You'll receive a notification when a document is assigned for your review or signature. Simply follow the prompt to access, review, and complete the signing process.",
        },
        {
          question: "3. Is the signing process secure and compliant?",
          answer:
            "Yes, all digital signatures are protected by encryption and meet relevant industry compliance standards. Access and activity are logged for transparency and legal validation.",
        },
      ],
    },
  },
  "Clock In & Clock Out": {
    page: "Clock In & Clock Out",
    hero: {
      title:
        "Launch a fresh shift in a heartbeat, keep records sharp, and stamp approvals with one tap. ",
      description:
        "Simplicity, compliance, and real-time accuracy—every little win flows through a single, purpose-built screen made for you, and now your team tracks shifts right from phones or desktops. ",
      image: clockInAndOut, // Replace with actual image import
    },
    section2: {
      title: "",
      description: "",
      points: [
        {
          title: "Easy Shift Access",
          description:
            "Tomorrow’s shifts slide into view with a few quick swipes. The clock-in button flashes a few minutes before you start—no more racing the clock.",
          dot: dots.dot1,
        },
        {
          title: "Task Checklists & Notes",
          description:
            "We kept the weight down: checklists slide in, you tick, and quick notes drop in without fuss.",
          dot: dots.dot2,
        },
        {
          title: "Reimbursements & Approvals ",
          description:
            "Reimbursements now sort themselves. Travel and expense claims surf straight into the shift screen, waving for a fast supervisor green light. ",
          dot: dots.dot3,
        },
        {
          title: "Shift Extensions & Sleepovers: ",
          description:
            "Teams add extra hours or book an overnight with a tap, and payroll stays tidy because times are always right. ",
          dot: dots.dot4,
        },
        {
          title: "Supervisor Sign-Off: ",
          description:
            "Supervisors add a digital signature when the shift’s done—every task and note is sealed before you clock out. ",
          dot: dots.dot5,
        },
        {
          title: "All shift needs, one place. ",
          description:
            "Audits, billing, and compliance—everything lives right in your hand. During the shift, you track, manage, and submit without a single detour, all in one app. ",
          dot: dots.dot6,
        },
      ],
    },
    faqSection: {
      title: "Clock In & Clock Out FAQs",
      faqData: [
        {
          question: "1. When can I sign in for my shift?",
          answer:
            "You can sign in shortly before your scheduled start time. The system allows sign-in access within a defined window to ensure accurate time tracking.",
        },
        {
          question: "2. What if I work beyond my scheduled hours?",
          answer:
            "If your shift extends, you'll have the opportunity to record additional hours - such as overtime or sleepover shifts - after your shift ends through a follow-up submission process.",
        },
        {
          question: "3. Do I need a supervisor's approval?",
          answer:
            "Yes, supervisor sign-off is required before finalising your shift submission. This helps maintain accountability and ensures that shift records are verified.",
        },
        {
          question: "4. What if I arrive late for a shift?",
          answer:
            "If you're unable to sign in at the scheduled time, you can submit a request for a manual sign-in. This request will be reviewed and approved by the appropriate team member to maintain shift integrity.",
        },
      ],
    },
  },
  "Participant Management": {
    page: "Participant Management",
    hero: {
      title: "Participant Management Made Effortless",
      description:
        "Caring for participants shouldn’t feel like a puzzle. With Tesseract’s Participant Module, all the tools you need are in a single smart, secure, and easy-to-navigate space. ",
      conclusion:
        "From personalised support plans to seamless progress tracking, everything is designed to give you the confidence and clarity you need to provide truly tailored care. ",
      image: participantManagement, // Replace with actual image import
    },
    section2: {
      title: "What Makes It Awesome?",
      description: "",
      points: [
        {
          dot: dots.dot1,
          title: "Smart Profiles",
          description:
            "Set up and maintain participant profiles in moments. Every vital piece of information is in one place, ready to drive the individual care you provide.",
        },
        {
          dot: dots.dot2,
          title: "Care Journals",
          description:
            "Record changes, incidents, and special notes in one journal that acts like a shared care diary. Everyone stays informed without the need for constant meetings or multiple apps.",
        },
        {
          dot: dots.dot3,
          title: "Funding Tracker",
          description:
            "Keep a watchful eye on every budget and service allocation. Crystal-clear reports allow you to stay compliant and in control at every step.",
        },
        {
          dot: dots.dot4,
          title: "Service Agreements",
          description:
            "Add services and attach clear, mutual agreements that protect both participants and providers. Transparency is built in from the start.",
        },
        {
          dot: dots.dot5,
          title: "Document Hub",
          description:
            "Drag in assessments, medical reports, and consent forms. Assign expiry dates and receive friendly reminders so you never miss a renewal.",
        },
        {
          dot: dots.dot6,
          title: "Digital Forms",
          description:
            "Complete clinical forms like bowel movement logs online. No paper, no fuss—just neatly organised notes that everyone can access.",
        },
        {
          dot: dots.dot1,
          title: "Feedback Loop",
          description:
            "Send quick feedback on staff and services to foster continuous improvement and strengthen mutual trust.",
        },
      ],
    },
    section3: [
      {
        title: "Risk Assessment & Management",
        description: "Stay one step ahead of risks with integrated tools to: ",
        points: [
          "Spot health or environmental hazards from day one. ",
          "Draft action plans and delegate clear responsibilities. ",
          "Update assessments on the fly as things change.",
          "Meet every NDIS and quality standard without extra paperwork.",
        ],
        images: [],
      },
      {
        title: "You’ll wonder how you ever managed without it.",
        points: [
          "Everything in One Place – Centralised records mean easy, secure access anytime ",
          "Stay Compliant – Match NDIS and internal standards without the stress ",
          "Team Coordination – Instant updates keep the whole team in sync ",
          "Personalised Support – Deliver care that is tailored, on time, and fully transparent ",
        ],
        images: [],
      },
    ],
    faqSection: {
      title: "Participants Management FAQs",
      faqData: [
        {
          question: "1. How do I add a new participant?",
          answer:
            "Authorised users can create and manage participant profiles through the platform. This includes essential details such as care information, service plans, and relevant funding data to support comprehensive participant management.",
        },
        {
          question: "2. What is a Participant Journal?",
          answer:
            "The journal is a secure space where approved staff can record important updates such as care notes, progress observations, or support instructions. It ensures continuity and clarity in participant care.",
        },
        {
          question: "3. Can participant funding be tracked?",
          answer:
            "Yes, funding can be monitored to ensure it is properly allocated across services and agreements. This helps maintain transparency and accountability in line with organisational and funding requirements.",
        },
        {
          question: "4. What is the Risk Profile used for?",
          answer:
            "Risk Profiles allow teams to document participant-specific risk factors. These profiles support safe care planning and help ensure that appropriate protocols are followed by all involved staff.",
        },
      ],
    },
  },
  "Incident Management": {
    page: "Incident Management",
    hero: {
      title:
        "Insightful Reports. Secure Workspaces. Compliance You Can Count On.",
      description: "Incident Management Made Effortless ",
      pointsData: [
        {
          pointTitle: "Log, Track & Resolve – Everything in One Place",
          pointDescription:
            "Securely record every incident from the first report right through to resolution, ensuring full transparency and NDIS compliance every step of the way.",
        },
        {
          pointTitle: "Live Visibility across All Locations",
          pointDescription:
            "Keep an eye on incidents affecting both participants and team members through live updates, smart searches, and easy tracking.",
        },
        {
          pointTitle: "Guided Reporting, Total Clarity",
          pointDescription:
            "Our clear, step-by-step process makes data entry easy while capturing every important detail – saving time and improving accuracy. ",
        },
        {
          pointTitle: "Edit Wisely:",
          pointDescription:
            "Only open incidents can be changed. Once an incident is closed, the entry is locked, keeping data safe and leaving a clear audit trail. ",
        },
        {
          pointTitle: "Track without Doubt: ",
          pointDescription:
            "Raise and manage incidents with total confidence that your data is secure, compliant, and ready for audit whenever you need it. ",
        },
      ],
      image: incidentManagement, // Replace with actual image import
    },
    section2: {
      title: "",
      description: "",
      points: [
        {
          title: "Key Highlights",
          pointsData: [
            {
              pointTitle: "Guided & Flexible Reporting",
              pointDescription:
                "Our step-by-step process adapts to the seriousness of the incident, ensuring that the right details are collected quickly and accurately.",
            },
            {
              pointTitle: "Live Tracking & Instant Alerts",
              pointDescription:
                "Check the status of incidents across participants and locations in real time, making sure that nothing is overlooked.",
            },
            {
              pointTitle: "Designed for Speed and Ease  ",
              pointDescription:
                "Just speak and log what happened; upload photos and files in seconds. Your documentation stays thorough and lightning-quick. ",
            },
            {
              pointTitle: "Locked and Linked ",
              pointDescription:
                "Once incidents are closed, they’re sealed tight and mapped to the person and facility files, guaranteeing traceable, compliant records.",
            },
          ],
          dot: dots.dot1,
        },
        {
          title: "Why It Matters",
          description: "Accurate, timely incident logging is essential to :",
          pointsData: [
            {
              pointTitle: "Safety First:",
              pointDescription:
                "Your participants and staff deserve a culture that puts their wellbeing front and centre. ",
            },
            {
              pointTitle: "Ongoing Improvement:",
              pointDescription:
                "Use the incident data to drive smarter, evidence-based decisions that lift service quality. ",
            },
            {
              pointTitle: "Audit-Ready Living:",
              pointDescription:
                "NDIS auditors see complete, exact records that tell the right story at a glance. ",
            },
          ],
          dot: dots.dot2,
        },
        {
          title: "Why Choose Incident Management? ",
          pointsData: [
            {
              pointTitle: "Transparent Culture:",
              pointDescription:
                "An open logging environment where every incident gets documented and tackled head-on.",
            },
            {
              pointTitle: "Real-Time Alerts:",
              pointDescription:
                "Watch reports roll in live; your response is instant, and the gaps vanish. ",
            },
            {
              pointTitle: "Compliance, Handled:",
              pointDescription:
                "Guided templates and workflow steps keep every NDIS and audit tick in its right box. ",
            },
            {
              pointTitle: "Data Defence:",
              pointDescription:
                "Only your security role unlocks the details. Sensitive records stay safe, and edits stay accountable. ",
            },
          ],
          dot: dots.dot2,
        },
        {
          title: "",
          descriptionPoints: [
            "Incident Management is more than a notebook. It’s a live readiness tool that puts you ahead, safe and compliant. ",
            "Drive accountability, cut compliance hassle, and nurture a safer workplace from one sleek, locked-down platform. ",
          ],
          dot: dots.dot2,
        },
      ],
    },
    faqSection: {
      title: "Incident Management FAQs",
      faqData: [
        {
          question: "1. How do I report an incident?",
          answer:
            "Incidents can be reported directly within the platform through a guided process tailored to your role. The system supports accurate documentation and allows for follow-up actions and reporting to ensure incidents are addressed appropriately.",
        },
        {
          question: "2. Can I edit an incident after it's been submitted?",
          answer:
            "You can edit incident records as long as they are still open. Once an incident is marked as resolved, the record becomes locked to maintain data integrity and meet compliance standards.",
        },
        {
          question: "3. Who can see reported incidents?",
          answer:
            "Access to incident records is based on user permissions. Typically, only authorised personnel - such as administrators or designated reviewers - have broader visibility across submitted reports.",
        },
      ],
    },
  },
  Repository: {
    page: "Repository",
    hero: {
      title:
        "Think of it as your intelligent digital drawer—smooth, smart, and designed for one task: holding your vital documents securely and within reach. ",
      image: repository, // Replace with actual image import
    },
    section2: {
      title: "",
      description: "",
      points: [
        {
          title: "Secure Storage & Access Control",
          description:
            "From payroll records to company policy guides, everything nests in a single, guarded space. Drag and drop files of most common types, and they’re there.",
          dot: dots.dot1,
        },
        {
          title: "Permission Management",
          description:
            "Access is chosen, not random. Assign rights by role, or to a named individual, so files are seen only by the people who need to. ",
          dot: dots.dot2,
        },
        {
          title: "Owner-Controlled Deletion",
          description:
            "Only designated users can hit delete, so only the documents you’ve stamped as final ever leave the vault. ",
          dot: dots.dot3,
        },
        {
          title: "Why You’ll Love the Repository Module:",
          pointsData: [
            "Speed—search a few letters and the document you want appears. ",
            "Safety—only the users you’ve named can open the folders. ",
            "Clarity—you can instantly see who can read, edit, or delete any file. ",
          ],
          dot: dots.dot4,
        },
      ],
    },
    faqSection: {
      title: "Repository FAQs",
      faqData: [
        {
          question: "1. What is the repository used for?",
          answer:
            "The repository serves as a central hub for storing and managing internal documents. Users can upload, organise, and share files in a secure and structured environment, making it easy to keep important resources accessible and up to date.",
        },
        {
          question: "2. Who can delete files from the repository?",
          answer:
            "File deletion is restricted to document owners or authorised administrators, ensuring proper control and preventing accidental loss of important information.",
        },
        {
          question: "3. Can I control who accesses specific files?",
          answer:
            "Yes, access permissions can be provided to specific roles or individual users, ensuring that sensitive documents are only visible to those who need them.",
        },
      ],
    },
  },
  "Role Based Dashboard": {
    page: "Role Based Dashboard",
    hero: {
      title:
        "Dashboards built for your title! Admins, Roster Managers, Accountants, and Staff view only the info that counts, neatly organised for rapid checks, clear action, and straightforward follow-up.",
      image: roleBasedDashboard, // Replace with actual image import
    },
    section2: {
      title: "What makes this dashboard unique: ",
      description: "",
      points: [
        {
          title: "Roster Schedule Tracker",
          pointsData: [
            {
              pointTitle: "Monitor shifts by status:",
              pointDescription:
                "upcoming, ongoing, or finished. Harmonising the team becomes simple.",
            },
          ],
          dot: dots.dot1,
        },
        {
          title: "",
          description:
            "Live sign-in feeds keep you informed on staff presence and participant activity. ",
          dot: dots.dot2,
        },
        {
          title: "",
          description:
            "Handle leave submissions, documents, approvals, and incident notes, all on one screen.  ",
          dot: dots.dot3,
        },
        {
          title: "",
          description:
            "HR Insights, along with the incident log, deliver a single glance at recruitment milestones, award allocations, training stats, and incident updates. ",
          dot: dots.dot4,
        },
        {
          title: "",
          description:
            "The leave tracker delivers real-time workforce availability so you can plan with confidence. ",
          dot: dots.dot5,
        },
        {
          title: "",
          descriptionPoints: [
            "Finance processes glide along with user-friendly tools built for maximum efficiency. ",
            "Keeping momentum in employee growth means tracking approvals and progress throughout every performance cycle. ",
          ],
          dot: dots.dot6,
        },
        {
          title: "Why It Matters",
          pointsData: [
            "Personalized:  Every position sees just what it needs. ",
            "Efficient: Only the data that matters is in the frame; everything else stays out",
            "Actionable: Clickable shortcuts take you from insight to action in one motion",
            "Visual: Charts, snapshots, and live counters make it all easy to read",
          ],
          dot: dots.dot1,
        },
      ],
    },
    faqSection: {
      title: "Role-based Dashboard FAQs",
      faqData: [
        {
          question: "1. How often is the data updated?",
          answer:
            "Data refresh frequency, Real-time: Some dashboards support live data feeds. Hourly/Daily: Others may update at regular intervals.",
        },
        {
          question: "2. Who can access the dashboard?",
          answer:
            "Access depends on your role and permissions, Admins: Full access to all data and settings. Managers: Access to team-specific data. Users: Access limited to personal or assigned data.",
        },
      ],
    },
  },
  "ChaT - Secure Internal Messaging": {
    page: "ChaT - Secure Internal Messaging",
    hero: {
      title: "Chat That Works Harder Than Your Morning Coffee!",
      descriptionPoints: [
        "Chat More Productive Than Your First Cup of Coffee! ",
        "Meet Chat—your team’s private, live messaging hub that keeps everyone engaged, up to speed, and moving fast.",
        "Whether you’re moving between visits, settled at your desk, or juggling overnight shifts, TesseractApps Chat is your pocket-sized command centre for instant updates and effortless coordination. ",
      ],
      image: chat, // Replace with actual image import
    },
    section2: {
      title: "",
      description: "",
      points: [
        {
          title: "For Your Team, Only",
          pointsData: [
            "Every message stays inside your walls—no outsiders, no distractions. ",
            "Built safe, built secure, and built solely for your organisation. ",
          ],
          dot: dots.dot1,
        },
        {
          title: "Conversations That Flow",
          pointsData: [
            "Shoot a quick 1:1 message for a daily check-in. ",
            "Spin up group chats by team, by region, or by shift.",
            "Keep the whole crew in the loop the moment it matters. ",
          ],
          dot: dots.dot2,
        },
        {
          title: "Share Anything, Anytime",
          pointsData: [
            "Drop PDFs, images, voice notes, full documents—whatever you need. ",

            "Ideal for incident reports, shift notes, or a quick snap from the field.",

            "Every file stays locked inside your system, safe and sound.",
          ],
          dot: dots.dot3,
        },
        {
          title: "Real-Time, All the Time ",
          pointsData: [
            " Use it on mobile, tablet or desktop. ",

            "Messages sync instantly, no lag. ",

            "Push notifications keep you updated, no matter where you are.",
          ],
          dot: dots.dot4,
        },
        {
          title: "Built For: ",
          pointsData: [
            "Rostering teams sealing the shift rotas.",

            "Support workers shooting through field updates. ",

            "Managers who must stay on the pulse—instant incident alerts mean you’re always in control. ",

            "Admins juggling coordination across services. ",
          ],
          dot: dots.dot5,
        },
        {
          title: "Say Goodbye To:",
          pointsData: [
            " Unsecure solo chats. ",

            "Disappearing message trails. ",

            "Blurred lines between work and home. ",
          ],
          dot: dots.dot6,
        },
        {
          title: "So why risk it when you’ve got TesseractApps? ",
          description:
            "Helping NDIS teams stay sharp, connected, and totally in control—one message at a time. ",
          dot: dots.dot1,
        },
      ],
    },
    faqSection: {
      title: "ChaT FAQs",
      faqData: [
        {
          question: "1. Is the internal ChaT secure?",
          answer:
            "Yes, communication is fully secured and restricted to verified users within your organisation. It is not linked to any external messaging platforms, ensuring privacy and data protection.",
        },
        {
          question: "2. Can I share files in ChaT?",
          answer:
            "Yes, you can securely share documents such as PDFs, images, and notes in both group ChaTs and private messages, supporting seamless collaboration.",
        },
        {
          question: "3. Can I search for previous messages?",
          answer:
            "Yes, users can search past conversations by keyword or participant name. Admins also have access to detailed message logs for transparency and accountability.",
        },
      ],
    },
  },
  "My Profile": {
    page: "My Profile",
    section2: {
      title: "My Profile",
      description:
        "One-stop portal for workforce management and career advancement. ",
      points: [
        {
          dot: dots.dot1,
          title: "Personal Details ",
          description:
            "Quickly edit demographic, emergency, and payroll information with a few taps. ",
        },
        {
          dot: dots.dot2,
          title: "Leave Management",
          description:
            "Schedule, submit, and monitor leave requests, all while checking your entitlements in the mobile app.  ",
        },
        {
          dot: dots.dot3,
          title: "Awards & Professional Development ",
          description:
            "Record milestones, earn recognition, and follow guided learning pathways that accelerate your career.",
        },
        {
          dot: dots.dot4,
          title: "Reports & Payslips",
          description:
            "Retrieve payroll data, timesheets, and critical reports from a single, secure, transparent store. ",
        },
        {
          dot: dots.dot5,
          title: "Performance Insights",
          description:
            "Define career objectives, log milestones, and prep for reviews using evidence-based clarity. ",
        },
        {
          dot: dots.dot6,
          title: "Availability & Scheduling",
          description:
            "Post your available hours to tweak rosters, creating a seamless workflow. ",
        },
      ],
    },
    section3: [
      {
        title: "Why My Profile?",
        points: [
          "One-stop access—everything you need through a single sign-on. ",
          "Self-service controls—update your profile without waiting for admin. ",
          "Purposeful Career Growth—Leverage structured tools to boost skills and propel career pathways. ",
          "Personalised Engagement Hub—Save preferences for a tailored and continually updated experience. ",
        ],
        images: [],
      },
    ],
    faqSection: {
      title: "My Profile FAQs",
      faqData: [
        {
          question: "1. Where can I complete my training?",
          answer:
            "All required training can be accessed directly through your profile once you're logged onto the platform. The training experience is fully online, allowing you to complete modules at your own pace, anytime, and from anywhere. You'll be notified when new training is assigned, and your progress is tracked to ensure completion and compliance with organisational standards. This streamlined process helps you stay current with certifications, policies, and role-specific learning - all within a secure and user-friendly environment.",
        },
        {
          question:
            "2. How can I prepare for and succeed in my performance review?",
          answer:
            "Performance reviews within our platform are designed to support personal development and align individual goals with organisational expectations. These reviews are initiated by your organisation's administrators and follow a structured process. To succeed in your performance review:",
          points: [
            "Stay engaged with your responsibilities and objectives throughout the review period.",
            "Access and complete your self-assessment through your profile when notified.",
            "Be honest and reflective in your responses, highlighting achievements and identifying areas for growth.",
            "Use feedback constructively, as the final review includes input from designated reviewers or approvers who provide valuable insights.",
          ],
          conclusion:
            "The performance review process is transparent, fair, and supportive of your professional development, ensuring both you and your organisation grow together.",
        },
        {
          question: "3. How do I request leave?",
          answer:
            "Users can submit leave requests through their profile section. Leave applications are routed to approvers for review and approval within the platform.",
        },
      ],
    },
  },
  Forms: {
    page: "Forms",
    hero: {
      title:
        "Smart Forms: Role-specific forms are designed and managed in-step with the workflow. ",
      description:
        "Module-Based Solution: Build, circulate, and oversee forms without leaving the app.",
      image: forms, // Replace with actual image import
    },
    section2: {
      title: "",
      description: "",
      points: [
        {
          title: "Create Forms with Ease:",
          pointsData: [
            "Use the drag-and-drop editor to add text fields, dropdowns, checkboxes, radio buttons, file uploads, and digital signatures with just a few clicks. ",
            "The design places users first: create your form once, and it gradually evolves into a reusable asset—no technical skills necessary. ",
            "Choose from role-based categories, incident-focused modules, and a straightforward version control that gently shepherds each edit.",
          ],
          dot: dots.dot1,
        },
        {
          title: "Role-Based Access Control",
          description:
            "Customized permission sets ensure that only the right users can create, edit, or submit form templates, keeping every piece of sensitive data under lock and key. ",
          dot: dots.dot2,
        },
        {
          title: "Seamless Form Submissions",
          description:
            "Optimized for smartphones and tablets, your team can document evidence from any angle, at any moment. ",
          dot: dots.dot3,
        },
        {
          title: "Collect digital signatures directly in the form.",
          description: "",
          dot: dots.dot3,
        },
        {
          title:
            "Automatically associate each submission with the relevant client or incident record.",
          description: "",
          dot: dots.dot3,
        },
        {
          title: "Why Teams Value the Forms Module: ",
          pointsData: [
            "Transition from paper once and for all. ",
            "Align with every NDIS and quality requirement, with total assurance.",
            "Slash admin hours with intelligent, reusable templates.",
          ],
          dot: dots.dot3,
        },
      ],
    },
    faqSection: {
      title: "Forms FAQs",
      faqData: [
        {
          question: "1. Can I create custom forms for my organisation?",
          answer:
            "Yes, our platform supports the creation of flexible forms tailored to your organisation's needs—whether for client onboarding, staff documentation, or operational workflows. The process is intuitive and requires no technical expertise.",
        },
        {
          question: "2. How are forms shared or assigned to users?",
          answer:
            "Forms can be made available based on user roles or the specific context in which they're needed. This ensures the right people access the right forms at the right time, improving efficiency and compliance.",
        },
        {
          question: "3. Is there a way to track form submissions?",
          answer:
            "Yes, all submitted forms are recorded with timestamps and traceable activity history. You can also generate reports to review submission data, helping you maintain accurate records and accountability across your organisation.",
        },
      ],
    },
  },
  Accounting: {
    page: "Accounting",
    hero: {
      title:
        "Smart Accounting, Limitless Possibilities — Your Gateway to Effortless Financial Mastery!",
      descriptionPoints: [
        "All-in-One Financial Hub: Seamlessly manage payroll, invoicing, transactions and   compliance — all from one secure, intuitive platform.",
        "Built for Clarity & Growth: Automate routine tasks and   generate reports effortlessly, so you can focus on scaling your business with confidence. ",
      ],
      image: accounting, // Replace with actual image import
    },
    section2: {
      title: "",
      description: "",
      points: [
        {
          title: "Payroll",
          pointsData: [
            "Payroll, Perfected: From timesheets to pay slips, automate each step with intelligent rules, tax calculations, and bank-ready ABA file export. ",
            "Effortless Accuracy: Track hours, process pay runs and ensure compliance with calculations that require no manual intervention.",
          ],
          dot: dots.dot1,
        },
        {
          title: "Sales & Purchases",
          pointsData: [
            {
              pointTitle: "Send, Track, Get Paid — All in One Place ",
              pointDescription:
                "Issue invoices, log purchases, and oversee payments with a single smart invoicing engine. ",
            },
            {
              pointTitle: "From Clients to Compliance — Covered ",
              pointDescription:
                "Bill customers or manage vendor expenses; enjoy accurate, real-time records without the clutter",
            },
          ],
          dot: dots.dot2,
        },
        {
          title: "Bank Feeds",
          pointsData: [
            {
              pointTitle: "Connect & Reconcile Instantly",
              pointDescription:
                "Link your bank accounts to auto-import transactions and match them in seconds, eliminating manual keystrokes. ",
            },
            {
              pointTitle: "See the Full Picture ",
              pointDescription:
                "Access a real-time, clear view of your financial activity and stay in control with live insights. ",
            },
          ],
          dot: dots.dot3,
        },
        {
          title: "Chart of Accounts",
          pointsData: [
            {
              pointTitle: "Tailored Financial Clarity ",
              pointDescription:
                "Design a flexible chart of accounts that meets your organization’s reporting needs — no more one-size-fits-all. ",
            },
            {
              pointTitle: "Smart Categorization, Effortless Clarity ",
              pointDescription:
                "Quickly group income, expenses, assets, and liabilities for sharper decisions and cleaner, more reliable reports. ",
            },
          ],
          dot: dots.dot4,
        },
        {
          title: "General Ledger",
          pointsData: [
            {
              pointTitle: "Total Transparency:",
              pointDescription:
                "Explore a complete ledger that logs every transaction, ideal for audits and actionable insights.  ",
            },
            {
              pointTitle: "One-Click Export:",
              pointDescription:
                "Extract data instantly whenever you need it—stay always ready for a deeper financial dive. ",
            },
          ],
          dot: dots.dot5,
        },
        {
          title: "Financial Reports",
          pointsData: [
            {
              pointTitle: "Live Insights, No Guessing ",
              pointDescription:
                "Pull balance sheets, P&L statements, payroll data, and detailed expense reports all in a single tap. ",
            },
            {
              pointTitle: "Data-Driven Decisions",
              pointDescription:
                "Count on precise, current reports built for your unique business context—no lag, no doubt.  ",
            },
          ],
          dot: dots.dot6,
        },
        {
          title: "Accounting Settings",
          pointsData: [
            {
              pointTitle: "Personalize Every Detail: ",
              pointDescription:
                "Set up tax rules, payment terms, and default ledger accounts that match your daily operations.  ",
            },
            {
              pointTitle: "Designed for You:",
              pointDescription:
                "Sync your financial framework with your workflow—no workarounds, just pure control. ",
            },
          ],
          dot: dots.dot1,
        },
        {
          title: "Fully Integrated",
          pointsData: [
            {
              pointTitle: "Seamless Integration: ",
              pointDescription:
                "The TesseractApps accounting engine connects payroll, rosters, and billing—eliminating duplicate entries and info gaps. ",
            },
            {
              pointTitle: "Smoother, Error-Free Flow: ",
              pointDescription:
                "Data glides automatically between modules, speeding up processes and cleaning up your financials.",
            },
          ],
          dot: dots.dot2,
        },
      ],
    },
    faqSection: {
      title: "Accounting FAQs",
      faqData: [
        {
          question: "1. Can I manage payroll through the platform?",
          answer:
            "Yes, the platform supports payroll processing, including pay run management and payslip access. You can also generate the necessary files for banking and compliance with ease.",
        },
        {
          question: "2. How are invoices managed in the system?",
          answer:
            "Invoices can be efficiently created, tracked, and managed—whether they're drafts, issued, or received. The platform also aligns financial data with your organisation's accounting structure for consistent recordkeeping.",
        },
        {
          question:
            "3. What is a general ledger and is it available in the system?",
          answer:
            "A general ledger is a comprehensive record of an organisation's financial transactions. It includes essential details such as dates, amounts, descriptions, debits, and credits, which are used to generate key financial reports like income statements and balance sheets. The system maintains this record automatically as transactions occur.",
        },
        {
          question: "4. Does the platform support Single Touch Payroll (STP)?",
          answer:
            "Yes, Single Touch Payroll (STP) reporting is supported, helping ensure compliance with government regulations by integrating payroll information with your accounting records.",
        },
        {
          question: "5. Can I track invoices issued to participants?",
          answer:
            "Yes, all financial transactions - including participant-related invoices - can be tracked within the system. These records are categorised and accessible through standard financial structures, offering full visibility across accounts.",
        },
        {
          question: "6. Can I generate wage reports?",
          answer:
            "Yes, wage reports are available and can be exported in commonly used formats such as Excel, making them easy to review, share, or store for compliance and analysis.",
        },
      ],
    },
  },
  "T Learning Hub": {
    page: "T Learning Hub",
    hero: {
      title:
        "T Learning Hub—an all-in-one companion your every crew unit must master—live, light, always at hand. ",
      description:
        "Grow your team by matching each learning step to their role and daily duties.",
      image: tLearingHub, // Replace with actual image import
    },
    section2: {
      title: "",
      description: "",
      points: [
        {
          title: "XCLUSIVELY TUNED LEARNING PORTAL:",
          pointsData: [
            "Guided walkthroughs give step-by-step instructions and built-in feature trials. ",
            "Fully mobile, learning fits into any pocket, anytime, anywhere.",
            "From their first login to mastering fine details, T Learning Hub charts a clear,personal path to exceptional readiness. ",
            "Support tickets drop—proactive learning steps up.",
            "Accelerate alongside expert mentors and unlock every crew member’s full potential. ",
          ],
          dot: dots.dot1,
        },
        {
          title: "Key Features",
          pointsData: [
            {
              pointTitle: "Role-Based Content Visibility:",
              pointDescription:
                "Training materials match what the user’s role demands. ",
            },
            {
              pointTitle: "Centralized Training Library: ",
              pointDescription:
                "All resources are in one searchable, expandable vault. ",
            },
            {
              pointTitle: "Automatic Redirection: ",
              pointDescription:
                "The system points learners to what matters for their role, instantly. ",
            },
            {
              pointTitle: "Incremental Updates:",
              pointDescription:
                "Each product release refreshes training content automatically. ",
            },
            {
              pointTitle: "Comprehensive Support:",
              pointDescription:
                "The system scales for onboarding, upskilling, and routine refresh training. ",
            },
          ],
          dot: dots.dot2,
        },
      ],
    },
    faqSection: {
      title: "T Learning Hub FAQs",
      faqData: [
        {
          question: "1. Who has access to training content?",
          answer:
            "Training access is streamlined for each user's role. This ensures that individuals see only the content relevant to their responsibilities, supporting more efficient and targeted learning.",
        },
        {
          question: "2. Can I track my training progress?",
          answer:
            "Yes, users can easily monitor their training status, view which courses have been completed, and revisit learning materials - such as videos - whenever needed.",
        },
        {
          question: "3. Is the training library regularly updated?",
          answer:
            "Yes, the training content is refreshed on an ongoing basis to align with platform enhancements, new features, and evolving best practices, ensuring users always have access to the most up-to-date information.",
        },
      ],
    },
  },
};

import ourStory1 from "../assets/ourStory1.png";
import ourStory2 from "../assets/ourStory2.png";
import ourStory3 from "../assets/ourStory3.png";
import ourStory4 from "../assets/ourStory4.png";
import ourStory5 from "../assets/ourStory5.png";
export const ourStoryData = [
  {
    id: 5,
    image: ourStory5,
    text: `Today, TesseractApps stands as a powerful, Salesforce-based 
platform purpose-built for the Australian care sector. We help 
organisations navigate NDIS compliance, simplify operations, 
and ultimately deliver better outcomes for participants and 
staff alike.`,
  },
  {
    id: 0,
    image: "",
    text: "",
  },
  {
    id: -1,
    image: "",
    text: "",
  },
  {
    id: 4,
    image: ourStory4,
    text: `In January 2025, TesseractApps officially went live—delivering a 
fully operational, market-ready solution that integrates everything 
we learned from our early adopters.`,
  },
  {
    id: 0,
    image: "",
    text: "",
  },
  {
    id: -1,
    image: "",
    text: "",
  },
  {
    id: 3,
    image: ourStory3,
    text: `By mid-2024, we launched the beta version of our first product, 
T-NDIS, and onboarded over 10 providers whose practical
 insights were instrumental in refining the platform.`,
  },
  {
    id: 0,
    image: "",
    text: "",
  },
  {
    id: -1,
    image: "",
    text: "",
  },
  {
    id: 2,
    image: ourStory2,
    text: `In 2023, we built our foundation with a Human-Centred Design 
approach, grounded in empathy, user research, and real-world 
collaboration. Through rapid prototyping, iterative development, 
and continuous feedback from care professionals, we ensured 
every feature addressed real operational challenges.`,
  },
  {
    id: 0,
    image: "",
    text: "",
  },
  {
    id: -1,
    image: "",
    text: "",
  },
  {
    id: 1,
    image: ourStory1,
    text: `TesseractApps was born from a simple yet impactful conversation 
during a local cricket match in 2022—an exchange that sparked 
the vision for a smarter, more connected way to support care 
and NDIS providers.`,
  },
];
